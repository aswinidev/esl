import {PromiseUtils} from '../promise';

describe('PromiseUtils', () => {
  describe('Common methods', () => {
    test('resolve', () => PromiseUtils.resolve(true).then((v) => expect(v).toBe(true)));
    test('reject', () => PromiseUtils.reject(true).catch((v) => expect(v).toBe(true)));

    test('deferred.resolve', () => {
      const def$$ = PromiseUtils.deferred();
      def$$.resolve(1);
      return def$$.promise.then((n) => expect(n).toBe(1));
    })

    test('deferred.reject', () => {
      const def$$ = PromiseUtils.deferred();
      def$$.reject(1);
      return def$$.promise.catch((n) => expect(n).toBe(1));
    })
  });

  describe('Converters', () => {
    test('fromTimeout', () =>
        PromiseUtils.fromTimeout(30, true)
          .then((v) => expect(v).toBe(true)),
      60
    );

    test('fromEvent', () => {
      const el = document.createElement('div');
      setTimeout(() => el.dispatchEvent(new CustomEvent('test')), 20);
      return PromiseUtils.fromEvent(el, 'test').then((e) => expect(e.type).toBe('test'));
    });
    test('fromEvent: timeout', () => {
      const el = document.createElement('div');
      setTimeout(() => el.dispatchEvent(new CustomEvent('test')), 100);
      return PromiseUtils.fromEvent(el, 'test', 10).catch(() => expect(true).toBe(true));
    });

    test('fromMarker', () => {
      const el = document.createElement('div');
      (el as any).test = true;
      return PromiseUtils.fromMarker(el, 'test').then((e) => expect(true).toBe(true));
    });
  });

  describe('tryUntil tests', () => {
    test('successful', () => {
      let i = 0;

      setTimeout(() => i++, 30);
      setTimeout(() => i++, 60);

      return PromiseUtils.tryUntil(() => i > 1, 10, 10)
        .then(() => expect(true).toBe(true));
    });
    test('failed', () => {
      return PromiseUtils.tryUntil(() => false, 5, 10)
        .catch(() => expect(true).toBe(true));
    });
  });
});
