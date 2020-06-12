/**
 * Smart Rule List
 * @version 1.0.0
 * @author Yuliya Adamskaya
 *
 * Helper class that extend provide Observable Rule Handler that resolve payload based on current device configuration.
 * Supports
 * - CSS query matching check
 * - DPR display queries (@x1 | @x2 | @x3)
 * - Screen default sizes shortcuts @[-|+](XS|SM|MD|LG|XL)
 * - Query matching change listeners
 * - Mobile / full browser detection (@MOBILE|@DESKTOP)
 */

import {Observable} from '../abstract/observable';
import SmartMediaQuery from './smart-media-query';

type PayloadParser<T> = (val: string) => T;

class SmartMediaRule<T> extends SmartMediaQuery {
	private readonly _payload: T;
	private readonly _default: boolean;

	constructor(payload: T, query: string) {
		super(query);
		this._default = !query;
		this._payload = payload;
	}

	public toString() {
		return `${this.query.media} => ${this._payload}`;
	}

	get payload(): T {
		return this._payload;
	}
	get default(): boolean {
		return this._default;
	}

	public static parse<T>(lex: string, parser: PayloadParser<T>) {
		const [query, payload] = lex.split('=>');
		return new SmartMediaRule<T>(parser(payload.trim()), query.trim());
	}

	public static all<T>(payload: T) {
		return new SmartMediaRule<T>(payload, 'all');
	}
	public static empty() {
		return SmartMediaRule.all(null);
	}
}

export default class SmartMediaRuleList<T> extends Observable {
	private _active: SmartMediaRule<T>;
	private readonly _default: SmartMediaRule<T>;
	private readonly _rules: SmartMediaRule<T>[];

	public static STRING_PARSER = (val: string) => val;
	public static OBJECT_PARSER = <T extends object> (val: string): T => {
		try {
			return eval('(' + val + ')') as T;
		} catch (e) {
			return null;
		}
	};

	private static parseRules<T>(str: string, parser: PayloadParser<T>): SmartMediaRule<T>[] {
		const parts = str.split('|');
		const rules: SmartMediaRule<T>[] = [];
		parts.forEach((_lex: string) => {
			const lex = _lex.trim();
			if (!lex) {
				return;
			}
			if (lex.indexOf('=>') === -1) {
				// Default rule should have lower priority
				rules.unshift(SmartMediaRule.all(parser(lex)));
			} else {
				const rule = SmartMediaRule.parse(lex, parser);
				rule && rules.push(rule);
			}
		});
		return rules;
	}

	public static parse<T>(query: string, parser: PayloadParser<T>) {
		return new SmartMediaRuleList<T>(query, parser);
	}

	private constructor(query: string, parser: PayloadParser<T>) {
		super();
		if (typeof query !== 'string') {
			throw new Error('SmartRuleList require first parameter (query) typeof string');
		}
		this._rules = SmartMediaRuleList.parseRules(query, parser);
		this._rules.forEach((rule) => rule.addListener(this._onMatchChanged));
		this._default = this._rules.filter((rule) => rule.default)[0];
	}

	get rules() {
		return this._rules;
	}

	get _activeRule() {
		const satisfied = this.rules.filter((rule) => rule.matches);
		return satisfied.length > 0 ? satisfied[satisfied.length - 1] : SmartMediaRule.empty();
	}

	get active() {
		if (!this._active) {
			this._active = this._activeRule;
		}
		return this._active;
	}

	get activeValue(): T {
		const value = this.active.payload;
		if (typeof value === 'string' || !this._default) {
			return value;
		}
		return Object.assign({}, this._default.payload || {}, value);
	}

	private _onMatchChanged = () => {
		const rule = this._activeRule;
		if (this._active !== rule) {
			this._active = rule;
			this.fire(rule);
		}
	};
}