import '../../../polyfills/es5-target-shim';
import {ESLBaseElement, attr, override, boolAttr, jsonAttr} from '../core';

describe('Decorator: override', () => {
  class TestBaseElement extends ESLBaseElement {
    @attr()
    public field: string;
    @boolAttr()
    public field2: boolean;
    @jsonAttr()
    public field3: {a: number};
    @attr()
    public field4?: string;
    @attr({readonly: true})
    public readonlyField: string;
  }

  describe('Overriding @attr', () => {
    class TestElement extends TestBaseElement {
      @override('test')
      public field: string;
      @override()
      public field4?: string;
      @override('test')
      public readonlyField: string;
    }
    customElements.define('attr-override-1', TestElement);

    test('should override simple @attr decorator', () => {
      const el = new TestElement();
      expect(el.field).toBe('test');
    });
    test('should override readonly @attr decorator', () => {
      const el = new TestElement();
      expect(el.readonlyField).toBe('test');
    });
    test('override should be writeable', () => {
      const el = new TestElement();
      el.field = el.readonlyField = 'hi';
      expect(el.field).toBe('hi');
      expect(el.readonlyField).toBe('hi');
    });
    test('original decorator should not be executed', () => {
      const el = new TestElement();
      el.field = 'hi';
      expect(el.getAttribute('field')).toBe(null);
    });

    test('should have undefined as a default', () => {
      const el = new TestElement();
      expect('field4' in el).toBe(true);
      expect(el.field4).toBe(undefined);
    });
  });

  describe('Overriding @boolAttr', () => {
    class TestElement extends TestBaseElement {
      @override(true)
      public field2: boolean;
    }
    customElements.define('bool-attr-override-1', TestElement);

    test('should override simple @boolAttr decorator', () => {
      const el = new TestElement();
      expect(el.field2).toBe(true);
    });
    test('override should be writeable', () => {
      const el = new TestElement();
      el.field2 = false;
      expect(el.field2).toBe(false);
    });
    test('original decorator should not be executed', () => {
      const el = new TestElement();
      expect(el.getAttribute('field2')).toBe(null);
    });
  });

  describe('Overriding @jsonAttr', () => {
    class TestElement extends TestBaseElement {
      @override({a: 2})
      public field3: {a: number};
    }
    customElements.define('json-attr-override-1', TestElement);

    test('should override simple @jsonAttr decorator', () => {
      const el = new TestElement();
      expect(el.field3).toEqual({a: 2});
    });
    test('override should be writeable', () => {
      const el = new TestElement();
      el.field3 = {a: 4};
      expect(el.field3).toEqual({a: 4});
    });
    test('original decorator should not be executed', () => {
      const el = new TestElement();
      expect(el.getAttribute('field3')).toBe(null);
    });
  });

  describe('Overriding @attr with readonly decorator', () => {
    class TestElement extends TestBaseElement {
      @override('test', true)
      public field: string;
    }
    customElements.define('readonly-attr-override-1', TestElement);

    test('should override simple @attr decorator', () => {
      const el = new TestElement();
      expect(el.field).toBe('test');
    });
    test('override should be writeable', () => {
      const el = new TestElement();
      expect(() => el.field ='hi').toThrowError();
      expect(el.field).toBe('test');
    });
  });

  describe('Overridden property can be defined through ES initial value ', () => {
    class TestElement extends TestBaseElement {
      @override()
      public field: string = '123';
    }
    customElements.define('es-initial-attr-override-1', TestElement);

    test('should override simple @attr decorator', () => {
      const el = new TestElement();
      expect(el.field).toBe('123');
    });
  });

  test('Overriding own property produce error', () => {
    expect(() => {
      class TestElement extends ESLBaseElement {
        @override('')
        @attr()
        public field: string;
      }
      new TestElement();
    }).toThrowError(/own property/);
  });
});
