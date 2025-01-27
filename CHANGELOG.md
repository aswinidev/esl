# [3.3.0](https://github.com/exadel-inc/esl/compare/v3.2.0...v3.3.0) (2021-10-08)


### Features

* **esl-scrollbar:** add at-end / at-start markers ([ce0a6fe](https://github.com/exadel-inc/esl/commit/ce0a6fecebdb7332674aa3369674c80c5937bab8))
* **esl-scrollbar:** dispatch position event ([ad7e7db](https://github.com/exadel-inc/esl/commit/ad7e7db105d75f08be2f47225b02eb1311b2ab00))
* **esl-utils:** add new groupBy utility to the array utils ([5d65b82](https://github.com/exadel-inc/esl/commit/5d65b82979113ae3020a948a56a816dbacf88a43)), closes [#503](https://github.com/exadel-inc/esl/issues/503)

# [3.2.0](https://github.com/exadel-inc/esl/compare/v3.1.0...v3.2.0) (2021-09-22)


### Bug Fixes

* **esl-trigger:**  can be of the type null ([58f0644](https://github.com/exadel-inc/esl/commit/58f0644dee92dcb37c76b86df2e5da8bb4ccdbc2))
* **esl-trigger:** error handling if the target is not an instance of togglable ([85cb6c1](https://github.com/exadel-inc/esl/commit/85cb6c17c9299c5b6e5dca0ecaff9d6586da0351))
* **esl-utils:** fix `Debounced` and `Throttled` function return types ([3d2c598](https://github.com/exadel-inc/esl/commit/3d2c59811de982156e672e874cc38a711b40b3e8))


### Features

* add ability to prevent scroll on focus ([#490](https://github.com/exadel-inc/esl/issues/490)) ([a9a8a02](https://github.com/exadel-inc/esl/commit/a9a8a02706a11327eceb52f0c5d97bef40858015))
* **esl-trigger:** add `esl:change:active` event details & fix event emmit condition ([a0237b2](https://github.com/exadel-inc/esl/commit/a0237b267fbe0a0f9fa0eaa546bac92d90d3a76a)), closes [#480](https://github.com/exadel-inc/esl/issues/480)
* **esl-utils:** add optional `throttle` and `debounce` context argument ([eb948ce](https://github.com/exadel-inc/esl/commit/eb948cead3bd3afa7138e5fb96c58e8dde389116))

# [3.1.0](https://github.com/exadel-inc/esl/compare/v3.0.3...v3.1.0) (2021-09-16)

New Exadel Smart Library version comes with extended and out-of-the-box support for TSX.
TSX Shapes updated and complete, `JSX.Element` merging no longer required, everything available OOTB.
**Default ESL tags definition no longer needed, get rid of the `IntrinsicElements` interface expansion, ESL now define everything that's required.**

### Bug Fixes

* tsx single tags allowed child definition ([10e465a](https://github.com/exadel-inc/esl/commit/10e465a268059ffe5f1e96aecd6f123f5af6cc04))


### Features

* add `ESLBaseElement` complete and independent TSX shape definition ([7517bf4](https://github.com/exadel-inc/esl/commit/7517bf40b6c53e7593e198ba4520ee467d2755b7))
* add TSX shapes for `ESLAlert` ([b2ff733](https://github.com/exadel-inc/esl/commit/b2ff733028e3fb5ac27831388bc67b73e72e9eed))
* add TSX shapes for `ESLPopup` ([180f411](https://github.com/exadel-inc/esl/commit/180f411ceef38d3b558de4c5b4c902dc1cb8a1eb))
* ootb TSX types for components & updates complete TSX shapes ([2bd409c](https://github.com/exadel-inc/esl/commit/2bd409c3f5be79df76c7745ffdcaf574f614b35a)), closes [#476](https://github.com/exadel-inc/esl/issues/476)
* add new set utilities with the following methods:
    - `intersection`  - to create a unique array intersection
    - `union`  - to create a union of the unique values
    - `complement` - to create a complement of one array to another
    - `fullIntersection` - check if the arrays have a full intersection


## [3.0.3](https://github.com/exadel-inc/esl/compare/v3.0.2...v3.0.3) (2021-09-07)


### Bug Fixes

* fix allowed children for new JSX Shapes ([aa3182b](https://github.com/exadel-inc/esl/commit/aa3182bcce565ad23802286663d54ed96b694f5e))
* fix default value for trigger ([b7c600a](https://github.com/exadel-inc/esl/commit/b7c600a24e562b15204c4223ee6a03ba592f04f7))

## [3.0.2](https://github.com/exadel-inc/esl/compare/v3.0.1...v3.0.2) (2021-09-06)


### Bug Fixes

* **esl-panel:** fix animation reflow for esl-panel ([3603609](https://github.com/exadel-inc/esl/commit/36036098be10b265324f0b3f8ecfa3464715f234))
* **esl-toggleable:** final fix for outside action handling flow ([9b3056c](https://github.com/exadel-inc/esl/commit/9b3056c85c12bfdf41f2b44a4415fb0dea6695f7))
* fix unsubscribe for outside actions ([27e9d32](https://github.com/exadel-inc/esl/commit/27e9d3242e9d2efce4b94c0ef2bd08ecaa228635))

## [3.0.1](https://github.com/exadel-inc/esl/compare/v3.0.0...v3.0.1) (2021-09-03)


### Bug Fixes

* **esl-toggleable:** fix outside action binding ([eccc2d7](https://github.com/exadel-inc/esl/commit/eccc2d75453f8d4b84167fdc10d2bcb0e1d86c3d))

# [3.0.0](https://github.com/exadel-inc/esl/compare/v2.9.1...v3.0.0) (2021-09-01)


### Bug Fixes

* **esl-footnotes:** fix broken click on back-to-note ([e66ae96](https://github.com/exadel-inc/esl/commit/e66ae967681fc2a59e71fb5c7f990d4e16dbc6c2))
* **esl-footnotes:** fix character for return to note due to its absence at fonts on some platforms ([d74788f](https://github.com/exadel-inc/esl/commit/d74788fe1efde9aed4b8a3ffdb201c5aea138e34))
* **esl-footnotes:** fix footnotes soting and reindex ([f13ba79](https://github.com/exadel-inc/esl/commit/f13ba79d72383584bf62ced35cda9d587697a677))
* **esl-footnotes:** fix IE11 issue with Map.iterator absent ([3bad82b](https://github.com/exadel-inc/esl/commit/3bad82b383a0e9fcd41d3d3bb5d6452a9673e491))
* **esl-media:** fix toggle method and process keydown event otb ([b3ad030](https://github.com/exadel-inc/esl/commit/b3ad030b42ed0e28946b73bfe5c661bd9d899d74))
* **esl-note:** fix broken connection between esl-note and esl-footnotes ([646ebbc](https://github.com/exadel-inc/esl/commit/646ebbc46d92e50e6070c5aa34b98d9623f417a4))
* **esl-note:** fix the issue with lost tooltip text after cloning of element ([882e0b0](https://github.com/exadel-inc/esl/commit/882e0b0398d16bff04e022ce994484bbdc917489))
* **esl-panel:** add missing observedAttributes method ([2bae85f](https://github.com/exadel-inc/esl/commit/2bae85f46cb81ba83d4eee08b4536d40cd1fbb58))
* **esl-panel:** fix twitchy panel animation on multiple requests ([fee25af](https://github.com/exadel-inc/esl/commit/fee25aff21b328fcf9eb61dee7a87bb80eef2a64))
* **esl-popup:** fix IE11 errors in popup behaviour ([6c7c50d](https://github.com/exadel-inc/esl/commit/6c7c50d0f88d659c399f4e38cb7b6fdbf651070d))
* **esl-popup:** fix wrong popup arrow positioning ([d127a67](https://github.com/exadel-inc/esl/commit/d127a67588d2e32230304edcf69079a0a8e58223))
* **esl-popup:** fix wrong popup positioning ([907ce47](https://github.com/exadel-inc/esl/commit/907ce4750e4b4729d5ae1634ca9e0346161408c8))
* **esl-popup:** remove position attr from popup arrow and add placed-at attr to popup element ([32d9d93](https://github.com/exadel-inc/esl/commit/32d9d937fc28209904c8f9fd7c14e0783a0c60d5))
* **esl-popup:** wrong popup position when the popup is shown at the first time ([c5195ab](https://github.com/exadel-inc/esl/commit/c5195ab7415ba4c7309879e93be8db049b61bb3e))
* **esl-popup:** wrong popup position when the popup is shown at the first time ([7533683](https://github.com/exadel-inc/esl/commit/753368395f238fe9870a92436adbb749828a325d))
* **esl-select-list:** fix IE11 scroll ([0c4bebb](https://github.com/exadel-inc/esl/commit/0c4bebb15536a2eeaaf84723928b634682f1573d))
* **esl-toggleable:** allow to register toggleable as independent component ([ac98970](https://github.com/exadel-inc/esl/commit/ac98970987dda5e2103f6e1104568d60642c0f2a))
* **esl-toggleable:** fix trackHover hideDelay inheritance from the original activator ([e67acb3](https://github.com/exadel-inc/esl/commit/e67acb38530105629cb82560246a22af795d0c39))
* **esl-toggleable:** fix trackHover precondition ([751eb76](https://github.com/exadel-inc/esl/commit/751eb7636797cb1b79f6df1b6bcf3ff5b8350fb9))
* **esl-trigger:** fix incorrect tap handling on mobile devices ([a297ff6](https://github.com/exadel-inc/esl/commit/a297ff6688c1044f62679db2136b9f442bc7bc68)), closes [#436](https://github.com/exadel-inc/esl/issues/436)
* **esl-utils:** delayed-task now accept numeric string delay representation ([d1122f4](https://github.com/exadel-inc/esl/commit/d1122f45365e3599f3a3a35fc3f8528b10d5c659))
* activator is not defined in hide handler ([6e2473e](https://github.com/exadel-inc/esl/commit/6e2473eae4a0742c0737b4d743415d4de5e207cf))
* add cleanup step for the build and start ([31dd317](https://github.com/exadel-inc/esl/commit/31dd3176c7fc4b03c06c9804046ae79f710bf4f6))
* fix twitchy scrollbar when scroll-behavior set to smooth for target ([4b9848c](https://github.com/exadel-inc/esl/commit/4b9848c9881cce9de4a4e283b61b3ffa78c9f73e)), closes [#430](https://github.com/exadel-inc/esl/issues/430)
* **esl-select:**  fix height empty space appeared with little amount of list items ([9dfadc4](https://github.com/exadel-inc/esl/commit/9dfadc410cb5f5fcbaafc3debfe64386ca0013c7))
* **esl-select:**  specify max-height for standalone list in pixels & for list in dropdown in vh ([70ed2f0](https://github.com/exadel-inc/esl/commit/70ed2f0cba83dcf2801ee6f9729fac4ce53bb114))
* **esl-utils:** deep merge: fix array case and refactor ([4191b85](https://github.com/exadel-inc/esl/commit/4191b851cb84f59ef31cf8bbb0dd29c5594fea86))
* **esl-utils:** device detector touch detection improved ([7a5956e](https://github.com/exadel-inc/esl/commit/7a5956ebf55d00bde38707c92bc921ac48c1c5ef))
* **esl-utils:** fix IE issue 'ShadowRoot is undefined' ([4a8cffc](https://github.com/exadel-inc/esl/commit/4a8cffc025441016b75a723365fec4ad7ca2d288))
* **esl-utils:** fix IE11 issue with x and y absent in DOMRect ([b64a654](https://github.com/exadel-inc/esl/commit/b64a6545048164022cfa4a180da9ae8a922a8241))
* declare global interface HTMLElementTagNameMap ([b5c96de](https://github.com/exadel-inc/esl/commit/b5c96de0e88e96b63796c7a1921774c71693cbfd))
* fix namespace types and typing placement ([c2e2ab0](https://github.com/exadel-inc/esl/commit/c2e2ab00901dc599a5c994ae16036d1ea92b3a11))
* pseudo scroll locker styles fix ([8d2cfeb](https://github.com/exadel-inc/esl/commit/8d2cfeb04525fb968a2372d86fd1cbd3f6a866b2))
* remove drafts collection from sitemap ([3dc726a](https://github.com/exadel-inc/esl/commit/3dc726a8a617bf622fedb640e41f7b1087f12d58))
* **esl-utils:** fix IE issue 'ShadowRoot is undefined' ([c354ab9](https://github.com/exadel-inc/esl/commit/c354ab9971ed82c45168b29354f1f943f3a3b4ae))
* merge changes ([ec09584](https://github.com/exadel-inc/esl/commit/ec095848cbb2efd195bc5963c8c76cb385172632))
* **esl-utils:** add hasHover device detection ([2f46dc5](https://github.com/exadel-inc/esl/commit/2f46dc593f21822cb00a883acdcead608f6ee3b7))
* **esl-utils:** fix IE pseudo scroll lock artifacts ([90961e0](https://github.com/exadel-inc/esl/commit/90961e07e8af28091245cdaac5bf7b93f8c34edc))
* **esl-utils:** fix media query empty rule payload type (null -> undefined) ([423506e](https://github.com/exadel-inc/esl/commit/423506e83ae9793518ce3e19351a56600d0d5f5d))
* **esl-utils:** fix pseudo scroll RTL support ([db23758](https://github.com/exadel-inc/esl/commit/db23758a408c1f0309c71391fc68bd30f1933f6a))
* **esl-utils:** strict types for deep merge ([04bbad4](https://github.com/exadel-inc/esl/commit/04bbad4ea68b18caf01420c6aeae05c83f23ead1))
* activator should be available after hide ([817181a](https://github.com/exadel-inc/esl/commit/817181aad59499abb15d0f2ad9a82f56e63f98cd))
* editing styles for correct display on mobile ([58a35b1](https://github.com/exadel-inc/esl/commit/58a35b104dfa96783f9bd25d43b5b3d3663bf378))
* fix esl-popup arrow position ([b0490df](https://github.com/exadel-inc/esl/commit/b0490dff03cd42dad6dfdd885ff1dbb6bb749076))
* **esl-image:** svg loading check update ([6f72a70](https://github.com/exadel-inc/esl/commit/6f72a708cf0594ff1ef5a7f2eabbc03f4164fa87))
* **esl-utils:** isRtl check updated to use computed styles instead of attribute ([89ae48d](https://github.com/exadel-inc/esl/commit/89ae48d5da35eab386d2f3cb53cdb20273e29423))
* **esl-utils:** update export list ([5b9df8b](https://github.com/exadel-inc/esl/commit/5b9df8b2733efa8fbf3999c47150b4e7e2464ad5))
* **esl-utils:** utility DeviceDetector updated to recognize iOS13 ([dc2bda2](https://github.com/exadel-inc/esl/commit/dc2bda2be9b30f89953bc5c7b79c03ae6a3fc8ea))


### Code Refactoring

* **esl-utils:** remove deprecations of version v2.0.0 ([cbd38b6](https://github.com/exadel-inc/esl/commit/cbd38b6011b790b89a243fb4b0d419b7c80907a8))


### Features

* **esl-a11y-group:** add jsx tag shape ([c469f20](https://github.com/exadel-inc/esl/commit/c469f2018989fa03b44ca300e9593a04b16ab79f))
* **esl-footnotes:** add a grouping of footnotes with non-unique text ([9890124](https://github.com/exadel-inc/esl/commit/9890124c6a65750a52e543a863c2def739504937))
* **esl-footnotes:** add a grouping of footnotes with non-unique text ([05344a0](https://github.com/exadel-inc/esl/commit/05344a0e881b15a1ff6cba67557e15fa950518bc))
* **esl-media-query:** media query v2 update ([#232](https://github.com/exadel-inc/esl/issues/232)) ([0c122e9](https://github.com/exadel-inc/esl/commit/0c122e91514355b376043f8e67dbae244dac1c81))
* **esl-note:** add highlighting for notes ([2864205](https://github.com/exadel-inc/esl/commit/2864205e2118e0aa8869913df2c3bb0daac63974))
* **esl-panel:** add jsx tag shape ([ba00085](https://github.com/exadel-inc/esl/commit/ba00085e44e8c45c9e4ae6182251e7e420857df3))
* **esl-panel-group:** allows any number of open panels for accordion mode ([3476e90](https://github.com/exadel-inc/esl/commit/3476e90f9b5b89fb8c16a92540fb799cd12ffdff))
* **esl-popup:** add bottom, left, right position and update position when parents scroll ([9242fca](https://github.com/exadel-inc/esl/commit/9242fcabded6a5f349b40ef1cc46cedda86b058a))
* **esl-popup:** add popup flipping and hiding by detection intersection side ([a213262](https://github.com/exadel-inc/esl/commit/a213262813c1ddc79d51510bbb4001cae2aeca4c))
* **esl-popup:** remake popup positioning ([2ffe381](https://github.com/exadel-inc/esl/commit/2ffe3817d990e6ed98117ece5196c286ad3f71d4))
* **esl-popup:** update esl-popup demo page ([bb0e396](https://github.com/exadel-inc/esl/commit/bb0e396a69819590db923578ddcbe1d411aa2b0e))
* **esl-popup:** update imports, move separate window helpers, remove unnecessary code ([f198295](https://github.com/exadel-inc/esl/commit/f19829520f195f787288eb21a800af23bb9c4eba))
* **esl-scrollbar:** add rtl support for horizontal scrollbar ([fa27e5d](https://github.com/exadel-inc/esl/commit/fa27e5d49f7e2f864ae8fd65816cf00bdb5035da))
* **esl-tabs:** add jsx tag shape ([4688984](https://github.com/exadel-inc/esl/commit/4688984cb00a0fabdc7322d1e4cc8d68b12dac28))
* **esl-toggleable:** add jsx tag shape ([d583f24](https://github.com/exadel-inc/esl/commit/d583f243fdb68ef02c7b711ade7c7ad360a69d10))
* **esl-tooltip:** add new action param to set up tooltip extra classes ([1b1587f](https://github.com/exadel-inc/esl/commit/1b1587fed6581997b758d5464505bdc68540123b))
* **esl-trigger:** add jsx tag shape ([2b36fae](https://github.com/exadel-inc/esl/commit/2b36fae8e1d08f11eb9311098a4763e2d432788b))
* **esl-utils:** add ability check if the memoized property create a cache ([81f2e02](https://github.com/exadel-inc/esl/commit/81f2e02fcabd20e2c6b5f59c15e3718c7e177b1d))
* **esl-utils:** add butch manipulations support for `CSSClassUtils` ([#395](https://github.com/exadel-inc/esl/issues/395)) ([3635e39](https://github.com/exadel-inc/esl/commit/3635e39507fd9227052580d07f1490f8dc8ac863))
* **esl-utils:** add new syntax options support for format utility ([#393](https://github.com/exadel-inc/esl/issues/393)) ([e44aca0](https://github.com/exadel-inc/esl/commit/e44aca01b054430fe724fc896bfb9d55ea30f959))
* **esl-utils:** range array utility ([fbeae90](https://github.com/exadel-inc/esl/commit/fbeae90ba0a2746dd7086b4d6afaf1915cd9171d))
* 'throttle' API changes ([8db7bfb](https://github.com/exadel-inc/esl/commit/8db7bfb4adbb74d595b5fe041a930edfaaa65986))
* add deepMerge utility ([11331d8](https://github.com/exadel-inc/esl/commit/11331d885c236a882e192311dc2e2848e145b4b3))
* add helpers (isScrollParent, getScrollParent and getListScrollParent) for working with scroll parents ([a4d25f9](https://github.com/exadel-inc/esl/commit/a4d25f9b4f2f381cd831192f0289bfd0d9caefe9))
* add priority tag ([43904be](https://github.com/exadel-inc/esl/commit/43904be29875f15dd563ac286ebd7797faa15f55))
* add sitemap generator ([78651ce](https://github.com/exadel-inc/esl/commit/78651ce4b9d79fc57fc908d91e8aab0e8feaeb15))
* add some tests ([25e4e01](https://github.com/exadel-inc/esl/commit/25e4e0108103ea6e172a1e34e2d73fae6e71d14f))
* create dom helpers class Rect to manage size and position of rectangles ([3343bfd](https://github.com/exadel-inc/esl/commit/3343bfd04884adb5a3cd0afb1e4fb3b7d088cce5))
* create esl-popup demo page ([b4eec2c](https://github.com/exadel-inc/esl/commit/b4eec2c911027d0d4e860b2d26c326cb956f486f))
* create helpers for working with the window as part esl-util DOM helpers ([49a58b2](https://github.com/exadel-inc/esl/commit/49a58b288c5c4f323d12c994b117467c3b01132a))
* debounced method API changes ([#402](https://github.com/exadel-inc/esl/issues/402)) ([420f8bc](https://github.com/exadel-inc/esl/commit/420f8bc8a800f4e2362b47fdf9c84c912af16ba6))
* **gh-pages:** the ability to include markdown into demo pages ([#368](https://github.com/exadel-inc/esl/issues/368)) ([7fa42fc](https://github.com/exadel-inc/esl/commit/7fa42fc9fe4fbc2ccb4c320811b922a2bcb3eec1))
* add `isPrototype` check predicate to 'misc/object' utils ([ad30d37](https://github.com/exadel-inc/esl/commit/ad30d3756ad38fe67bf2502f8eb38804fe2a314b))
* add meta tag viewport ([2994954](https://github.com/exadel-inc/esl/commit/2994954f7aa2837fc7ace328700a2ae6f6e6c73b))
* create helpers for working with the element as part esl-util DOM helpers ([2d72af1](https://github.com/exadel-inc/esl/commit/2d72af1d72542666d4d96f32a4f7db7971f31cba))
* **esl-toggleable:** add track hover params property ([50f8d77](https://github.com/exadel-inc/esl/commit/50f8d77c7bdd7470bd8ae996cda33f11a67bee43))
* **esl-toggleable:** set track hover activator to initial ([c48d182](https://github.com/exadel-inc/esl/commit/c48d182277411524024b03741dd3b4dbbdf65b2b))
* **esl-trigger:** show/hide delay override for hover on trigger ([7962eba](https://github.com/exadel-inc/esl/commit/7962eba74f01177f97f30aab68a2a9b4d4d2dc9f))
* **esl-utils:**  add copy & omit utilities ([d31b957](https://github.com/exadel-inc/esl/commit/d31b9573d271708943b0abb717952fb7d7c01ef5))
* **esl-utils:** add EventUtil stopPropagation and preventDefault stubs ([2e835f4](https://github.com/exadel-inc/esl/commit/2e835f47e310599067823f1fef8ba69035695344))
* **gh-pages:** migration of the demo-site to 11ty ([#287](https://github.com/exadel-inc/esl/issues/287)) ([61e42de](https://github.com/exadel-inc/esl/commit/61e42de87b188f4a8b7e61d89a368bfaf1313d84))
* add prefix support for random uid ([6d7e180](https://github.com/exadel-inc/esl/commit/6d7e1806390e5e1d02431e78fa9bcb98879c0f27))
* add trigger esl-tooltip to esl-note ([ff13d74](https://github.com/exadel-inc/esl/commit/ff13d7472328afd8f0fd9ccf262aa487a6a92612))
* add updating activator state to esl-tooltip ([238c744](https://github.com/exadel-inc/esl/commit/238c744c765bcd32752b6963be35c062adab1204))
* create localdev page for esl-note and esl-footnotes ([c22b192](https://github.com/exadel-inc/esl/commit/c22b192bccb8966ed64d378980ec42d3802bf436))
* esl-note replace note text with note html ([5882e71](https://github.com/exadel-inc/esl/commit/5882e71326ad3262ad62fb7f76bedbfbc5f08779))
* **esl-utils:** add parseNumber utility ([5e5fff1](https://github.com/exadel-inc/esl/commit/5e5fff12af6f16da2888f6770423e718ce9853aa))
* add resize listener to esl-popup for updating position ([c5017d5](https://github.com/exadel-inc/esl/commit/c5017d56ef5fcbda0359f35cc8d581d9ebab60ed))
* create back-to-note button at esl-footntes ([a619d73](https://github.com/exadel-inc/esl/commit/a619d73195511403c7efcd1378e537bbaa5624ab))
* extend UID utilities ([f90a1c1](https://github.com/exadel-inc/esl/commit/f90a1c178b11364d4e1424d0e0673e77cbbaf553))
* improve interconnection between esl-notes and esl-footnotes ([2e79fd0](https://github.com/exadel-inc/esl/commit/2e79fd0e224c0c04db7b5f78aede727c16e545c4))
* improved interconnection between esl-notes and esl-footnotes ([5e422d7](https://github.com/exadel-inc/esl/commit/5e422d7134df4a76b7f750b387141bbb71375c38))
* initial implementation of esl-footnotes ([042c4e7](https://github.com/exadel-inc/esl/commit/042c4e7d60916cc0eecf7a4eaaaa810d70d42498))
* initial implementation of esl-note ([d158c5a](https://github.com/exadel-inc/esl/commit/d158c5a0d9cd76926ad403948d5f53625d627f04))
* initial implementation of esl-tooltip ([4a0620b](https://github.com/exadel-inc/esl/commit/4a0620b87377a39ec8c0aaeadac51037b753878b))
* rework esl-note ([c709022](https://github.com/exadel-inc/esl/commit/c7090224b2d104f93b986e2c6dfbfdbd605cbeb9))
* rework esl-popup ([5723b38](https://github.com/exadel-inc/esl/commit/5723b38c91098088cdca6ec267dec42810bf9b70))
* share sequences between bundles ([307fe53](https://github.com/exadel-inc/esl/commit/307fe53b8ff3bb7219b1095ea50aa23126391f71))
* support mode="open" to make all panels active ([2619fe5](https://github.com/exadel-inc/esl/commit/2619fe55e63b78af237af09a30b55ec442172774))
* update esl-note after esl-trigger reimplementation ([134c020](https://github.com/exadel-inc/esl/commit/134c02010ecb1ee9649ff8ce2751316fd0f9f310))
* update esl-popup styles ([167ef0a](https://github.com/exadel-inc/esl/commit/167ef0ae54da9f593d6474b3823ca8df37e3cd8b))
* update memoization for object getter accessor with a lightweight version ([ae5614b](https://github.com/exadel-inc/esl/commit/ae5614b1e3b23876326a1656110eee42f4c26be6))
* **esl-toggleable:** automatic initial a11y ([49e30c4](https://github.com/exadel-inc/esl/commit/49e30c458e6860955718440451fe91ee7545fdc1))
* **esl-toggleable:** esl-toggleable reimplementation ([94bf814](https://github.com/exadel-inc/esl/commit/94bf8142c82fc91e91dae86440202a0450906bb0))
* **esl-toggleable:** toggleable API updated, show/hide flow refactored ([2e77654](https://github.com/exadel-inc/esl/commit/2e776541da85d1c5760cc1c622843f50577f7799))
* **esl-utils:** aggregate decorator function introduced ([0915fd6](https://github.com/exadel-inc/esl/commit/0915fd6dfad7f09405ebb71877f82fd1a0ed1a92))
* **esl-utils:** focus order utility ([bd61f99](https://github.com/exadel-inc/esl/commit/bd61f996c5138254bade5a19c40561ed075d340b))


### BREAKING CHANGES

* **esl-panel:** ESLPanelGroup is now distributed as a separate module
* decorated `debouncedMethod = debounce(fn)` call no longer returns Promise use 'debouncedMethod.promise' instead

Co-authored-by: ala'n (Alexey Stsefanovich) <astsefanovich@exadel.com>
* **esl-media-query:** - `ESLMediaQuery` no longer constructible use `ESLMediaQuery.for` and `ESLMediaQuery.from` instead
- `ESLMediaRule` - DPR and device marker no longer available
- `ESLMediaBreakpoints.addCustomBreakpoint` replaced with `ESLScreenBreakpoints.add`
- `ESLMediaBreakpoints.getBreakpoint` replaced with `ESLScreenBreakpoints.get`
- `ESLMediaQuery.ignoreBotsDpr` replaced with `ESLMediaDPRShortcut.ignoreBotsDpr`
- `ObserverCallback` removed use strict type instead
* **esl-toggleable:** * `event` property no longer available.
Alternative `track-click`/`track-hover` options provided
* `touchShowDelay` and `touchShowDelay` removed.
Use `showDelay` / `hideDelay` with ESLMediaQuery support
* Inner API changes: `showEvent`, `hideEvent` removed
* Inner API changes: `_onClick`, `_onMouseEnter`, `_onMouseLeave` handlers
* `generateUId` renamed to `randUID`
* **esl-toggleable:** onShow/onHide no longer contains inner state changes.
* **esl-utils:** `CSSUtil` from 'esl-utils/dom/styles' is removed;
`ScrollUtility` alias is no longer available use `ScrollUtils` instead;
`@override` and `@readonly` deprecated decorators are removed use `@prop` decorator instead;

# [3.0.0-beta.20](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.19...v3.0.0-beta.20) (2021-08-30)


### Bug Fixes

* **esl-panel:** add missing observedAttributes method ([2bae85f](https://github.com/exadel-inc/esl/commit/2bae85f46cb81ba83d4eee08b4536d40cd1fbb58))
* **esl-panel:** fix twitchy panel animation on multiple requests ([fee25af](https://github.com/exadel-inc/esl/commit/fee25aff21b328fcf9eb61dee7a87bb80eef2a64))
* **esl-toggleable:** fix trackHover hideDelay inheritance from the original activator ([e67acb3](https://github.com/exadel-inc/esl/commit/e67acb38530105629cb82560246a22af795d0c39))
* **esl-utils:** deep merge: fix array case and refactor ([4191b85](https://github.com/exadel-inc/esl/commit/4191b851cb84f59ef31cf8bbb0dd29c5594fea86))
* **esl-utils:** delayed-task now accept numeric string delay representation ([d1122f4](https://github.com/exadel-inc/esl/commit/d1122f45365e3599f3a3a35fc3f8528b10d5c659))
* add cleanup step for the build and start ([31dd317](https://github.com/exadel-inc/esl/commit/31dd3176c7fc4b03c06c9804046ae79f710bf4f6))
* fix twitchy scrollbar when scroll-behavior set to smooth for target ([4b9848c](https://github.com/exadel-inc/esl/commit/4b9848c9881cce9de4a4e283b61b3ffa78c9f73e)), closes [#430](https://github.com/exadel-inc/esl/issues/430)
* **esl-utils:** strict types for deep merge ([04bbad4](https://github.com/exadel-inc/esl/commit/04bbad4ea68b18caf01420c6aeae05c83f23ead1))


### Features

* **esl-utils:** add ability check if the memoized property create a cache ([81f2e02](https://github.com/exadel-inc/esl/commit/81f2e02fcabd20e2c6b5f59c15e3718c7e177b1d))
* 'throttle' API changes ([8db7bfb](https://github.com/exadel-inc/esl/commit/8db7bfb4adbb74d595b5fe041a930edfaaa65986))
* debounced method API changes ([#402](https://github.com/exadel-inc/esl/issues/402)) ([420f8bc](https://github.com/exadel-inc/esl/commit/420f8bc8a800f4e2362b47fdf9c84c912af16ba6))


### BREAKING CHANGES

* **esl-panel:** ESLPanelGroup is now distributed as a separate module
* decorated `debouncedMethod = debounce(fn)` call no longer returns Promise use 'debouncedMethod.promise' instead

Co-authored-by: ala'n (Alexey Stsefanovich) <astsefanovich@exadel.com>

## [2.9.1](https://github.com/exadel-inc/esl/compare/v2.9.0...v2.9.1) (2021-08-25)


# [3.0.0-beta.19](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.18...v3.0.0-beta.19) (2021-08-19)


### Bug Fixes

* **esl-footnotes:** fix broken click on back-to-note ([e66ae96](https://github.com/exadel-inc/esl/commit/e66ae967681fc2a59e71fb5c7f990d4e16dbc6c2))

# [3.0.0-beta.18](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.17...v3.0.0-beta.18) (2021-08-18)


### Bug Fixes

* **esl-footnotes:** fix footnotes soting and reindex ([f13ba79](https://github.com/exadel-inc/esl/commit/f13ba79d72383584bf62ced35cda9d587697a677))
* **esl-footnotes:** fix IE11 issue with Map.iterator absent ([3bad82b](https://github.com/exadel-inc/esl/commit/3bad82b383a0e9fcd41d3d3bb5d6452a9673e491))
* **esl-media:** fix toggle method and process keydown event otb ([b3ad030](https://github.com/exadel-inc/esl/commit/b3ad030b42ed0e28946b73bfe5c661bd9d899d74))
* **esl-note:** fix the issue with lost tooltip text after cloning of element ([882e0b0](https://github.com/exadel-inc/esl/commit/882e0b0398d16bff04e022ce994484bbdc917489))


### Features

* **esl-a11y-group:** add jsx tag shape ([c469f20](https://github.com/exadel-inc/esl/commit/c469f2018989fa03b44ca300e9593a04b16ab79f))
* **esl-panel:** add jsx tag shape ([ba00085](https://github.com/exadel-inc/esl/commit/ba00085e44e8c45c9e4ae6182251e7e420857df3))
* **esl-tabs:** add jsx tag shape ([4688984](https://github.com/exadel-inc/esl/commit/4688984cb00a0fabdc7322d1e4cc8d68b12dac28))
* **esl-toggleable:** add jsx tag shape ([d583f24](https://github.com/exadel-inc/esl/commit/d583f243fdb68ef02c7b711ade7c7ad360a69d10))
* **esl-trigger:** add jsx tag shape ([2b36fae](https://github.com/exadel-inc/esl/commit/2b36fae8e1d08f11eb9311098a4763e2d432788b))
* **esl-utils:** add butch manipulations support for `CSSClassUtils` ([#395](https://github.com/exadel-inc/esl/issues/395)) ([3635e39](https://github.com/exadel-inc/esl/commit/3635e39507fd9227052580d07f1490f8dc8ac863))
* **esl-utils:** add new syntax options support for format utility ([#393](https://github.com/exadel-inc/esl/issues/393)) ([e44aca0](https://github.com/exadel-inc/esl/commit/e44aca01b054430fe724fc896bfb9d55ea30f959))

# [3.0.0-beta.17](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.16...v3.0.0-beta.17) (2021-08-13)


### Features

* **esl-footnotes:** add a grouping of footnotes with non-unique text ([9890124](https://github.com/exadel-inc/esl/commit/9890124c6a65750a52e543a863c2def739504937))
* **esl-footnotes:** add a grouping of footnotes with non-unique text ([05344a0](https://github.com/exadel-inc/esl/commit/05344a0e881b15a1ff6cba67557e15fa950518bc))
* **esl-note:** add highlighting for notes ([2864205](https://github.com/exadel-inc/esl/commit/2864205e2118e0aa8869913df2c3bb0daac63974))

# [3.0.0-beta.16](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.15...v3.0.0-beta.16) (2021-08-09)


### Bug Fixes

* **esl-popup:** wrong popup position when the popup is shown at the first time ([c5195ab](https://github.com/exadel-inc/esl/commit/c5195ab7415ba4c7309879e93be8db049b61bb3e))
* **esl-popup:** wrong popup position when the popup is shown at the first time ([7533683](https://github.com/exadel-inc/esl/commit/753368395f238fe9870a92436adbb749828a325d))
* **esl-utils:** fix IE issue 'ShadowRoot is undefined' ([4a8cffc](https://github.com/exadel-inc/esl/commit/4a8cffc025441016b75a723365fec4ad7ca2d288))
* **esl-utils:** fix IE11 issue with x and y absent in DOMRect ([b64a654](https://github.com/exadel-inc/esl/commit/b64a6545048164022cfa4a180da9ae8a922a8241))
* merge changes ([ec09584](https://github.com/exadel-inc/esl/commit/ec095848cbb2efd195bc5963c8c76cb385172632))
* remove drafts collection from sitemap ([3dc726a](https://github.com/exadel-inc/esl/commit/3dc726a8a617bf622fedb640e41f7b1087f12d58))


### Features

* **esl-tooltip:** add new action param to set up tooltip extra classes ([1b1587f](https://github.com/exadel-inc/esl/commit/1b1587fed6581997b758d5464505bdc68540123b))
* **esl-utils:** promise functional declarations ([19b1e2b](https://github.com/exadel-inc/esl/commit/19b1e2b7e5b0fe2cf4431b35a06b07122108ddfb))
* add priority tag ([43904be](https://github.com/exadel-inc/esl/commit/43904be29875f15dd563ac286ebd7797faa15f55))
* add sitemap generator ([78651ce](https://github.com/exadel-inc/esl/commit/78651ce4b9d79fc57fc908d91e8aab0e8feaeb15))

# [2.9.0](https://github.com/exadel-inc/esl/compare/v2.8.2...v2.9.0) (2021-08-08)


### Features

* **esl-utils:** promise functional declarations ([19b1e2b](https://github.com/exadel-inc/esl/commit/19b1e2b7e5b0fe2cf4431b35a06b07122108ddfb))

# [3.0.0-beta.15](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.14...v3.0.0-beta.15) (2021-08-05)


### Bug Fixes

* fix namespace types and typing placement ([c2e2ab0](https://github.com/exadel-inc/esl/commit/c2e2ab00901dc599a5c994ae16036d1ea92b3a11))
* **esl-popup:** remove position attr from popup arrow and add placed-at attr to popup element ([32d9d93](https://github.com/exadel-inc/esl/commit/32d9d937fc28209904c8f9fd7c14e0783a0c60d5))
* **esl-utils:** fix IE issue 'ShadowRoot is undefined' ([c354ab9](https://github.com/exadel-inc/esl/commit/c354ab9971ed82c45168b29354f1f943f3a3b4ae))
* declare global interface HTMLElementTagNameMap ([b5c96de](https://github.com/exadel-inc/esl/commit/b5c96de0e88e96b63796c7a1921774c71693cbfd))


### Features

* **gh-pages:** the ability to include markdown into demo pages ([#368](https://github.com/exadel-inc/esl/issues/368)) ([7fa42fc](https://github.com/exadel-inc/esl/commit/7fa42fc9fe4fbc2ccb4c320811b922a2bcb3eec1))

## [2.8.2](https://github.com/exadel-inc/esl/compare/v2.8.1...v2.8.2) (2021-08-04)

# [3.0.0-beta.14](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.13...v3.0.0-beta.14) (2021-08-02)


### Bug Fixes

* **esl-footnotes:** fix character for return to note due to its absence at fonts on some platforms ([d74788f](https://github.com/exadel-inc/esl/commit/d74788fe1efde9aed4b8a3ffdb201c5aea138e34))
* **esl-note:** fix broken connection between esl-note and esl-footnotes ([646ebbc](https://github.com/exadel-inc/esl/commit/646ebbc46d92e50e6070c5aa34b98d9623f417a4))
* **esl-popup:** fix wrong popup arrow positioning ([d127a67](https://github.com/exadel-inc/esl/commit/d127a67588d2e32230304edcf69079a0a8e58223))
* **esl-popup:** fix wrong popup positioning ([907ce47](https://github.com/exadel-inc/esl/commit/907ce4750e4b4729d5ae1634ca9e0346161408c8))
* editing styles for correct display on mobile ([58a35b1](https://github.com/exadel-inc/esl/commit/58a35b104dfa96783f9bd25d43b5b3d3663bf378))
* fix esl-popup arrow position ([b0490df](https://github.com/exadel-inc/esl/commit/b0490dff03cd42dad6dfdd885ff1dbb6bb749076))


### Features

* **esl-media-query:** media query v2 update ([#232](https://github.com/exadel-inc/esl/issues/232)) ([0c122e9](https://github.com/exadel-inc/esl/commit/0c122e91514355b376043f8e67dbae244dac1c81))
* **esl-scrollbar:** add rtl support for horizontal scrollbar ([fa27e5d](https://github.com/exadel-inc/esl/commit/fa27e5d49f7e2f864ae8fd65816cf00bdb5035da))
* add `isPrototype` check predicate to 'misc/object' utils ([ad30d37](https://github.com/exadel-inc/esl/commit/ad30d3756ad38fe67bf2502f8eb38804fe2a314b))
* add deepMerge utility ([11331d8](https://github.com/exadel-inc/esl/commit/11331d885c236a882e192311dc2e2848e145b4b3))
* add meta tag viewport ([2994954](https://github.com/exadel-inc/esl/commit/2994954f7aa2837fc7ace328700a2ae6f6e6c73b))
* add some tests ([25e4e01](https://github.com/exadel-inc/esl/commit/25e4e0108103ea6e172a1e34e2d73fae6e71d14f))
* create dom helpers class Rect to manage size and position of rectangles ([3343bfd](https://github.com/exadel-inc/esl/commit/3343bfd04884adb5a3cd0afb1e4fb3b7d088cce5))
* **esl-popup:** update imports, move separate window helpers, remove unnecessary code ([f198295](https://github.com/exadel-inc/esl/commit/f19829520f195f787288eb21a800af23bb9c4eba))
* add helpers (isScrollParent, getScrollParent and getListScrollParent) for working with scroll parents ([a4d25f9](https://github.com/exadel-inc/esl/commit/a4d25f9b4f2f381cd831192f0289bfd0d9caefe9))
* create helpers for working with the element as part esl-util DOM helpers ([2d72af1](https://github.com/exadel-inc/esl/commit/2d72af1d72542666d4d96f32a4f7db7971f31cba))
* create helpers for working with the window as part esl-util DOM helpers ([49a58b2](https://github.com/exadel-inc/esl/commit/49a58b288c5c4f323d12c994b117467c3b01132a))
* **esl-popup:** add bottom, left, right position and update position when parents scroll ([9242fca](https://github.com/exadel-inc/esl/commit/9242fcabded6a5f349b40ef1cc46cedda86b058a))
* **esl-popup:** add popup flipping and hiding by detection intersection side ([a213262](https://github.com/exadel-inc/esl/commit/a213262813c1ddc79d51510bbb4001cae2aeca4c))
* **esl-popup:** remake popup positioning ([2ffe381](https://github.com/exadel-inc/esl/commit/2ffe3817d990e6ed98117ece5196c286ad3f71d4))
* **esl-popup:** update esl-popup demo page ([bb0e396](https://github.com/exadel-inc/esl/commit/bb0e396a69819590db923578ddcbe1d411aa2b0e))
* create esl-popup demo page ([b4eec2c](https://github.com/exadel-inc/esl/commit/b4eec2c911027d0d4e860b2d26c326cb956f486f))
* update memoization for object getter accessor with a lightweight version ([ae5614b](https://github.com/exadel-inc/esl/commit/ae5614b1e3b23876326a1656110eee42f4c26be6))


### BREAKING CHANGES

* **esl-media-query:** - `ESLMediaQuery` no longer constructible use `ESLMediaQuery.for` and `ESLMediaQuery.from` instead
- `ESLMediaRule` - DPR and device marker no longer available
- `ESLMediaBreakpoints.addCustomBreakpoint` replaced with `ESLScreenBreakpoints.add`
- `ESLMediaBreakpoints.getBreakpoint` replaced with `ESLScreenBreakpoints.get`
- `ESLMediaQuery.ignoreBotsDpr` replaced with `ESLMediaDPRShortcut.ignoreBotsDpr`
- `ObserverCallback` removed use strict type instead

# [2.8.1](https://github.com/exadel-inc/esl/compare/v2.8.0...v2.8.1) (2021-07-20)

# [3.0.0-beta.13](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.12...v3.0.0-beta.13) (2021-07-06)

# [2.8.0](https://github.com/exadel-inc/esl/compare/v2.7.3...v2.8.0) (2021-07-06)

### Bug Fixes

* **esl-utils:** fixed extra space ([bf0aea7](https://github.com/exadel-inc/esl/commit/bf0aea776fb05c7d3770aa0bcab7b1bfa9ee67d3))


### Features

* **esl-utils:** added delete, backspace to the keys.ts ([234d433](https://github.com/exadel-inc/esl/commit/234d433c58455e2f83612ade8b49866ebd5e40d2))

# [2.8.0](https://github.com/exadel-inc/esl/compare/v2.7.3...v2.8.0) (2021-07-06)

### Features

* **esl-utils:** added delete, backspace to the keys.ts ([234d433](https://github.com/exadel-inc/esl/commit/234d433c58455e2f83612ade8b49866ebd5e40d2))

# [3.0.0-beta.12](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.11...v3.0.0-beta.12) (2021-07-01)


### Bug Fixes

* **esl-utils:** isRtl check updated to use computed styles instead of attribute ([89ae48d](https://github.com/exadel-inc/esl/commit/89ae48d5da35eab386d2f3cb53cdb20273e29423))


### Features

* **esl-toggleable:** set track hover activator to initial ([c48d182](https://github.com/exadel-inc/esl/commit/c48d182277411524024b03741dd3b4dbbdf65b2b))
* **esl-utils:** add EventUtil stopPropagation and preventDefault stubs ([2e835f4](https://github.com/exadel-inc/esl/commit/2e835f47e310599067823f1fef8ba69035695344))
* **gh-pages:** migration of the demo-site to 11ty ([#287](https://github.com/exadel-inc/esl/issues/287)) ([61e42de](https://github.com/exadel-inc/esl/commit/61e42de87b188f4a8b7e61d89a368bfaf1313d84))

## [2.7.3](https://github.com/exadel-inc/esl/compare/v2.7.2...v2.7.3) (2021-06-30)
Dependencies versions update

# [3.0.0-beta.11](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.10...v3.0.0-beta.11) (2021-06-22)


### Bug Fixes

* **esl-toggleable:** allow to register toggleable as independent component ([ac98970](https://github.com/exadel-inc/esl/commit/ac98970987dda5e2103f6e1104568d60642c0f2a))


### Features
* **esl-footnotes:** new component released in beta
* **esl-tooltip:** new component released in beta
* **esl-popup** component reworked to v2.0.0

#### Detailed log: 
* add resize listener to esl-popup for updating position ([c5017d5](https://github.com/exadel-inc/esl/commit/c5017d56ef5fcbda0359f35cc8d581d9ebab60ed))
* add trigger esl-tooltip to esl-note ([ff13d74](https://github.com/exadel-inc/esl/commit/ff13d7472328afd8f0fd9ccf262aa487a6a92612))
* add updating activator state to esl-tooltip ([238c744](https://github.com/exadel-inc/esl/commit/238c744c765bcd32752b6963be35c062adab1204))
* create back-to-note button at esl-footntes ([a619d73](https://github.com/exadel-inc/esl/commit/a619d73195511403c7efcd1378e537bbaa5624ab))
* create localdev page for esl-note and esl-footnotes ([c22b192](https://github.com/exadel-inc/esl/commit/c22b192bccb8966ed64d378980ec42d3802bf436))
* esl-note replace note text with note html ([5882e71](https://github.com/exadel-inc/esl/commit/5882e71326ad3262ad62fb7f76bedbfbc5f08779))
* improve interconnection between esl-notes and esl-footnotes ([2e79fd0](https://github.com/exadel-inc/esl/commit/2e79fd0e224c0c04db7b5f78aede727c16e545c4))
* improved interconnection between esl-notes and esl-footnotes ([5e422d7](https://github.com/exadel-inc/esl/commit/5e422d7134df4a76b7f750b387141bbb71375c38))
* initial implementation of esl-footnotes ([042c4e7](https://github.com/exadel-inc/esl/commit/042c4e7d60916cc0eecf7a4eaaaa810d70d42498))
* initial implementation of esl-note ([d158c5a](https://github.com/exadel-inc/esl/commit/d158c5a0d9cd76926ad403948d5f53625d627f04))
* initial implementation of esl-tooltip ([4a0620b](https://github.com/exadel-inc/esl/commit/4a0620b87377a39ec8c0aaeadac51037b753878b))
* rework esl-note ([c709022](https://github.com/exadel-inc/esl/commit/c7090224b2d104f93b986e2c6dfbfdbd605cbeb9))
* rework esl-popup ([5723b38](https://github.com/exadel-inc/esl/commit/5723b38c91098088cdca6ec267dec42810bf9b70))
* update esl-note after esl-trigger reimplementation ([134c020](https://github.com/exadel-inc/esl/commit/134c02010ecb1ee9649ff8ce2751316fd0f9f310))
* update esl-popup styles ([167ef0a](https://github.com/exadel-inc/esl/commit/167ef0ae54da9f593d6474b3823ca8df37e3cd8b))

## [2.7.2](https://github.com/exadel-inc/esl/compare/v2.7.1...v2.7.2) (2021-06-18)
Dependencies versions update

# [3.0.0-beta.10](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.9...v3.0.0-beta.10) (2021-06-17)


### Bug Fixes

* **esl-utils:** fix IE pseudo scroll lock artifacts ([90961e0](https://github.com/exadel-inc/esl/commit/90961e07e8af28091245cdaac5bf7b93f8c34edc))
* **esl-utils:** fix pseudo scroll RTL support ([db23758](https://github.com/exadel-inc/esl/commit/db23758a408c1f0309c71391fc68bd30f1933f6a))


### Features

* **esl-toggleable:** add track hover params property ([50f8d77](https://github.com/exadel-inc/esl/commit/50f8d77c7bdd7470bd8ae996cda33f11a67bee43))
* **esl-utils:** add parseNumber utility ([5e5fff1](https://github.com/exadel-inc/esl/commit/5e5fff12af6f16da2888f6770423e718ce9853aa))
* add prefix support for random uid ([6d7e180](https://github.com/exadel-inc/esl/commit/6d7e1806390e5e1d02431e78fa9bcb98879c0f27))
* share sequences between bundles ([307fe53](https://github.com/exadel-inc/esl/commit/307fe53b8ff3bb7219b1095ea50aa23126391f71))

# [3.0.0-beta.9](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.8...v3.0.0-beta.9) (2021-06-16)


### Features

* **esl-trigger:** show/hide delay override for hover on trigger ([7962eba](https://github.com/exadel-inc/esl/commit/7962eba74f01177f97f30aab68a2a9b4d4d2dc9f))

# [3.0.0-beta.8](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.7...v3.0.0-beta.8) (2021-06-13)


### Bug Fixes

* pseudo scroll locker styles fix ([8d2cfeb](https://github.com/exadel-inc/esl/commit/8d2cfeb04525fb968a2372d86fd1cbd3f6a866b2))
* **esl-toggleable:** fix trackHover precondition ([751eb76](https://github.com/exadel-inc/esl/commit/751eb7636797cb1b79f6df1b6bcf3ff5b8350fb9))
* **esl-utils:** add hasHover device detection ([2f46dc5](https://github.com/exadel-inc/esl/commit/2f46dc593f21822cb00a883acdcead608f6ee3b7))
* **esl-utils:** fix media query empty rule payload type (null -> undefined) ([423506e](https://github.com/exadel-inc/esl/commit/423506e83ae9793518ce3e19351a56600d0d5f5d))


### Features

* **esl-toggleable:** automatic initial a11y ([49e30c4](https://github.com/exadel-inc/esl/commit/49e30c458e6860955718440451fe91ee7545fdc1))
* **esl-toggleable:** esl-toggleable reimplementation ([94bf814](https://github.com/exadel-inc/esl/commit/94bf8142c82fc91e91dae86440202a0450906bb0))


### BREAKING CHANGES

* **esl-toggleable:** 
  * `event` property no longer available.
Alternative `track-click`/`track-hover` options provided
  * `touchShowDelay` and `touchShowDelay` removed.
Use `showDelay` / `hideDelay` with ESLMediaQuery support
  * Inner API changes: `showEvent`, `hideEvent` removed
  * Inner API changes: `_onClick`, `_onMouseEnter`, `_onMouseLeave` handlers

## [2.7.1](https://github.com/exadel-inc/esl/compare/v2.7.0...v2.7.1) (2021-06-13)
Dependencies versions update


# [3.0.0-beta.7](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-06-08)


### BREACKING CHANGES:
* **esl-image**: make original mode rule meta independent
* **esl-media-query**: get rid of DPR meta
* **esl-media-query**: mobile device marker removed

# [3.0.0-beta.6](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2021-06-07)


### Bug Fixes

* **esl-utils:** device detector touch detection improved ([7a5956e](https://github.com/exadel-inc/esl/commit/7a5956ebf55d00bde38707c92bc921ac48c1c5ef))


### Features

* **esl-utils:**  add copy & omit utilities ([d31b957](https://github.com/exadel-inc/esl/commit/d31b9573d271708943b0abb717952fb7d7c01ef5))

# [3.0.0-beta.5](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2021-06-03)


### Bug Fixes

* activator should be available after hide ([817181a](https://github.com/exadel-inc/esl/commit/817181aad59499abb15d0f2ad9a82f56e63f98cd))

# [3.0.0-beta.4](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-06-02)


### Bug Fixes

* activator is not defined in hide handler ([6e2473e](https://github.com/exadel-inc/esl/commit/6e2473eae4a0742c0737b4d743415d4de5e207cf))


### Features

* extend UID utilities ([f90a1c1](https://github.com/exadel-inc/esl/commit/f90a1c178b11364d4e1424d0e0673e77cbbaf553))


### BREAKING CHANGES

* `generateUId` renamed to `randUID`

# [3.0.0-beta.3](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-05-31)


### Bug Fixes

* **esl-select:**  fix height empty space appeared with little amount of list items ([9dfadc4](https://github.com/exadel-inc/esl/commit/9dfadc410cb5f5fcbaafc3debfe64386ca0013c7))
* **esl-select:**  specify max-height for standalone list in pixels & for list in dropdown in vh ([70ed2f0](https://github.com/exadel-inc/esl/commit/70ed2f0cba83dcf2801ee6f9729fac4ce53bb114))
* jest defaults for new version ([9ba56b4](https://github.com/exadel-inc/esl/commit/9ba56b4794944f808c18f6e3e6e5002cf561d6ef))


### Features

* **esl-utils:** added alt, shift and control to the keys.ts (within hpe keycode removing) ([73580ec](https://github.com/exadel-inc/esl/commit/73580ecf60dd2abd7aebe72d7958a3539286f1b3))

# [3.0.0-beta.2](https://github.com/exadel-inc/esl/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-05-26)


### Bug Fixes

* **esl-utils:** utility DeviceDetector updated to recognize iOS13 ([dc2bda2](https://github.com/exadel-inc/esl/commit/dc2bda2be9b30f89953bc5c7b79c03ae6a3fc8ea))

# [3.0.0-beta.1](https://github.com/exadel-inc/esl/compare/v2.7.0-beta.2...v3.0.0-beta.1) (2021-05-24)


### Bug Fixes

* **esl-image:** svg loading check update ([6f72a70](https://github.com/exadel-inc/esl/commit/6f72a708cf0594ff1ef5a7f2eabbc03f4164fa87))


### Features

* **esl-toggleable:** toggleable API updated, show/hide flow refactored ([2e77654](https://github.com/exadel-inc/esl/commit/2e776541da85d1c5760cc1c622843f50577f7799))


### BREAKING CHANGES

* **esl-toggleable:** onShow/onHide no longer contains inner state changes.

# [2.7.0-beta.2](https://github.com/exadel-inc/esl/compare/v2.7.0-beta.1...v2.7.0-beta.2) (2021-05-20)


### Bug Fixes

* **esl-utils:** update export list ([5b9df8b](https://github.com/exadel-inc/esl/commit/5b9df8b2733efa8fbf3999c47150b4e7e2464ad5))


### Code Refactoring

* **esl-utils:** remove deprecations of version v2.0.0 ([cbd38b6](https://github.com/exadel-inc/esl/commit/cbd38b6011b790b89a243fb4b0d419b7c80907a8))


### Features

* **esl-utils:** aggregate decorator function introduced ([0915fd6](https://github.com/exadel-inc/esl/commit/0915fd6dfad7f09405ebb71877f82fd1a0ed1a92))
* **esl-utils:** focus order utility ([bd61f99](https://github.com/exadel-inc/esl/commit/bd61f996c5138254bade5a19c40561ed075d340b))


### BREAKING CHANGES

* **esl-utils:** `CSSUtil` from 'esl-utils/dom/styles' is removed;
`ScrollUtility` alias is no longer available use `ScrollUtils` instead;
`@override` and `@readonly` deprecated decorators are removed use `@prop` decorator instead;

# [2.7.0-beta.1](https://github.com/exadel-inc/esl/compare/v2.6.4...v2.7.0-beta.1) (2021-05-17)


### Features

* support mode="open" to make all panels active ([2619fe5](https://github.com/exadel-inc/esl/commit/2619fe55e63b78af237af09a30b55ec442172774))

# [2.7.0](https://github.com/exadel-inc/esl/compare/v2.6.4...v2.7.0) (2021-05-31)


### Bug Fixes

* jest defaults for new version ([9ba56b4](https://github.com/exadel-inc/esl/commit/9ba56b4794944f808c18f6e3e6e5002cf561d6ef))


### Features

* **esl-utils:** added alt, shift and control to the keys.ts (within hpe keycode removing) ([73580ec](https://github.com/exadel-inc/esl/commit/73580ecf60dd2abd7aebe72d7958a3539286f1b3))

## [2.6.4](https://github.com/exadel-inc/esl/compare/v2.6.3...v2.6.4) (2021-05-15)


### Bug Fixes

* 'Stack out of bounds' exception for memoized non static member in IE ([4493f90](https://github.com/exadel-inc/esl/commit/4493f9076f7f590fb72d7f24ee6c9bd735120c9c))

## [2.6.3](https://github.com/exadel-inc/esl/compare/v2.6.2...v2.6.3) (2021-04-29)

## [2.6.2](https://github.com/exadel-inc/esl/compare/v2.6.1...v2.6.2) (2021-04-26)


### Bug Fixes

* fix fallback animation call for esl-panel and esl-panel-group ([712f53d](https://github.com/exadel-inc/esl/commit/712f53d44198f8bbc32ed890c10a763667a61cf7))

## [2.6.1](https://github.com/exadel-inc/esl/compare/v2.6.0...v2.6.1) (2021-04-23)

# [2.6.0](https://github.com/exadel-inc/esl/compare/v2.5.2...v2.6.0) (2021-04-22)


### Bug Fixes

* remove undefined prop keys from toggleable properties merging ([3bb5d30](https://github.com/exadel-inc/esl/commit/3bb5d301e34a98d7afb5a32838d63cdbe21a2403))
* toggleable attribute change detection and extend action params with more information ([1627056](https://github.com/exadel-inc/esl/commit/16270569b3b54e55ff80f27c6f10d4c1fe13fdfc))


### Features

* copyDefinedKeys utility created ([11306c4](https://github.com/exadel-inc/esl/commit/11306c402104e3355031ee100af523664d3a2124))
* disabled options support for esl-select-item and fix list mutation detection ([53dfe01](https://github.com/exadel-inc/esl/commit/53dfe01622e07ffa196f46448b85818dd4d79f94))
* extend ToggleableDispatcher params with more information ([e8febf3](https://github.com/exadel-inc/esl/commit/e8febf394578bcb380481aff14cdc1faf78856e2))

## [2.5.2](https://github.com/exadel-inc/esl/compare/v2.5.1...v2.5.2) (2021-04-21)


### Bug Fixes

* provider type dynamic registration fix ([128b22f](https://github.com/exadel-inc/esl/commit/128b22f6d0b113608c533cc12a3164f37dca4d45))

## [2.5.1](https://github.com/exadel-inc/esl/compare/v2.5.0...v2.5.1) (2021-04-19)

# [2.5.0](https://github.com/exadel-inc/esl/compare/v2.4.1...v2.5.0) (2021-04-19)


### Features

* adjust scrollable attr ([b80a211](https://github.com/exadel-inc/esl/commit/b80a21175495927924bf4d923eb2b0dc45e4dfc0))
* body class manger feature rejection ([07ba596](https://github.com/exadel-inc/esl/commit/07ba596eec58e81108c02179f0a873a6931d7b21))
* change body class behaviour of the toggleable to support locks ([5379c65](https://github.com/exadel-inc/esl/commit/5379c65aeae9e2ec824cc366638770a63ffe00a4))
* class utils extended ([c3e7f66](https://github.com/exadel-inc/esl/commit/c3e7f660330d310a0181b59927e163acb7380bf5))

## [2.4.1](https://github.com/exadel-inc/esl/compare/v2.4.0...v2.4.1) (2021-04-15)


### Bug Fixes

* add TraversingQuery to ESL ns ([d1b2af2](https://github.com/exadel-inc/esl/commit/d1b2af2dedc17ccde818d5910029feda6deee2dc))
* disable scroll native mode fix ([2f5bb86](https://github.com/exadel-inc/esl/commit/2f5bb868647ae12af5312a4af8fd9995cb896432))
* outsideAction tracker conflicts with outside esl-triggers / activators ([b544e07](https://github.com/exadel-inc/esl/commit/b544e07f37bbb61a6b8d57166ebe5077f5585d7d))

# [2.4.0](https://github.com/exadel-inc/esl/compare/v2.3.2...v2.4.0) (2021-04-13)


### Bug Fixes

* add ability to pass custom user data trough toggleable params ([9e7af26](https://github.com/exadel-inc/esl/commit/9e7af2640be7868749184cff0fb9d489229b1dbb))


### Features

* extend Scrollable Tabs to support center position ([b3bb7d8](https://github.com/exadel-inc/esl/commit/b3bb7d8f3602a81da4f5ce7bfab6e48db73df4ac))
* override and readonly decorators deprecate and replaced with a `prop` decorator ([eb4040e](https://github.com/exadel-inc/esl/commit/eb4040e08ce7522e330faabb6696fbc1f0d25afa))

## [2.3.2](https://github.com/exadel-inc/esl/compare/v2.3.1...v2.3.2) (2021-04-08)


### Bug Fixes

* fix for the less files build ([#41](https://github.com/exadel-inc/esl/issues/41)dd93a) ([d079851](https://github.com/exadel-inc/esl/commit/d0798516a536e7a76f1a282c3ed944d1455f2286)), closes [#41dd93](https://github.com/exadel-inc/esl/issues/41dd93)

## [2.3.1](https://github.com/exadel-inc/esl/compare/v2.3.0...v2.3.1) (2021-04-08)


### Bug Fixes

* temporary npm build vix ([41dd93a](https://github.com/exadel-inc/esl/commit/41dd93a96c4e3313d55bca4d0dbbf470605c05a7))

# [2.3.0](https://github.com/exadel-inc/esl/compare/v2.2.1...v2.3.0) (2021-04-08)

### Features

* override and readonly implementation ([641da83](https://github.com/exadel-inc/esl/commit/641da83f7b43ea10711e8d64d2047582d2376ac1))

## [2.2.1](https://github.com/exadel-inc/esl/compare/v2.2.0...v2.2.1) (2021-04-02)


### Bug Fixes

* remove allow-same-version ([0016ada](https://github.com/exadel-inc/esl/commit/0016ada0a694bbc75cbaba23deb61037f9d1737e))

# [2.2.0](https://github.com/exadel-inc/esl/compare/v2.1.0...v2.2.0) (2021-04-02)


### Bug Fixes

* allow-same-version temporary set to true ([75eb9a0](https://github.com/exadel-inc/esl/commit/75eb9a052749ff394c275e8e091fff54a28158b9))
* npm members ([0b9fbae](https://github.com/exadel-inc/esl/commit/0b9fbae649c5a8cee8434db08031763bf278575f))


### Features

* npm release-ready version ([30c8624](https://github.com/exadel-inc/esl/commit/30c8624fdfc37a14fd35eafd8678633844813846))

# [2.2.0](https://github.com/exadel-inc/esl/compare/v2.1.0...v2.2.0) (2021-04-02)


### Features

* npm release-ready version ([30c8624](https://github.com/exadel-inc/esl/commit/30c8624fdfc37a14fd35eafd8678633844813846))

# [2.1.0](https://github.com/exadel-inc/esl/compare/v2.0.0...v2.1.0) (2021-04-02)


### Bug Fixes

* debounce fit to viewport ([0413596](https://github.com/exadel-inc/esl/commit/04135969988fcc5e0ff560c45f253a40279eb2cc))
* dependencies vulnerability cleanup ([7823287](https://github.com/exadel-inc/esl/commit/782328704aee31b31163f35f443ae3a8696eb21c))
* dependencies vulnerability cleanup 2 ([d335aaa](https://github.com/exadel-inc/esl/commit/d335aaac3525c0004347df21440c2add5a035753))


### Features

* ability to refresh esl-media via esl:refresh ([2419237](https://github.com/exadel-inc/esl/commit/2419237dd3ea4dfd62b9ad08fd86218aa53c92df))

# [2.0.0](https://github.com/exadel-inc/esl/compare/v1.1.0...v2.0.0) (2021-03-29)


### Bug Fixes

* a11y ([8d1085b](https://github.com/exadel-inc/esl/commit/8d1085ba0d9e8e05e2633e8e943a50539972e279))
* accordion styles animation fixes ([d59a44b](https://github.com/exadel-inc/esl/commit/d59a44bebfbe639846f4e86a0f430e4b820be8e9))
* add full ts export for scroll ([1e40678](https://github.com/exadel-inc/esl/commit/1e406783222a74d7d22a7a9ea5b26566377c4d83))
* add multiple active panels control ([c662999](https://github.com/exadel-inc/esl/commit/c6629992476a78f9469bed49faf876f261f91e13))
* adjust group control ([86286b1](https://github.com/exadel-inc/esl/commit/86286b1df18e04e9a8114be44ecf05dc2be3db67))
* allow super.register call for esl-base-element instances ([19e8e05](https://github.com/exadel-inc/esl/commit/19e8e051d413c28e1ecd74b2b636e1a3281d2d08))
* animation of single panel (w/o panel group) ([01aa5e9](https://github.com/exadel-inc/esl/commit/01aa5e92e9a5027c1fd2f2a6c42381f1e1e561f7))
* bind method hotfix ([b7d3b1c](https://github.com/exadel-inc/esl/commit/b7d3b1ca711044c3de29c872173e98bc9bb2a3bc))
* bouncing up when crossing between tabs ([ea7053b](https://github.com/exadel-inc/esl/commit/ea7053b64b97865f3768ba298d906a82da0a0e5e))
* change iframe provide scrolling to no ([b8672e3](https://github.com/exadel-inc/esl/commit/b8672e335a177c5d34768f7f145ad78c58352c1f))
* cover mode calculation for non blink browsers ([5cd6bc2](https://github.com/exadel-inc/esl/commit/5cd6bc29498b46634a74ce4885ae45c89511b47b))
* deepCompare null check fix ([8211738](https://github.com/exadel-inc/esl/commit/82117384c58911632cb3565d037bd0aedec61982))
* default export value replaced with singleton accessor ([ca323aa](https://github.com/exadel-inc/esl/commit/ca323aafb66dfe21e8fe2bee54e91ee080e9d377))
* empty alert on initiating in the animation hide time ([0b1ed7a](https://github.com/exadel-inc/esl/commit/0b1ed7a45295a59a2fd6e6a5de09d99b8759d2ce))
* esl-alert a11y and post animate cleanup ([7646ffb](https://github.com/exadel-inc/esl/commit/7646ffb70eb46bc786a5f5153b8352b18907deaa))
* esl-alert target attribute change observation fixed ([5226c96](https://github.com/exadel-inc/esl/commit/5226c9653e69547819ebe407e6a75dba9dba012c))
* fallback timer reset for panel animation ([c61c9f1](https://github.com/exadel-inc/esl/commit/c61c9f11e7bc7ee1169acb9aa32708c19506a257))
* fallback timer reset for panel-group animation ([0bb9b02](https://github.com/exadel-inc/esl/commit/0bb9b0236c56c791b181c09dd46899b302f01099))
* fix ESLMedia events prefix ([76035fe](https://github.com/exadel-inc/esl/commit/76035fea0216157ee4f68ec9a7e14d20f3a4dc1a))
* fix focus and position calculation ([815b8ad](https://github.com/exadel-inc/esl/commit/815b8ad5bd58e0814a569dd3337884417f55f790))
* fix package.json and IE compatibility problems ([68f1bb6](https://github.com/exadel-inc/esl/commit/68f1bb669d7b50acf68253cfeb795dac5b486ae1))
* fix tracking click event for Popup ([2c3bff0](https://github.com/exadel-inc/esl/commit/2c3bff00a7f129e4382eca7fac37b7e6b28f2ead))
* fix tracking click event for Popup (rename the method and arguments) ([8abd6e5](https://github.com/exadel-inc/esl/commit/8abd6e544ea49fc13379928d6b6f43f137e0bb76))
* format utility support for multiple replacements ([3d8a6e7](https://github.com/exadel-inc/esl/commit/3d8a6e7ddec1a201de90262d69f4e269c810e614))
* optimize select performance. update demo content ([9c916d6](https://github.com/exadel-inc/esl/commit/9c916d684df4a75fe5a6bcc0d75fed7ea25781f5))
* optimize UX for close outside feature ([c058400](https://github.com/exadel-inc/esl/commit/c0584007b0597b1b6c5d308592635267986f1efb))
* remove eventNs for image & scroll fix image ready event ([2f3382f](https://github.com/exadel-inc/esl/commit/2f3382f206255b85be143fbb802d6c0fa12d4ac6))
* rename loaded event of ESLImage to the load event (from spec) ([23ecb84](https://github.com/exadel-inc/esl/commit/23ecb844fe41e54c1dd9ac58ac3f9fe23917ae97))
* select a11y basic improvements ([5c1657d](https://github.com/exadel-inc/esl/commit/5c1657df7d688eb93042c15955152f8e13d9a840))
* set position relative to smart-media root for special fill-modes ([4f5bbd7](https://github.com/exadel-inc/esl/commit/4f5bbd70522c7b279063970cdecf9e1f971e7a86))
* small styling and imports updates ([3e10b5f](https://github.com/exadel-inc/esl/commit/3e10b5f0babe747df4f3cf478f5c42340c8eeb11))


### Code Refactoring

* cleanup for ESLBasePopupGroupManager ([5f68efd](https://github.com/exadel-inc/esl/commit/5f68efdff5848e4a98f0293328545d00371c244d))
* get rid of default imports and fix draft select component accessor naming ([155dbf9](https://github.com/exadel-inc/esl/commit/155dbf981d54c33a2323e2ec740400ba5b563d87))
* popup property of the trigger renamed to $target ([cdc4230](https://github.com/exadel-inc/esl/commit/cdc423072fd0ba48a311042d026e572a9457a369))
* scrollable & alert renaming ([a61e56e](https://github.com/exadel-inc/esl/commit/a61e56ebaa348a98853a08ebb33d8ae971d0ac54))


### Documentation

* esl-select fixes ([5407ac2](https://github.com/exadel-inc/esl/commit/5407ac241afce10c3991ffee7bc5e2cb939bc4b4))


### Features

* !revert back esl prefix for events ([adef294](https://github.com/exadel-inc/esl/commit/adef294f76ef6b9c9a46cd743fd26d65b45cbfdf))
* `[@ready](https://github.com/ready)` decorator and readyState listener ([6d1a32f](https://github.com/exadel-inc/esl/commit/6d1a32fd1d5b83dcb03902fb0cd874cc32b8f806))
* add ability to cancel animation ([53b3235](https://github.com/exadel-inc/esl/commit/53b32352983e94bcb6e015eacdd3094ece50de51))
* add ability to decline collapsing ([44885c7](https://github.com/exadel-inc/esl/commit/44885c77aef69ea241a43a83c5b23b222b05d3a9))
* add empty text for select. update select events and flow ([3435ae9](https://github.com/exadel-inc/esl/commit/3435ae9460853ceb64f9c51b44bb5a4e913c0afc))
* add more label format for esl-select; fix select dropdown focus ([8682ec0](https://github.com/exadel-inc/esl/commit/8682ec054fcc31685221be050750ce77e669b425))
* add separate simplified ESLBaseTrigger ([3f5500a](https://github.com/exadel-inc/esl/commit/3f5500af7a7a5b2cd9020db9a80b3b8245ac64fe))
* esl-media extended with a ready class target option ([9966b42](https://github.com/exadel-inc/esl/commit/9966b42de148c9d5fc2390e357c4ceac057416de))
* esl-scroll moved from draft to beta components ([88e6ea6](https://github.com/exadel-inc/esl/commit/88e6ea6c12ceda66dab8441577622ed257e89842))
* esl-select basic form element proxy and reset handler fix ([85f2f78](https://github.com/exadel-inc/esl/commit/85f2f788027c2572340a5ab1465cbf7b31c5e02e))
* esl-select component POC ([dd2644e](https://github.com/exadel-inc/esl/commit/dd2644eb0bd4840ad1285298f51f238e11aaa414))
* esl-select public update and support for mutations ([b297ae2](https://github.com/exadel-inc/esl/commit/b297ae2d181e6ac96536f0041a6c921467fec9d4))
* esl-select support for simple select wrap ([b6debd8](https://github.com/exadel-inc/esl/commit/b6debd8366dcf1c438676d047b18ef0afc78eeea))
* esl-trigger rewritten ([64c05f6](https://github.com/exadel-inc/esl/commit/64c05f6b4588b2526405c531031ac055e92f533f))
* extended shim for ES5 ElementConstructor ([0eabf64](https://github.com/exadel-inc/esl/commit/0eabf64896bcf6e3e61f9c08df478614d9770af3))
* filtration common pseudo-selectors ([8b4d80e](https://github.com/exadel-inc/esl/commit/8b4d80e01c7963c3e939e1cd0ae15d765406b947))
* introduce EventUtils with a set of event related utilities ([04c5368](https://github.com/exadel-inc/esl/commit/04c536884d63dce864b2427cc2f98175b5e35e39))
* introduce new BasePopupGroupManager based on events ([8f9a426](https://github.com/exadel-inc/esl/commit/8f9a4260dac3d9d4c604e7cbcf75b9628c426f87))
* optional prevent default option for triggers. Merge triggers directory ([8c6cc3c](https://github.com/exadel-inc/esl/commit/8c6cc3cf54cb0141d83de15312b41789818d66c1))
* set iframe as a default provider for valid urls ([f320d88](https://github.com/exadel-inc/esl/commit/f320d8855cb2184e3e4747aafec0e65e91fc859f))
* **memoize:** add func cash for class instances ([f4dd895](https://github.com/exadel-inc/esl/commit/f4dd895c1dbb4dbb335ff0d75403b9cdee2b3dd2))
* support for html content for alert ([86507d8](https://github.com/exadel-inc/esl/commit/86507d8d694af05337aa4d8cd4b30fa70dda8503))
* support for multiple esl-alerts ([fd99dab](https://github.com/exadel-inc/esl/commit/fd99dabb3e4ae65560c368cf847d89681f464141))
* upgrade BasePopupGroupManager ([07aa02a](https://github.com/exadel-inc/esl/commit/07aa02a65173b85bbcf6076d7861a5950fc26e63))


### Styles

* cleanup esl-tabs documentation ([fdefaa5](https://github.com/exadel-inc/esl/commit/fdefaa58a9f02e59a9f98754e60854e052f79e07))


* chore!: history fixup commit ([c9efe88](https://github.com/exadel-inc/esl/commit/c9efe88ae6f3ffeefeedde3dc9486ad3b44f4d2a))
* refactor!: cleanup for KeyboardEvent key polyfill and keys usages ([c694727](https://github.com/exadel-inc/esl/commit/c6947279ed913dd712d6df7564810068676dcb05))
* refactor!: rename ESLBasePopup ([390f8f1](https://github.com/exadel-inc/esl/commit/390f8f16c4b40e8144a49cd37297227c933ac3d0))
* feat!: refactor of Panel & PanelStack ([d819259](https://github.com/exadel-inc/esl/commit/d8192599333101b46bab930326b2b2ef8eef6292))
* feat!: add last activator feature, fix outside action ([76bd08b](https://github.com/exadel-inc/esl/commit/76bd08ba4262e68a52de2ff21bc72ca8016c17ae))
* feat!: update for tab and trigger events; fix double a11y control for tabs ([dce85b6](https://github.com/exadel-inc/esl/commit/dce85b62a4b9e3fd270e1192a75f1796275f778f))
* feat!: eventing cleanup ([22efb73](https://github.com/exadel-inc/esl/commit/22efb7308140f40c4493716c3de1e7705ef1c0ad))
* feat!: popups massive cleanup 1 ([7441e41](https://github.com/exadel-inc/esl/commit/7441e411c0f586e366df3057c9c81b58fbdeab5f))


### BREAKING CHANGES

* make esl-tab mode="show" by default
* replace `empty-text` with `placeholder` attribute
*   Rename ESLPanelStack to ESLPanelGroup

- Introduce new ESLA11yGroup component

- ESLTabsContainer renamed to ESLTabs

- ESLScrollableTabs removed functionality moved under ESLTabs scrollable feature
*  esl-alert should be registered and initialized as separate steps
 esl-alert now use target (paren by default) to listen events instead of window
*  `keycodes.ts` constants for deprecated `keycode` removed, `key` property should be used instead
*  `targetElement` renamed to `$target`
*  `popup` renamed to `$target` in the trigger
*  default imports no longer accepted for esl modules
* 'ESLBasePopup' comp rename to 'ESLToggleable'
'ESLPopupDispatcher' comp rename to 'ESLToggleableDispatcher'
* Panel Stack uses self group management.
Group attribute should be removed to reach collapsible behavior.
Panel Stack & Panel inner API changes.
*  rename ESLBasePopupGroupManager to ESLPopupGroupDispatcher
*  'outsideclick' initiator type replaced with 'outsideaction'
*  events of BasePopup now have esl prefix
('esl:hide' / 'esl:show' / 'esl:before:hide' / 'esl:before:show')

 events of Trigger now have esl prefix:  'esl:change:active'

 events of Panel now have esl prefix: 'esl:after:hide' / 'esl:after:show'
* - `transitionend` event of ESLPanel replaced with `after:show`/`after:hide`
- `statechange` event of ESLTrigger replaced with `change:active`
* - `ESLBaseElement` no longer contains eventNs and $$fireNs methods
- Whole popups based component system no longer use event namespaces
* - `ESLBasePopup` statechange events replaced with a separate `(before:)show/hide`

# [2.0.0-beta.31](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.30...v2.0.0-beta.31) (2021-03-26)


### Documentation

* esl-select fixes ([5407ac2](https://github.com/exadel-inc/esl/commit/5407ac241afce10c3991ffee7bc5e2cb939bc4b4))


### Styles

* cleanup esl-tabs documentation ([fdefaa5](https://github.com/exadel-inc/esl/commit/fdefaa58a9f02e59a9f98754e60854e052f79e07))


### BREAKING CHANGES

* make esl-tab mode="show" by default
* replace `empty-text` with `placeholder` attribute

# [2.0.0-beta.30](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.29...v2.0.0-beta.30) (2021-03-24)


### Features

* esl-trigger rewritten ([64c05f6](https://github.com/exadel-inc/esl/commit/64c05f6b4588b2526405c531031ac055e92f533f))

# [2.0.0-beta.29](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.28...v2.0.0-beta.29) (2021-03-24)


### Bug Fixes

* accordion styles animation fixes ([d59a44b](https://github.com/exadel-inc/esl/commit/d59a44bebfbe639846f4e86a0f430e4b820be8e9))


### Features

* esl-media extended with a ready class target option ([9966b42](https://github.com/exadel-inc/esl/commit/9966b42de148c9d5fc2390e357c4ceac057416de))
* optional prevent default option for triggers. Merge triggers directory ([8c6cc3c](https://github.com/exadel-inc/esl/commit/8c6cc3cf54cb0141d83de15312b41789818d66c1))

# [2.0.0-beta.28](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.27...v2.0.0-beta.28) (2021-03-17)


### Features

* add ability to cancel animation ([53b3235](https://github.com/exadel-inc/esl/commit/53b32352983e94bcb6e015eacdd3094ece50de51))
* add ability to decline collapsing ([44885c7](https://github.com/exadel-inc/esl/commit/44885c77aef69ea241a43a83c5b23b222b05d3a9))

# [2.0.0-beta.27](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.26...v2.0.0-beta.27) (2021-03-15)


### Features

* extended shim for ES5 ElementConstructor ([0eabf64](https://github.com/exadel-inc/esl/commit/0eabf64896bcf6e3e61f9c08df478614d9770af3))
* filtration common pseudo-selectors ([8b4d80e](https://github.com/exadel-inc/esl/commit/8b4d80e01c7963c3e939e1cd0ae15d765406b947))
* set iframe as a default provider for valid urls ([f320d88](https://github.com/exadel-inc/esl/commit/f320d8855cb2184e3e4747aafec0e65e91fc859f))

# [2.0.0-beta.26](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.25...v2.0.0-beta.26) (2021-03-03)


### Bug Fixes

* adjust group control ([86286b1](https://github.com/exadel-inc/esl/commit/86286b1df18e04e9a8114be44ecf05dc2be3db67))
* fallback timer reset for panel animation ([c61c9f1](https://github.com/exadel-inc/esl/commit/c61c9f11e7bc7ee1169acb9aa32708c19506a257))
* fallback timer reset for panel-group animation ([0bb9b02](https://github.com/exadel-inc/esl/commit/0bb9b0236c56c791b181c09dd46899b302f01099))

# [2.0.0-beta.25](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.24...v2.0.0-beta.25) (2021-03-02)


### Bug Fixes

* deepCompare null check fix ([8211738](https://github.com/exadel-inc/esl/commit/82117384c58911632cb3565d037bd0aedec61982))

# [2.0.0-beta.24](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.23...v2.0.0-beta.24) (2021-03-02)


### Bug Fixes

* add multiple active panels control ([c662999](https://github.com/exadel-inc/esl/commit/c6629992476a78f9469bed49faf876f261f91e13))
* animation of single panel (w/o panel group) ([01aa5e9](https://github.com/exadel-inc/esl/commit/01aa5e92e9a5027c1fd2f2a6c42381f1e1e561f7))

# [2.0.0-beta.23](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.22...v2.0.0-beta.23) (2021-02-26)


### Bug Fixes

* empty alert on initiating in the animation hide time ([0b1ed7a](https://github.com/exadel-inc/esl/commit/0b1ed7a45295a59a2fd6e6a5de09d99b8759d2ce))
* set position relative to smart-media root for special fill-modes ([4f5bbd7](https://github.com/exadel-inc/esl/commit/4f5bbd70522c7b279063970cdecf9e1f971e7a86))


### Features

* esl-select public update and support for mutations ([b297ae2](https://github.com/exadel-inc/esl/commit/b297ae2d181e6ac96536f0041a6c921467fec9d4))

# [2.0.0-beta.22](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.21...v2.0.0-beta.22) (2021-02-24)


### Bug Fixes

* change iframe provide scrolling to no ([b8672e3](https://github.com/exadel-inc/esl/commit/b8672e335a177c5d34768f7f145ad78c58352c1f))

# [2.0.0-beta.21](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.20...v2.0.0-beta.21) (2021-02-24)


### Bug Fixes

* format utility support for multiple replacements ([3d8a6e7](https://github.com/exadel-inc/esl/commit/3d8a6e7ddec1a201de90262d69f4e269c810e614))


### Features

* **memoize:** add func cash for class instances ([f4dd895](https://github.com/exadel-inc/esl/commit/f4dd895c1dbb4dbb335ff0d75403b9cdee2b3dd2))


* chore!: history fixup commit ([c9efe88](https://github.com/exadel-inc/esl/commit/c9efe88ae6f3ffeefeedde3dc9486ad3b44f4d2a))


### BREAKING CHANGES

*   Rename ESLPanelStack to ESLPanelGroup

- Introduce new ESLA11yGroup component

- ESLTabsContainer renamed to ESLTabs

- ESLScrollableTabs removed functionality moved under ESLTabs scrollable feature

# [2.0.0-beta.21](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.20...v2.0.0-beta.21) (2021-02-23)
  
### Features
- Introduce new ESLA11yGroup component ([e354d2d](https://github.com/exadel-inc/esl/commit/e354d2daef1e7368426a2b3a794189c69c0936a7))

### BREAKING CHANGES
- Rename ESLPanelStack to ESLPanelGroup ([e354d2d](https://github.com/exadel-inc/esl/commit/e354d2daef1e7368426a2b3a794189c69c0936a7))
- ESLTabsContainer renamed to ESLTabs ([e354d2d](https://github.com/exadel-inc/esl/commit/e354d2daef1e7368426a2b3a794189c69c0936a7))
- ESLScrollableTabs removed functionality moved under ESLTabs scrollable feature ([e354d2d](https://github.com/exadel-inc/esl/commit/e354d2daef1e7368426a2b3a794189c69c0936a7))

# [2.0.0-beta.20](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.19...v2.0.0-beta.20) (2021-02-22)


### Features

* esl-select basic form element proxy and reset handler fix ([85f2f78](https://github.com/exadel-inc/esl/commit/85f2f788027c2572340a5ab1465cbf7b31c5e02e))

# [2.0.0-beta.19](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.18...v2.0.0-beta.19) (2021-02-19)


### Bug Fixes

* esl-alert a11y and post animate cleanup ([7646ffb](https://github.com/exadel-inc/esl/commit/7646ffb70eb46bc786a5f5153b8352b18907deaa))

# [2.0.0-beta.18](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.17...v2.0.0-beta.18) (2021-02-18)


### Bug Fixes

* esl-alert target attribute change observation fixed ([5226c96](https://github.com/exadel-inc/esl/commit/5226c9653e69547819ebe407e6a75dba9dba012c))
* select a11y basic improvements ([5c1657d](https://github.com/exadel-inc/esl/commit/5c1657df7d688eb93042c15955152f8e13d9a840))


### Features

* support for multiple esl-alerts ([fd99dab](https://github.com/exadel-inc/esl/commit/fd99dabb3e4ae65560c368cf847d89681f464141))


* refactor!: cleanup for KeyboardEvent key polyfill and keys usages ([c694727](https://github.com/exadel-inc/esl/commit/c6947279ed913dd712d6df7564810068676dcb05))


### BREAKING CHANGES

*  esl-alert should be registered and initialized as separate steps
 esl-alert now use target (paren by default) to listen events instead of window
*  `keycodes.ts` constants for deprecated `keycode` removed, `key` property should be used instead

# [2.0.0-beta.17](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.16...v2.0.0-beta.17) (2021-02-11)


### Bug Fixes

* default export value replaced with singleton accessor ([ca323aa](https://github.com/exadel-inc/esl/commit/ca323aafb66dfe21e8fe2bee54e91ee080e9d377))
* small styling and imports updates ([3e10b5f](https://github.com/exadel-inc/esl/commit/3e10b5f0babe747df4f3cf478f5c42340c8eeb11))


### Code Refactoring

* get rid of default imports and fix draft select component accessor naming ([155dbf9](https://github.com/exadel-inc/esl/commit/155dbf981d54c33a2323e2ec740400ba5b563d87))
* popup property of the trigger renamed to $target ([cdc4230](https://github.com/exadel-inc/esl/commit/cdc423072fd0ba48a311042d026e572a9457a369))
* scrollable & alert renaming ([a61e56e](https://github.com/exadel-inc/esl/commit/a61e56ebaa348a98853a08ebb33d8ae971d0ac54))


### Features

* esl-scroll moved from draft to beta components ([88e6ea6](https://github.com/exadel-inc/esl/commit/88e6ea6c12ceda66dab8441577622ed257e89842))
* esl-select support for simple select wrap ([b6debd8](https://github.com/exadel-inc/esl/commit/b6debd8366dcf1c438676d047b18ef0afc78eeea))
* support for html content for alert ([86507d8](https://github.com/exadel-inc/esl/commit/86507d8d694af05337aa4d8cd4b30fa70dda8503))


* refactor!: rename ESLBasePopup ([390f8f1](https://github.com/exadel-inc/esl/commit/390f8f16c4b40e8144a49cd37297227c933ac3d0))


### BREAKING CHANGES

*  `targetElement` renamed to `$target`
*  `popup` renamed to `$target` in the trigger
*  default imports no longer accepted for esl modules
* 'ESLBasePopup' comp rename to 'ESLToggleable'
'ESLPopupDispatcher' comp rename to 'ESLToggleableDispatcher'

# [2.0.0-beta.16](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.15...v2.0.0-beta.16) (2021-02-08)


### Bug Fixes

* allow super.register call for esl-base-element instances ([19e8e05](https://github.com/exadel-inc/esl/commit/19e8e051d413c28e1ecd74b2b636e1a3281d2d08))

# [2.0.0-beta.15](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.14...v2.0.0-beta.15) (2021-02-04)


### Features

* add more label format for esl-select; fix select dropdown focus ([8682ec0](https://github.com/exadel-inc/esl/commit/8682ec054fcc31685221be050750ce77e669b425))

# [2.0.0-beta.14](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.13...v2.0.0-beta.14) (2021-02-04)


### Bug Fixes

* fix focus and position calculation ([815b8ad](https://github.com/exadel-inc/esl/commit/815b8ad5bd58e0814a569dd3337884417f55f790))

# [2.0.0-beta.13](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.12...v2.0.0-beta.13) (2021-02-04)


### Bug Fixes

* a11y ([8d1085b](https://github.com/exadel-inc/esl/commit/8d1085ba0d9e8e05e2633e8e943a50539972e279))


### Features

* add empty text for select. update select events and flow ([3435ae9](https://github.com/exadel-inc/esl/commit/3435ae9460853ceb64f9c51b44bb5a4e913c0afc))

# [2.0.0-beta.12](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.11...v2.0.0-beta.12) (2021-02-04)


### Bug Fixes

* add full ts export for scroll ([1e40678](https://github.com/exadel-inc/esl/commit/1e406783222a74d7d22a7a9ea5b26566377c4d83))
* optimize select performance. update demo content ([9c916d6](https://github.com/exadel-inc/esl/commit/9c916d684df4a75fe5a6bcc0d75fed7ea25781f5))


### Features

* esl-select component POC ([dd2644e](https://github.com/exadel-inc/esl/commit/dd2644eb0bd4840ad1285298f51f238e11aaa414))

# [2.0.0-beta.11](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.10...v2.0.0-beta.11) (2021-02-03)


### Bug Fixes

* bouncing up when crossing between tabs ([ea7053b](https://github.com/exadel-inc/esl/commit/ea7053b64b97865f3768ba298d906a82da0a0e5e))

# [2.0.0-beta.10](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.9...v2.0.0-beta.10) (2021-02-03)

# [2.0.0-beta.9](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.8...v2.0.0-beta.9) (2021-02-03)

# [2.0.0-beta.8](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.7...v2.0.0-beta.8) (2021-02-02)

# [2.0.0-beta.7](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.6...v2.0.0-beta.7) (2021-02-02)


* feat!: refactor of Panel & PanelStack ([d819259](https://github.com/exadel-inc/esl/commit/d8192599333101b46bab930326b2b2ef8eef6292))


### Features

* upgrade BasePopupGroupManager ([07aa02a](https://github.com/exadel-inc/esl/commit/07aa02a65173b85bbcf6076d7861a5950fc26e63))


### BREAKING CHANGES

* Panel Stack uses self group management.
Group attribute should be removed to reach collapsible behavior.
Panel Stack & Panel inner API changes.

# [2.0.0-beta.6](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.5...v2.0.0-beta.6) (2021-02-01)


### Bug Fixes

* rename loaded event of ESLImage to the load event (from spec) ([23ecb84](https://github.com/exadel-inc/esl/commit/23ecb844fe41e54c1dd9ac58ac3f9fe23917ae97))


### Code Refactoring

* cleanup for ESLBasePopupGroupManager ([5f68efd](https://github.com/exadel-inc/esl/commit/5f68efdff5848e4a98f0293328545d00371c244d))


### BREAKING CHANGES

*  rename ESLBasePopupGroupManager to ESLPopupGroupDispatcher

# [2.0.0-beta.5](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.4...v2.0.0-beta.5) (2021-02-01)


### Bug Fixes

* bind method hotfix ([b7d3b1c](https://github.com/exadel-inc/esl/commit/b7d3b1ca711044c3de29c872173e98bc9bb2a3bc))

# [2.0.0-beta.4](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.3...v2.0.0-beta.4) (2021-01-31)


### Features

* add separate simplified ESLBaseTrigger ([3f5500a](https://github.com/exadel-inc/esl/commit/3f5500af7a7a5b2cd9020db9a80b3b8245ac64fe))
* introduce EventUtils with a set of event related utilities ([04c5368](https://github.com/exadel-inc/esl/commit/04c536884d63dce864b2427cc2f98175b5e35e39))
* introduce new BasePopupGroupManager based on events ([8f9a426](https://github.com/exadel-inc/esl/commit/8f9a4260dac3d9d4c604e7cbcf75b9628c426f87))


* feat!: add last activator feature, fix outside action ([76bd08b](https://github.com/exadel-inc/esl/commit/76bd08ba4262e68a52de2ff21bc72ca8016c17ae))


### Bug Fixes

* fix package.json and IE compatibility problems ([68f1bb6](https://github.com/exadel-inc/esl/commit/68f1bb669d7b50acf68253cfeb795dac5b486ae1))


### BREAKING CHANGES

*  'outsideclick' initiator type replaced with 'outsideaction'

# [2.0.0-beta.3](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2021-01-28)


### Bug Fixes

* fix ESLMedia events prefix ([76035fe](https://github.com/exadel-inc/esl/commit/76035fea0216157ee4f68ec9a7e14d20f3a4dc1a))

# [2.0.0-beta.2](https://github.com/exadel-inc/esl/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2021-01-28)


### Features

* !revert back esl prefix for events ([adef294](https://github.com/exadel-inc/esl/commit/adef294f76ef6b9c9a46cd743fd26d65b45cbfdf))
* add originalWidth / originalHeight accessors to ESLImage ([365e31b](https://github.com/exadel-inc/esl/commit/365e31b78db67b4bbc335c17078b117459753aa4))


### BREAKING CHANGES

*  events of BasePopup now have esl prefix
('esl:hide' / 'esl:show' / 'esl:before:hide' / 'esl:before:show')

 events of Trigger now have esl prefix:  'esl:change:active'

 events of Panel now have esl prefix: 'esl:after:hide' / 'esl:after:show'

# [2.0.0-beta.1](https://github.com/exadel-inc/esl/compare/v1.0.1...v2.0.0-beta.1) (2021-01-26)


* feat!: update for tab and trigger events; fix double a11y control for tabs ([dce85b6](https://github.com/exadel-inc/esl/commit/dce85b62a4b9e3fd270e1192a75f1796275f778f))
* feat!: eventing cleanup ([22efb73](https://github.com/exadel-inc/esl/commit/22efb7308140f40c4493716c3de1e7705ef1c0ad))
* feat!: popups massive cleanup 1 ([7441e41](https://github.com/exadel-inc/esl/commit/7441e411c0f586e366df3057c9c81b58fbdeab5f))


### Bug Fixes

* fix tracking click event for Popup ([2c3bff0](https://github.com/exadel-inc/esl/commit/2c3bff00a7f129e4382eca7fac37b7e6b28f2ead))
* fix tracking click event for Popup (rename the method and arguments) ([8abd6e5](https://github.com/exadel-inc/esl/commit/8abd6e544ea49fc13379928d6b6f43f137e0bb76))
* optimize UX for close outside feature ([c058400](https://github.com/exadel-inc/esl/commit/c0584007b0597b1b6c5d308592635267986f1efb))
* remove eventNs for image & scroll fix image ready event ([2f3382f](https://github.com/exadel-inc/esl/commit/2f3382f206255b85be143fbb802d6c0fa12d4ac6))


### Features

* `[@ready](https://github.com/ready)` decorator and readyState listener ([6d1a32f](https://github.com/exadel-inc/esl/commit/6d1a32fd1d5b83dcb03902fb0cd874cc32b8f806))


### BREAKING CHANGES

* - `transitionend` event of ESLPanel replaced with `after:show`/`after:hide`
- `statechange` event of ESLTrigger replaced with `change:active`
* - `ESLBaseElement` no longer contains eventNs and $$fireNs methods
- Whole popups based component system no longer use event namespaces
* - `ESLBasePopup` statechange events replaced with a separate `(before:)show/hide`

# [1.1.0](https://github.com/exadel-inc/esl/compare/v1.0.1...v1.1.0) (2021-01-27)


### Features

* add originalWidth / originalHeight accessors to ESLImage ([365e31b](https://github.com/exadel-inc/esl/commit/365e31b78db67b4bbc335c17078b117459753aa4))

## [1.0.1](https://github.com/exadel-inc/esl/compare/v1.0.0...v1.0.1) (2021-01-18)


### Bug Fixes

* fix providerName type to allow user to extend default providers ([4b6e67e](https://github.com/exadel-inc/esl/commit/4b6e67eb2895f327fec7f45abb539d4217ba7757))

# 1.0.0 (2021-01-18)


### Bug Fixes

* Add extend draggable area for esl-scrollbar ([403cf33](https://github.com/exadel-inc/esl/commit/403cf339d165917ceb65e7e1264c264a21397a09))
* browser list term in package.json ([39426dd](https://github.com/exadel-inc/esl/commit/39426dd33c159454091f5c4e14ed26545ff7e691))
* build process updated; NPM release file-list fix ([a13bacf](https://github.com/exadel-inc/esl/commit/a13bacf053cdc6fee583965003dfd246881c1a04))
* ESL media query fix ([ca4a904](https://github.com/exadel-inc/esl/commit/ca4a9043615f672bff381cf1971356129866ab0d))
* fix linting error for scrollbar a11y pseudo-element ([4974354](https://github.com/exadel-inc/esl/commit/49743548defb74ff46886f1b2410c0189ad8dd81))
* fix strict comparison. ([5462ae3](https://github.com/exadel-inc/esl/commit/5462ae339983c98dcdb76949a938c26fd0c7ea88))
* fix youtube url regexp, typo in error and mock formatting ([1da03bd](https://github.com/exadel-inc/esl/commit/1da03bdd285da5c21cfce9d07ca45591c001ad78))
* ie-zindex-fix update ([5729f30](https://github.com/exadel-inc/esl/commit/5729f30d283ac67cbd12fe75bf46c32904a03d1b))
* native 'close on body click' feature can be prevented by outside click handlers ([853106d](https://github.com/exadel-inc/esl/commit/853106db29bd0dce0fa2dbd0f8a0290c87c8cac7))
* path for coverage test exclusions ([6c29f49](https://github.com/exadel-inc/esl/commit/6c29f490cde159ecc6fda483fc291660c02ce6d6))
* polyfill content fix ([ecb738e](https://github.com/exadel-inc/esl/commit/ecb738e8173f1834ef2a8eb8f7ed863baf3b6a1d))
* pr comments and bugfixes ([6783473](https://github.com/exadel-inc/esl/commit/6783473363c313948d924325027162f4a418bf72))
* semantic release test ([2b53b37](https://github.com/exadel-inc/esl/commit/2b53b37455d0cc96ab855a91b40b9b3783aaccca))
* Sonar code small fix. ([947c4e0](https://github.com/exadel-inc/esl/commit/947c4e097bb2858b6fe9c9064aed49c39e953184))
* test fix. ([2e09121](https://github.com/exadel-inc/esl/commit/2e09121b335da5675e7155b2a96f0cc44f044ebb))
* Tests and fix for BreakpointRegistry ([6c1b333](https://github.com/exadel-inc/esl/commit/6c1b333f3195a9e354322998faa67cd47aaa902e))
* typo fixes. ([c477f5f](https://github.com/exadel-inc/esl/commit/c477f5f8fcbdb6658978f7fecbcfcd3c8cd46885))


### Features

* add get / set utility and simple compile method ([8283bfa](https://github.com/exadel-inc/esl/commit/8283bfa34a5068d5ddadfadb4aaa64699a6b7936))
* commit-lint integration ([138c4c2](https://github.com/exadel-inc/esl/commit/138c4c237400f9fb8b1099296cd4762cb36e333a))
* commit-lint use conventional-commit rules ([03dc5cd](https://github.com/exadel-inc/esl/commit/03dc5cd7c6a982fb546a98e197c951e24d424bfb))
* ESL Scroll bar updated with unified event handling. ([5a5aa30](https://github.com/exadel-inc/esl/commit/5a5aa305e4fc214bc91b838d65c5dfe18c50fa7a))
* esl-media-query tests and fixes ([e8f554f](https://github.com/exadel-inc/esl/commit/e8f554f1470559c4a7de1836f4be7b36b7602508))
* JSX interface for ESL Scrollbar and ESL Media ([1a99746](https://github.com/exadel-inc/esl/commit/1a9974604c57174fa9f936e943815d1277d4388b))
* update ESL Alert Component ([1c047ae](https://github.com/exadel-inc/esl/commit/1c047aed767d5d4d5670e84e6d0541c6d7cac10f))

## [1.41.2](https://github.com/exadel-inc/esl/compare/v1.41.1-alpha...v1.41.2-alpha) (2021-01-13)


### Bug Fixes

* browser list term in package.json ([39426dd](https://github.com/exadel-inc/esl/commit/39426dd33c159454091f5c4e14ed26545ff7e691))
* build process updated; NPM release file-list fix ([a13bacf](https://github.com/exadel-inc/esl/commit/a13bacf053cdc6fee583965003dfd246881c1a04))

## [1.41.1](https://github.com/exadel-inc/esl/compare/v1.41.0-alpha...v1.41.1-alpha) (2021-01-13)


### Bug Fixes

* semantic release test ([2b53b37](https://github.com/exadel-inc/esl/commit/2b53b37455d0cc96ab855a91b40b9b3783aaccca))
