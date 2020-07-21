import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {StorageAbdullakhPromo} from "../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-experiments-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-experiments-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoExperiments implements ComponentInterface {
  /**
   * массив для вывода элементов Experiments
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
      <cnt-flexy-view-abdullakh-promo-experiments payload={this.payload} onClickOnExperiments={(event)=> this.clickOnExperiments(event)}/>
    );
  }

  /**
   * клик по элементам компонента
   */
  public clickOnExperiments({detail}) {
    return console.log("clickOnExperiments:", detail);
  }
}

