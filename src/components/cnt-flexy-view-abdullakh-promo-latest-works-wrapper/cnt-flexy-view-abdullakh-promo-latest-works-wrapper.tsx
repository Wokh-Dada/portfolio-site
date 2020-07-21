import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageAbdullakhPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-latest-works-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-latest-works-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoLatestWorksWrapper implements ComponentInterface {
  /**
   * массив для вывода элементов LatestWorksWrapper
   * */
  @Prop() payload: any;

  /**
   * префикс путь к картинкам
   * */
  @Prop() pathToAssets: string;

  /**
   * присваивание переданного пути общей переменной для вызова в любом месте
   * */
  componentWillLoad() {
    StorageAbdullakhPromo.prefix = this.pathToAssets;
  }

  render() {
    return (
      <cnt-flexy-view-abdullakh-promo-latest-works payload={this.payload}/>
    );
  }
}
