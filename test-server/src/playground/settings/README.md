# ESL Settings, ESL Setting

UIPSettings - custom element that stores UIPSettings. ESLSetting - custom element that changes component's attribute in
the markup.

---

### Notes:

- UIPSettings:
  - This element subscribes to the 'state' of parent [ESL Playground](../core/README.md).
  - UIPSettings parses markup and distributes changes among child settings components and vice versa.
  - Setting applies only to the first matching tag.


- ESLSetting:
  - There are 3 types of settings:
    - input
    - list
    - checkbox
  - ESLSetting has required attribute 'for' that determines to which tag setting should be applied.
  - ESLSetting has required attribute 'name' that refers to attribute name which should be changed.
  - ESLListSetting should contain <uip-list-item>. <uip-list-item> has setting name in text content, while value stores
    in the attribute 'value'.

---

### Example:

```html
<uip-settings>
  <!--  Check Setting-->
  <uip-check-setting name="controls" for="esl-media"></uip-check-setting>
  <!--  Input Setting-->
  <uip-text-setting name="media-id" for="esl-media"></uip-text-setting>
  <!--  List Setting-->
  <uip-list-setting name="fill-mode" for="esl-media">
    <uip-list-item value="auto">Auto mode</uip-list-item>
    <uip-list-item value="cover">Cover mode</uip-list-item>
    <uip-list-item value="inscribe">Inscribe mode</uip-list-item>
  </uip-list-setting>
</uip-settings>
```