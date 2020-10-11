import { tuple } from '../misc/functions';

/**
 * Find sibling element by selector and direction
 * */
export function findSibling(base: Element, sel?: string, backward = false) {
	for(let target: Element | null = base; (target = backward ? target.previousElementSibling : target.nextElementSibling);) {
		if (!sel || target.matches(sel)) return target;
	}
	return null;
}

type PseudoProcessor = (base: Element, sel?: string, multiple?: boolean) => Element | Element[] | null;
type PseudoProcessorMap = {[key: string]: PseudoProcessor};
const SELECTORS: PseudoProcessorMap = {
	'::next': (base: Element, sel?: string) => findSibling(base, sel, false),
	'::prev': (base: Element, sel?: string) => findSibling(base, sel, true),
	'::child': (base: Element, sel?: string, multiple?: boolean) => {
		if (multiple) {
			return Array.from(sel ? base.querySelectorAll(sel) : base.children);
		}
		return sel ? base.querySelector(sel) : base.firstElementChild;
	},
	'::parent': (base: Element, sel?: string) => {
		return sel && base.parentElement ? base.parentElement.closest(sel) : base.parentElement;
	}
};
// /(::parent|::child|::next|::prev)/
const PSEUDO_SELECTORS_REGEX = new RegExp(`(${Object.keys(SELECTORS).join('|')})`, 'g');

/**
 * Extended selector support
 * Supports plain CSS selectors, extended ::parent, ::child, ::next and ::prev pseudo-selectors
 *
 * @example "#id .class [attr]" - find by CSS selector in current document
 * @example "" - get current target
 * @example "::next" - get next element
 * @example "::prev" - get previous element
 * @example "::parent" - get target parent
 * @example "::parent(#id .class [attr])" - find closest parent matching passed selector
 * @example "::child(#id .class [attr])" - find child element(s) that match passed selector
 * @example "::parent::child(some-tag)" - find child element(s) that match tag 'some-tag' in the parent
 * @example "#id .class [attr]::parent" - find parent of element matching selector '#id .class [attr]' in document
 */
export function findTarget(query: string, current: HTMLElement | null = null, multiple = false) {
	const parts = query.split(PSEUDO_SELECTORS_REGEX).map((term) => term.trim());
	const rootSel = parts.shift();
	const initialEl = rootSel ? document.querySelector(rootSel): current;
	if (!current && !rootSel && parts.length) {
		console.warn(`root is not specified for extended selector '${query}'`);
		return null;
	}
	return tuple(parts).reduce((target, [name, selString]) => {
		if (!target || !name) return null;
		const base = Array.isArray(target) ? target[0] : target;
		const sel = (selString || '').replace(/^\(/, '').replace(/\)$/, '');
		return SELECTORS[name](base, sel, multiple);
	}, initialEl);
}

/**
 * Check that {@param nodeA} and {@param nodeB} is from the same tree path.
 */
export function isRelative(nodeA: Node | null, nodeB: Node | null) {
    return nodeA && nodeB && (nodeA.contains(nodeB) || nodeB.contains(nodeA));
}

/**
 * Find closest parent node of {@param node} by {@param predicate}.
 * {@param skipSelf} to skip initial node
 */
export function closestBy(node: Node, predicate: (node: Node) => boolean, skipSelf = false): Node | null {
  let current = skipSelf && node ? node.parentNode : node;
  while (current) {
    if (predicate(current)) return current;
    current = current.parentNode;
  }
  return null;
}
