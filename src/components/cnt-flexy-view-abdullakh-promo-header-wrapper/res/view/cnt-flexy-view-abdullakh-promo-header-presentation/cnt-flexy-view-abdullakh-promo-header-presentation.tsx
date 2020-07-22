import {Component, ComponentInterface, Event, EventEmitter, h, Prop, State} from '@stencil/core';
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
   * клик по элементам компонента
   * */
  @Event() clickOnHeader: EventEmitter;

  /**
   * переменная для observe функции скрола
   * */
  headClass: HTMLElement;

  render() {
    return (
      <header class="header_backg_black" id="header_backg_black" ref={(el) => this.headClass = el}>
        <div class="icons_block">
          <Social arr={this.categories.socialIcon}/>
        </div>
        <div class="container h-100">
          <cnt-flexy-view-abdullakh-promo-header-nav headNav={this.categories.headNav}
                                                     social={this.categories.socialIcon}
                                                     onOpenForm={() => this.openForm()}
                                                     onHeaderTheme={(x) => this.headerTheme(x)}
          />
          <div class="author_block">
            <div class="author_name_block">
              <div class="author_name">
                <div class="loading_text_hidden">

                </div>
                <h1 onClick={() => this.clickOnHeader.emit(this.categories.authorName)}>
                  {this.categories.authorName}
                </h1>
              </div>
            </div>
            <div class="author_develop_info_block">
              <div class="loading_text_hidden">

              </div>
              <div class="author_develop_info" onClick={() => this.clickOnHeader.emit(this.categories.authorName)}>
                {this.categories.authorDevelop}
              </div>
            </div>
            <div class="author_btn_block mt-2" onClick={() => this.clickOnHeader.emit(event)}>
              <div class="loading_text_hidden">

              </div>
              {
                this.categories.btn.map((item) => <cnt-flexy-view-abdullakh-promo-animate-btn arr={item}
                                                                                              onOpenForm={() => this.openForm()}/>)
              }
            </div>
          </div>
          {
            this.popupComplited ? (
              <cnt-flexy-view-abdullakh-promo-about-me-section about={this.categories.formAboutMe}
                                                               onCloseForm={() => this.closeForm()}
              />
            ) : (
              ""
            )
          }
        </div>
        <a href={this.categories.workHref} class="link_go_to_next_block"
           onClick={() => this.clickOnHeader.emit(this.categories.workHref)}>
          <div class="link_next_text" onClick={() => this.clickOnHeader.emit(this.categories.work)}>
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
  public headerTheme(x) {
    if (this.headClass.id === "header_backg_black") {
      return (
        this.headClass.id = "header_backg_white",
        x
      )
    } else {
      return this.headClass.id = "header_backg_black",
        x
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
