import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageAbdullakhPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-footer-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-footer-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhFooter implements ComponentInterface {
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
      <cnt-flexy-view-abdullakh-promo-footer categories={this.categories} onClickOnFooter={(event)=> this.clickOnFooter(event)}/>
    );
  }

  /**
   * клик по элементам компонента
   */
  public clickOnFooter({detail}) {
    return console.log("clickOnFooter:", detail);
  }
}
