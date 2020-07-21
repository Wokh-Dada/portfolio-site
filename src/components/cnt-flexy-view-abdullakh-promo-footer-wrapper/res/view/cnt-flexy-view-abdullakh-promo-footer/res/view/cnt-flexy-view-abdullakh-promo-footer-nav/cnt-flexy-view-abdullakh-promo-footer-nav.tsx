import {Component, ComponentInterface, h, Prop} from '@stencil/core';

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

  render() {
    return (
      <div class="footer_link">
        <a href={this.arr.socialHref}>
          {this.arr.social}
        </a>
      </div>
    );
  }

}
