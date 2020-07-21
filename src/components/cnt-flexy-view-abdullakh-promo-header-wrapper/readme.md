# cnt-flexy-view-abdullakh-header-wrapper



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                                        | Type     | Default     |
| -------------- | ---------------- | -------------------------------------------------- | -------- | ----------- |
| `categories`   | `categories`     | объект с массивом меню и string для подкомпонентов | `any`    | `undefined` |
| `pathToAssets` | `path-to-assets` | префикс путь к картинкам                           | `string` | `undefined` |


## Dependencies

### Used by

 - [my-component](../my-component)

### Depends on

- [cnt-flexy-view-abdullakh-promo-header-presentation](./res/view/cnt-flexy-view-abdullakh-promo-header-presentation)

### Graph
```mermaid
graph TD;
  cnt-flexy-view-abdullakh-promo-header-wrapper-1_01 --> cnt-flexy-view-abdullakh-promo-header-presentation
  cnt-flexy-view-abdullakh-promo-header-presentation --> cnt-flexy-view-abdullakh-promo-header-nav
  cnt-flexy-view-abdullakh-promo-header-presentation --> cnt-flexy-view-abdullakh-promo-animate-btn
  cnt-flexy-view-abdullakh-promo-header-presentation --> cnt-flexy-view-abdullakh-promo-about-me-section
  cnt-flexy-view-abdullakh-promo-header-presentation --> cnt-flexy-view-abdullakh-promo-header-social-icon
  cnt-flexy-view-abdullakh-promo-header-nav --> cnt-flexy-view-abdullakh-promo-form-close
  cnt-flexy-view-abdullakh-promo-header-nav --> cnt-flexy-view-abdullakh-promo-header-social-icon
  cnt-flexy-view-abdullakh-promo-about-me-section --> cnt-flexy-view-abdullakh-promo-form-close
  cnt-flexy-view-abdullakh-promo-about-me-section --> cnt-flexy-view-abdullakh-promo-section-form
  cnt-flexy-view-abdullakh-promo-about-me-section --> cnt-flexy-view-abdullakh-promo-section-about-me
  cnt-flexy-view-abdullakh-promo-section-form --> cnt-flexy-view-abdullakh-promo-animate-btn
  my-component --> cnt-flexy-view-abdullakh-promo-header-wrapper-1_01
  style cnt-flexy-view-abdullakh-promo-header-wrapper-1_01 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
