# cnt-flexy-view-abdullakh-promo-about-me-section



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                        | Type                      | Default     |
| -------- | --------- | -------------------------------------------------- | ------------------------- | ----------- |
| `about`  | --        | объект с массивом меню и string для подкомпонентов | `AbdullakhAboutMeSection` | `undefined` |


## Events

| Event           | Description                  | Type               |
| --------------- | ---------------------------- | ------------------ |
| `clickOnHeader` | клик по элементам компонента | `CustomEvent<any>` |
| `closeForm`     | Вызов модального окна формы  | `CustomEvent<any>` |


## Dependencies

### Used by

 - [cnt-flexy-view-abdullakh-promo-header-presentation](../../..)

### Depends on

- [cnt-flexy-view-abdullakh-promo-form-close](./res/view/cnt-flexy-view-abdullakh-promo-form-close)
- [cnt-flexy-view-abdullakh-promo-section-form](./res/view/cnt-flexy-view-abdullakh-promo-section-form)
- [cnt-flexy-view-abdullakh-promo-section-about-me](./res/view/cnt-flexy-view-abdullakh-promo-section-about-me)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-promo-about-me-section --> cnt-flexy-view-abdullakh-promo-form-close
  cnt-flexy-view-abdullakh-promo-about-me-section --> cnt-flexy-view-abdullakh-promo-section-form
  cnt-flexy-view-abdullakh-promo-about-me-section --> cnt-flexy-view-abdullakh-promo-section-about-me
  cnt-flexy-view-abdullakh-promo-section-form --> cnt-flexy-view-abdullakh-promo-animate-btn
  cnt-flexy-view-abdullakh-promo-header-presentation --> cnt-flexy-view-abdullakh-promo-about-me-section
  style cnt-flexy-view-abdullakh-promo-about-me-section fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
