import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageAbdullakhPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-header-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-header-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoHeaderWrapper implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() categories : any ;

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
      <div>
        <cnt-flexy-view-abdullakh-promo-header-presentation categories={this.categories} onClickOnHeader={(event)=> this.clickOnHeader(event)}/>
      </div>
    );
  }

  /**
   * клик по элементам компонента
   */
  public clickOnHeader({detail}) {
    return console.log("clickOnHeader:", detail);
  }
}
