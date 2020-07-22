import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {AbdullakhHeaderNavSocial} from "../cnt-flexy-view-abdullakh-promo-header-nav/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-header-social-icon',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-header-social-icon.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhHeaderPresentation implements ComponentInterface {
  @Prop() icon: AbdullakhHeaderNavSocial;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <a href={this.icon.socialHref} target="_blank" class="icon_item" id="icon_item" innerHTML={this.icon.social}
         onClick={() => this.clickOnHeader.emit(this.icon.socialHref)}>

      </a>
    );
  }

}
