import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {AbdullakhHeaderNav, AbdullakhHeaderNavSocial} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-header-nav',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-header-nav.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoHeaderNav implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() headNav: AbdullakhHeaderNav;

  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() social: AbdullakhHeaderNavSocial;

  /**
   * ref для подключения к картинке
   * */
  openMenu: HTMLElement;

  render() {
    return (
      <nav class="container nav">
        <div class="nav_menu_block">
          <div class="logo" innerHTML={this.headNav.logoname}>

          </div>
          <div class="nav_menu">
            <Menu arr={this.headNav.nav}/>
            <div class="nav_menu_item">
              <div class="svg_block" innerHTML={this.headNav.iconTheme}>

              </div>
            </div>

          </div>
          <nav class="mobile_menu" ref={(el) => this.openMenu = el}>
            <cnt-flexy-view-abdullakh-promo-form-close onOpMenu={() => this.opMenu()}/>
            <div class="nav_menu_mobile">
              <Menu arr={this.headNav.nav}/>
            </div>
            <div class="mobile_icons">
              <Social arr={this.social}/>
            </div>
          </nav>
          <div class="mobile_bar" innerHTML={this.headNav.mobileBar} onClick={() => this.opMenu()}>

          </div>
        </div>
      </nav>
    );
  }

  /**
   * клик по элементам компонента product-information
   */
  public opMenu() {
    if (this.openMenu.id !== 'mobile_menu') {
      return this.openMenu.id = 'mobile_menu';
    } else {
      return this.openMenu.id = '';
    }
  }

}

/*
* компонентная функция для вывода элементов меню
 */
const Menu = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="nav_menu_item">
        <a href="#">
          {item.link}
        </a>
      </div>
    );
  })
}

/*
* компонентная функция для вывода элементов меню
 */
const Social = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-promo-header-social-icon icon={item}/>
    );
  })
}
