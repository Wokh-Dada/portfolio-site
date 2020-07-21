import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {AbdullakhHeaderNavSocial} from "../cnt-flexy-view-abdullakh-promo-header-nav/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-header-social-icon',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-header-social-icon.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhHeaderPresentation implements ComponentInterface {
  @Prop()icon: AbdullakhHeaderNavSocial;

  render() {
    return (
        <a href={this.icon.socialHref} target="_blank" class="icon_item" innerHTML={this.icon.social}>

        </a>
    );
  }

}
