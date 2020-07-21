import {Component, ComponentInterface, h, Prop, State} from '@stencil/core';
import {AbdullakhHeaderPresentation} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-header-presentation',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-header-presentation.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoHeaderPresentation implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() categories: AbdullakhHeaderPresentation;

  /**
   * boolean значение для вывода компонента form-communication
   */
  @State() popupComplited: boolean;

  /**
   * переменная для observe функции скрола
   * */
  headClass: HTMLElement;

  render() {
    console.log(this.headClass)
    return (
      <header class="header_backg_black">
        <div class="icons_block">
          <Social arr={this.categories.socialIcon}/>
        </div>
        <div class="container h-100">
          <cnt-flexy-view-abdullakh-promo-header-nav headNav={this.categories.headNav}
                                                     social={this.categories.socialIcon}/>
          <div class="author_block">
            <div class="author_name_block">
              <div class="author_name">
                <div class="loading_text_hidden">

                </div>
                <h1>
                  {this.categories.authorName}
                </h1>
              </div>
            </div>
            <div class="author_develop_info_block">
              <div class="loading_text_hidden">

              </div>
              <div class="author_develop_info">
                {this.categories.authorDevelop}
              </div>
            </div>
            <div class="author_btn_block mt-2">
              <div class="loading_text_hidden">

              </div>
              {this.categories.btn.map((item) => <cnt-flexy-view-abdullakh-promo-animate-btn arr={item}
                                                                                             onOpenForm={() => this.openForm()}/>)}
            </div>
          </div>
          {this.popupComplited ? (
            <cnt-flexy-view-abdullakh-promo-about-me-section about={this.categories.formAboutMe}
                                                             onCloseForm={() => this.closeForm()}
            />
          ) : (
            ""
          )}
        </div>
        <a href={this.categories.workHref} class="link_go_to_next_block">
          <div class="link_next_text">
            {this.categories.work}
          </div>
          <span class="arrow-down">

          </span>
        </a>
      </header>
    );
  }

  /**
   * Вызов модального окна формы
   */
  public openForm() {
    this.popupComplited = true;
    document.body.className = 'modalOpen'
  }

  /**
   * Закрытие модального окна формы
   */
  public closeForm() {
    this.popupComplited = false;
    document.body.className = ''
  }

  /**
   *
   */
  public headerTheme() {
    if (this.headClass.className === "header_backg_black") {
      return alert()
    }
  }

}

/*
* компонентная функция для вывода элементов header-social-icon
 */
const Social = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-promo-header-social-icon icon={item}/>
    );
  })
}
