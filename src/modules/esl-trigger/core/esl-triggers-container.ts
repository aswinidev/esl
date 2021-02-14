import {ExportNs} from '../../esl-utils/environment/export-ns';
import {ESLBaseElement} from '../../esl-base-element/core';
import {ESLTrigger} from './esl-trigger';
import {bind} from '../../esl-utils/decorators/bind';
import {ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP} from '../../esl-utils/dom/keys';


export type GroupTarget = 'next' | 'prev' | 'current';

@ExportNs('TriggersContainer')
export class ESLTriggersContainer extends ESLBaseElement {
  public static is = 'esl-triggers-container';
  public static eventNs = 'esl:triggers-container';

  protected connectedCallback() {
    super.connectedCallback();
    this.bindEvents();
  }

  protected disconnectedCallback() {
    super.disconnectedCallback();
    this.unbindEvents();
  }

  protected bindEvents() {
    this.addEventListener('keydown', this._onKeydown);
  }

  protected unbindEvents() {
    this.removeEventListener('keydown', this._onKeydown);
  }

  @bind
  protected _onKeydown(e: KeyboardEvent) {
    const target = e.target;
    if (!(target instanceof ESLTrigger)) return;

    if ([ARROW_UP, ARROW_LEFT].includes(e.key)) {
      this.goTo('prev', target);
      e.preventDefault();
    }

    if ([ARROW_DOWN, ARROW_RIGHT].includes(e.key)) {
      console.log('right');
      this.goTo('next', target);
      e.preventDefault();
    }
  }

  get $triggers(): ESLTrigger[] {
    const els = this.querySelectorAll(ESLTrigger.is);
    return els ? Array.from(els) as ESLTrigger[] : [];
  }

  public next(trigger: ESLTrigger) {
    const triggers = this.$triggers;
    const index = triggers.indexOf(trigger);
    return triggers[(index + 1) % triggers.length];
  }

  public prev(trigger: ESLTrigger) {
    const triggers = this.$triggers;
    const index = triggers.indexOf(trigger);
    return triggers[(index - 1 + triggers.length) % triggers.length];
  }

  public current(): ESLTrigger | null {
    return this.$triggers.find((el) => el.active) || null;
  }

  public goTo(target: GroupTarget, from: ESLTrigger | null = this.current()) {
    if (!from) return;
    const targetEl = this[target](from);
    if (!targetEl) return;
    targetEl.focus();
  }
}
