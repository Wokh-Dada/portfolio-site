import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {AbdullakhLatestWorksBlocks} from "./interface/common.interface";
import {StorageAbdullakhPromo} from "../../../../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-latest-works-block',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-latest-works-block.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoLatestWorksBlock implements ComponentInterface {
  /**
   * массив для вывода элементов TransitionCreateBot
   * */
  @Prop() arr: AbdullakhLatestWorksBlocks;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnLatestWorks: EventEmitter;

  render() {
    return (
      <div class="latest_works_block">
        <a style={{backgroundImage: "url(" + StorageAbdullakhPromo.prefix + this.arr.img + ")"}}
           onClick={() => this.clickOnLatestWorks.emit(this.arr.img)}>
          <div class="animate_latest_work wow animate__animated animate__fadeOutRight">

          </div>
          <div class={this.numberPosition(this.arr.id)}>
            <div onClick={() => this.clickOnLatestWorks.emit(this.arr.number)}>
              {this.arr.number}
            </div>
            <div class="latest_works_inner_number_mask_wrapper">
              <div class="latest_works_inner_number_mask" onClick={() => this.clickOnLatestWorks.emit(this.arr.number)}>
                {this.arr.number}
              </div>
            </div>
          </div>
          <div class={this.worksContentPosition(this.arr.id)}>
            <div class="latest_works_content_title">
              <h3 onClick={() => this.clickOnLatestWorks.emit(this.arr.title)}>
                {this.arr.title}
              </h3>
            </div>
            <div class="latest_works_content_subtitle">
              <h5 onClick={() => this.clickOnLatestWorks.emit(this.arr.subtitle)}>
                {this.arr.subtitle}
              </h5>
            </div>
            <div class="latest_works_content_btn_block" onClick={() => this.clickOnLatestWorks.emit(event)}>
              {
                this.arr.btn.map((item) => <cnt-flexy-view-abdullakh-promo-animate-btn arr={item}/>)
              }
            </div>
          </div>
        </a>
      </div>
    );
  }

  public numberPosition(x) {
    if (x % 2 != 0) {
      return 'latest_works_number_mask number_mask_position_right';
    } else {
      return 'latest_works_number_mask number_mask_position_left';
    }
  }

  public worksContentPosition(x) {
    if (x % 2 != 0) {
      return 'latest_works_content_left';
    } else {
      return 'latest_works_content_right';
    }
  }

}
