import {Component, h} from '@stencil/core';
import {experiments, footer, header, latestWork} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  /**
   * временный префикс ссылки для картинок
   */
  public testPathToAssets =
    "";

  render() {
    return (
      <div>
        <cnt-flexy-view-abdullakh-promo-header-wrapper-1_01 categories={header} pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-abdullakh-promo-latest-works-wrapper-1_01 payload={latestWork} pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-abdullakh-promo-experiments-wrapper-1_01 payload={experiments} pathToAssets={this.testPathToAssets}/>
        <cnt-flexy-view-abdullakh-promo-footer-wrapper-1_01 categories={footer} pathToAssets={this.testPathToAssets}/>
      </div>
    );
  }
}
