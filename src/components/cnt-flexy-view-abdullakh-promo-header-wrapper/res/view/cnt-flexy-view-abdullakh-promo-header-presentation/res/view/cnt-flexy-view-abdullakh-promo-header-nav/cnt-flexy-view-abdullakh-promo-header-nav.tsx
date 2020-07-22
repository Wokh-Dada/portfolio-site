import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
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
   * клик по элементам компонента
   * */
  @Event() clickOnHeader: EventEmitter;

  /**
   * клик по элементам компонента
   * */
  @Event() openForm: EventEmitter;

  /**
   * клик по элементам компонента
   * */
  @Event() headerTheme: EventEmitter;

  /**
   * ref для подключения к картинке
   * */
  openMenu: HTMLElement;

  /**
   * ref для подключения к картинке
   * */
  class: HTMLElement;

  render() {
    console.log(this.class)
    return (
      <nav class="container nav">
        <div class="nav_menu_block" ref={(el) => this.class = el}>
          <div class="logo" innerHTML={this.headNav.logoname}

               onClick={() => {
                 this.clickOnHeader.emit(this.headNav.logoname);
               }}
          >
            {/*логотип*/}
          </div>
          <div class="nav_menu">
            {
              this.headNav.nav.map((item) => {
                return (
                  <div class="nav_menu_item">
                    <a href={item.linkHref} onClick={() => this.openFormContact(item.linkHref)}>
                      {item.link}
                    </a>
                  </div>
                );
              })
            }
            <div class="nav_menu_item">
              <div class="svg_block" innerHTML={this.headNav.iconTheme}
                   onClick={() => {
                     this.clickOnHeader.emit(event);
                     this.headerTheme.emit();
                     this.ThemeColor()
                   }}>
                {/*иконка смены светлого и темного классы темы*/}
              </div>
            </div>
          </div>
          {/*мобильное меню*/}
          <nav class="mobile_menu" ref={(el) => this.openMenu = el}>
            <cnt-flexy-view-abdullakh-promo-form-close onOpMenu={() => this.opMenu()}/>
            <div class="nav_menu_mobile" onClick={() => this.clickOnHeader.emit(this.headNav.iconTheme)}>
              {
                this.headNav.nav.map((item) => {
                  return (
                    <div class="nav_menu_item">
                      <a href={item.linkHref} onClick={() => this.openFormContact(item.linkHref)}>
                        {item.link}
                      </a>
                    </div>
                  );
                })
              }
            </div>
            <div class="mobile_icons">
              <Social arr={this.social}/>
            </div>
          </nav>
          <div class="mobile_bar" innerHTML={this.headNav.mobileBar} onClick={() => {
            this.opMenu();
            this.clickOnHeader.emit(this.headNav.mobileBar)
          }}>
            {/*иконка открытия мобильного меню*/}
          </div>
        </div>
      </nav>
    );
  }


  /**
   * open mobile block
   */
  public opMenu() {
    if (this.openMenu.id !== 'mobile_menu') {
      return this.openMenu.id = 'mobile_menu';
    } else {
      return this.openMenu.id = '';
    }
  }

  /**
   * open mobile block
   */
  public ThemeColor() {
    if (document.getElementById("header_backg_black")) {
      return this.class.id = '';
    } else if (document.getElementById("header_backg_white")){
      return this.class.id = 'navColor';
    }
  }

  /**
   * открытие формы обратной связи
   */
  public openFormContact(x) {
    if (x === '#contact_form') {
      return this.openForm.emit();
    }
  }

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
