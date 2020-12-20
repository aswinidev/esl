# ESL Utils

ESL Utils - is the module that contains a set of common utilities for working with DOM,
BOM and other simple but handy things that ESL components use,
and you also can use it for free.

All ESL Utils helpers are super simple and atomic, be sure that neither one of the utilities require the whole library. 
Even if you use the whole utils module, it is still tiny.

---

## Modules

- ### Abstract

  - #### [Observable](./abstract/observable.ts) - small base class that implements observable pattern. 


- ### Async

  - #### [Debounce](./async/debounce.ts) - debounce function decorator.
    Debouncing is a pattern commonly used for rate limiting function calls with a timeout.

  - #### [Delayed Task](./async/delayed-task.ts) - common helper to plan task (function) to be executed with or without a timeout.
    New task planning request cancel a previous task in a DelayedTask instance in case it is not happened yet. 

  - #### [Promise Utils](./async/promise.ts) - a set of Promise helpers.
    Allows converting DOM Events, timeouts, pooling check, etc. to ES6 Promise or create a Deferred object 
    that allows to resolve or reject related Promise.

  - #### [RAF(Rendering callback) Utils](./async/raf.ts) - Request Animation Frame common helpers.
    Include RAF Decorator that postpone multiple function call to single one before rendering. 
    Also include after next render deferring function.

  - #### [Throttle](./async/throttle.ts) - throttling function decorator.
    Throttling is a pattern that allows to limit function call to one execution in timeout.


- ### TS Decorators

    - #### [@bind](./decorators/bind.ts) - TS decorator to bind method context to current class instance.

    - #### [@memoize](./decorators/memoize.ts) - TS decorator to make method or get acсessor memoized.


- ### DOM Helpers
  
    - #### [Keycodes](./dom/keycodes.ts) - keyboard key-codes constants
  
    - #### [RTL Utils](./dom/rtl.ts) - Utils to detect RTL and RTL specific browsers behavior
  
    - #### [Scripts](./dom/script.ts) - script loading utility to limit and track loading
  
    - #### [Scroll](./dom/scroll.ts) - scroll locking methods
      *Note: uses [scroll.less](./dom/scroll.less) styles* 
  
    - #### [Styles](./dom/styles.ts) - small utility to work with CSS classes in a JQuery manner
  
    - #### [DOM Traversing](./dom/traversing.ts) - a set of utils to find DOM elements or check their relations. 
  
- ### Environment
  
    - #### [Device Detector](src/modules/esl-utils/environment/device-detector.ts) - set of user agent based checks like engine or device type
  
- ### Miscellaneous Utils

    - #### [Array](./misc/array.ts) - array utils (uniq, flat, wrap, etc)
  
    - #### [Format](./misc/format.ts) - string format utils
  
    - #### [Function](./misc/functions.ts) - simple functions and types 
  
    - #### [Memoize](./misc/memoize.ts) - memoization function decorator
      Memoization patten allows executing pure function once and then use cached result. 
  
    - #### [Object](./misc/object.ts) - object common utils
  
    - #### [UID](./misc/uid.ts) - unique identifier generation util 
