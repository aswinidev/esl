import type {ESLBaseElementShape} from '../../esl-base-element/core/esl-base-element.shape';
import type {ESLTrigger} from './esl-trigger';

/**
 * Tag declaration interface of {@link ESLTrigger} element
 * Used for TSX declaration
 */
export interface ESLTriggerTagShape<T extends ESLTrigger = ESLTrigger> extends ESLBaseElementShape<T> {
  /** Define target Toggleable {@link TraversingQuery} selector. `next` by default */
  'target'?: string;

  /** Define an action to pass to the Toggleable */
  'mode'?: 'show' | 'hide' | 'toggle';

  /** Define CSS classes to set on active state */
  'active-class'?: string;
  /** Define target element {@link TraversingQuery} selector to set `active-class` */
  'active-class-target'?: string;

  /** Define selector for ignored inner elements */
  'ignore'?: string;

  /** Define click event tracking media query */
  'track-click'?: boolean | string;
  /** Define hover event tracking media query */
  'track-hover'?: boolean | string;

  /** Define selector of inner target element to place aria attributes */
  'a11y-target'?: string;

  /** Define show delay value */
  'show-delay'?: string | number;
  /** Define hide delay value */
  'hide-delay'?: string | number;
  /** Define show delay value override for hover */
  'hover-show-delay'?: string | number;
  /** Define hide delay value override for hover */
  'hover-hide-delay'?: string | number;

  /** Allowed children */
  children?: any;
}

declare global {
  namespace JSX {
    export interface IntrinsicElements {
      /** {@link ESLTrigger} custom tag */
      'esl-trigger': ESLTriggerTagShape;
    }
  }
}
