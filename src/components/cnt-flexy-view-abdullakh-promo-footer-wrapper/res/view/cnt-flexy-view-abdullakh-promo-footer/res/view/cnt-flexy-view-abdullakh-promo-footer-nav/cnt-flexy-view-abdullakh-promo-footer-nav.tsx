import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-footer-nav',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-footer-nav.css',
  shadow: false,
  scoped: true
})
export class cntFlexyViewAbdullakhPromoFooterNav implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() arr: any;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnFooter: EventEmitter;

  render() {
    return (
      <div class="footer_link">
        <a href={this.arr.socialHref} onClick={()=> this.clickOnFooter.emit(this.arr)}>
          {this.arr.social}
        </a>
      </div>
    );
  }

}
