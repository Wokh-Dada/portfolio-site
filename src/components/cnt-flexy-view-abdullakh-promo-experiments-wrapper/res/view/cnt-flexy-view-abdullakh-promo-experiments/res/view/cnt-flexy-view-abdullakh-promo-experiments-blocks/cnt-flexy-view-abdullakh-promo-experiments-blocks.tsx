import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhExperimentsBlocks} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-experiments-blocks',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-experiments-blocks.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoExperimentsBlocks implements ComponentInterface {
  /**
   * массив для вывода элементов ExperimentsBlocks
   * */
  @Prop() arr: AbdullakhExperimentsBlocks;

  /**
   * клик по элементам компонента TransitionCreateBot
   * */
  @Event() clickOnExperiments: EventEmitter;

  render() {
    return (
      <a class="experiment_a-block" href="#">
        <div class="experiment_a-block_inner">
          <div class="experiment_circleForGif">
            <div class="experiment_gif" style={{backgroundImage: "url(" + this.arr.img + ")"}} onClick={()=> this.clickOnExperiments.emit(this.arr.img)}>

            </div>
          </div>
          <div class="experiment_title_area">
            <div class="experiment_title" onClick={()=> this.clickOnExperiments.emit(this.arr.title)}>
              {this.arr.title}
            </div>
            <div class="experiment_subtitle" onClick={()=> this.clickOnExperiments.emit(this.arr.subtitle)}>
              {this.arr.subtitle}
            </div>
          </div>
        </div>
      </a>
    );
  }

}
