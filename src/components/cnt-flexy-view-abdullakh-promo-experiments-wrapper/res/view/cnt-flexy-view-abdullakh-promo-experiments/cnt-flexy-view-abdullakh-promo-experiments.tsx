import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {AbdullakhExperiments} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-experiments',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-experiments.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoExperiments implements ComponentInterface {
  /**
   * массив для вывода элементов Experiments
   * */
  @Prop() payload: AbdullakhExperiments;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnExperiments: EventEmitter;

  render() {
    return (
      <section class="container-fluid p-0 m-0" id="experiment_works">
        <div class="experiment_works_wrapper">
          <div class="experiment_works_title_wrapper">
            <div class="experiment_works_subtitle" onClick={()=> this.clickOnExperiments.emit(this.payload.subtitle)}>
              <h4>
                {this.payload.subtitle}
              </h4>
            </div>
            <div class="experiment_works_title" onClick={()=> this.clickOnExperiments.emit(this.payload.title)}>
              <h2>
                {this.payload.title}
              </h2>
            </div>
          </div>
          <div class="experiment_works_block">
            <ExperimentsBlocks arr={this.payload.experimentsBlock}/>
          </div>
        </div>
      </section>
    );
  }
}

/*
* компонентная функция для вывода элементов experiments-blocks
 */
const ExperimentsBlocks = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-promo-experiments-blocks arr={item}/>
    );
  })
}
