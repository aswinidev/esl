import {ExportNs} from '../../esl-utils/environment/export-ns';
import {ESLTrigger} from '../../esl-trigger/core';

@ExportNs('Tab')
export class ESLTab extends ESLTrigger {
  public static is = 'esl-tab';

  public updateA11y() {
    const target = this.$a11yTarget;
    if (!target) return;
    target.setAttribute('aria-selected', String(this.active));
    target.setAttribute('tabindex', this.active ? '0' : '-1');

    // TODO: auto generate
    if (this.$target.id) {
      this.setAttribute('aria-controls', this.$target.id);
    }
  }
}
