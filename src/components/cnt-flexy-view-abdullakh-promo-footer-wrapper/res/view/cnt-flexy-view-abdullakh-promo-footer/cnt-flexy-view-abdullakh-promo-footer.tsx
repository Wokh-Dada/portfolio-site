import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {AbdullakhFooter} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-footer',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-footer.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoFooter implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() categories : AbdullakhFooter;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnFooter: EventEmitter;

  render() {
    return (
      <footer class="container-fluid footer">
        <div class="container">
          <div class="footer_nav_wrapper">
            <div class="footer_logo_wrapper">
              <div class="footer_logo" innerHTML={this.categories.logoname}  onClick={()=> this.clickOnFooter.emit(this.categories.logoname)}>

              </div>
            </div>
            <div>
              <div class="footer_nav_menu_wrapper">
                <FooterNav arr={this.categories.nav}/>
              </div>
            </div>

            <div class="footer_copyright" onClick={()=> this.clickOnFooter.emit(this.categories.copyright)}>
              {this.categories.copyright}
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

/*
* компонентная функция для вывода элементов footer-nav
 */
const FooterNav = (props) => {
  return props.arr.map((item) => {
    return (
      <div class="footer_nav_menu_wrapperInner">
        <cnt-flexy-view-abdullakh-promo-footer-nav arr={item}/>
      </div>

    );
  })
}
