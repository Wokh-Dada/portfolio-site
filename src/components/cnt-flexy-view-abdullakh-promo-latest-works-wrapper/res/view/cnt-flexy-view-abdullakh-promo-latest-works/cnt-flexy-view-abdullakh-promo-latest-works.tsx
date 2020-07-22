import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {AbdullakhLatestWorks} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-latest-works',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-latest-works.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoLatestWorks implements ComponentInterface {
  /**
   * массив для вывода элементов LatestWorks
   * */
  @Prop() payload: AbdullakhLatestWorks;

    /**
   * клик по элементам компонента
   * */
  @Event() clickOnLatestWorks: EventEmitter;

  render() {
    return (
      <section class="container latest_works_wrapper" id="latest_works">
        <div class="latest_works_title_block">
          <div class="latest_works_subtitle">
            <h4 onClick={()=> this.clickOnLatestWorks.emit(this.payload.subtitle)}>
              {this.payload.subtitle}
            </h4>
          </div>
          <div class="latest_works_title">
            <h2 onClick={()=> this.clickOnLatestWorks.emit(this.payload.title)}>
              {this.payload.title}
            </h2>
          </div>
          <div class="latest_works_block_wrapper">
            <CreateBotTitle arr={this.payload.latestWorksBlock}/>
          </div>
        </div>
      </section>
    );
  }

}

/*
* компонентная функция для вывода элементов LatestWorksBlock
 */
const CreateBotTitle = (props) => {
  return props.arr.map((item) => {
    if (item.id % 2 != 0) {
      return (
        <div class="latest_works_pos_right">
          <cnt-flexy-view-abdullakh-promo-latest-works-block arr={item}/>
        </div>
      );
    } else {
      return (
        <div class="latest_works_pos_left">
          <cnt-flexy-view-abdullakh-promo-latest-works-block arr={item}/>
        </div>
      );
    }
  })
}
