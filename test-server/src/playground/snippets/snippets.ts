import {ESLBaseElement} from '../../../../src/modules/esl-base-element/core';
import {bind} from '../../../../src/modules/esl-utils/decorators/bind';
import {UIPRoot} from '../core/root';
import {EventUtils} from '../../../../src/modules/esl-utils/dom/events';

export class UIPSnippets extends ESLBaseElement {
  public static is = 'uip-snippets';

  public static ACTIVE_CLASS = 'active';

  protected _root: UIPRoot;

  public get $items(): HTMLElement[] {
    const items = this.querySelectorAll('.snippets-list-item');
    return Array.from(items) as HTMLElement[];
  }

  public get $active(): HTMLElement | null {
    return this.$items.find(item => item.classList.contains(UIPSnippets.ACTIVE_CLASS)) || null;
  }

  public set $active(snippet: HTMLElement | null) {
    this.$active?.classList.remove(UIPSnippets.ACTIVE_CLASS);
    snippet?.classList.add(UIPSnippets.ACTIVE_CLASS);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.bindEvents();

    this._root = this.closest(`${UIPRoot.is}`) as UIPRoot;

    this.render();
    if (!this.$active) this.$active = this.$items[0];
    this.sendMarkUp();
  }

  protected disconnectedCallback() {
    super.disconnectedCallback();
    this.unbindEvents();
  }

  protected bindEvents() {
    this.addEventListener('click', this._onClick);
  }

  protected unbindEvents() {
    this.removeEventListener('click', this._onClick);
  }

  protected render(): void {
    const snippets = this.querySelectorAll('template[uip-snippet]');
    if (!snippets.length) return;
    const ul = this._root.querySelector('.snippets-list');

    snippets.forEach(snippet => {
      const li = document.createElement('li');
      li.classList.add('snippets-list-item');
      const label = snippet.getAttribute('label');
      if (!label) return;
      li.innerHTML = label;
      li.appendChild(snippet);
      ul?.appendChild(li);
    });
  }

  protected sendMarkUp(): void {
    const tmpl = this.$active?.querySelector('template[uip-snippet]');
    if (!tmpl) return;
    const detail = {source: UIPSnippets.is, markup: tmpl.innerHTML};
    EventUtils.dispatch(this, 'request:change', {detail});
  }

  @bind
  protected _onClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('snippets-list-item')) return;
    this.$active = target;
    this.sendMarkUp();
  }
}

