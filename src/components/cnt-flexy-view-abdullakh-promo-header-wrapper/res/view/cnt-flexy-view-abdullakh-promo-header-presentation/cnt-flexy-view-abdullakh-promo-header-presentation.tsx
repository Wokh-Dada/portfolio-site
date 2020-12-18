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

  /**
   * переменная для observe функции скрола
   * */
  figureLeft: HTMLElement;

  /**
   * переменная для observe функции скрола
   * */
  figureRight: HTMLElement;

  render() {
    return (
      <header class="header_backg_black" id="header_backg_black" ref={(el) => this.headClass = el} onMouseMove={()=> {
        this.StartMatrix(event);
        console.log(event)
      }}>
        <div class="svgMouseEffect">
          <div class="svgGoLeft" ref={(el) => this.figureLeft = el}>
            {/**/}
            <span style={{left: '44%', top: '18%', transform: 'rotate(180deg)'}} class="yellowTriangle">
              <svg id="triangle" width="25px" height="25px">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="25.675"
                     height="22.236"
                     viewBox="0 0 25.675 22.236"
                >
                  <path fill="none"
                        stroke="#ff0"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
                  />
                </svg>
              </svg>
            </span>
            {/*  */}
            <span style={{left: '70%', top: '20%'}} class="OrangeTriangle">
              <svg id="triangle" width="25px" height="25px">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="25.675"
                     height="22.236"
                     viewBox="0 0 25.675 22.236"
                >
                  <path fill="none"
                        stroke="#f06449"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
                  />
                </svg>
              </svg>
            </span>
            {/*  */}
            <span style={{left: '0%', top: '80%', transform: 'rotate(45deg)'}} class="AquaSemiCircle">
              <svg id="semiCircle">
                <path fill="none"
                      stroke="aqua"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"
                />
              </svg>
            </span>
            {/**/}
            <span style={{left: '90%', top: '70%'}} class="YellowSemiCircle">
              <svg id="semiCircle">
                <path fill="none"
                      stroke="#ff0"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"
                />
              </svg>
            </span>
            {/**/}
            <span style={{left: '50%', bottom: '-20%', transform: 'rotate(45deg)'}} class="OrangeSpring">
              <svg id="spring">
                <path fill="none"
                      stroke="#f06449"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      d="M9.945 34.614S1.46 31.38 1.5 23.92s11.73-4.797 11.73-4.797S3.82 16.708 4.18 8.77s12.784-7.255 12.784-7.255"
                />
              </svg>
            </span>
            {/**/}
            <span style={{left: '85%', bottom: '-12%'}} class="AquaLineBottom">
              <svg id="line">
                <path fill="none"
                      stroke="aqua"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      d="M4.92 2.514L21.964 19.56">

                </path>
              </svg>
            </span>
            {/*  */}
            <span style={{left: '20%', top: '10%', transform: 'rotate(65deg)'}} class="AquaLineTop">
              <svg id="line">
                <path fill="none"
                      stroke="aqua"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      d="M4.92 2.514L21.964 19.56">

                </path>
              </svg>
            </span>
            {/*  */}
          </div>
          <div class="svgGoRight" ref={(el) => this.figureRight = el}>
            {/**/}
            <span style={{left: '98%', top: '20%', transform: 'rotate(45deg)'}} class="AquaTriangle">
              <svg id="triangle" width="25px" height="25px">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="25.675"
                     height="22.236"
                     viewBox="0 0 25.675 22.236"
                >
                  <path fill="none"
                        stroke="aqua"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
                  />
                </svg>
              </svg>
            </span>
            {/*  */}
            <span style={{left: '90%', top: '70%', transform: 'rotate(180deg)'}} class="AquaSemiCircle">
              <svg id="semiCircle">
                <path fill="none"
                      stroke="aqua"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"
                />
              </svg>
            </span>
            {/**/}
            <span style={{left: '10%', bottom: '-15%', transform: 'rotate(85deg)'}} class="YellowLineBottom">
              <svg id="line">
                <path fill="none"
                      stroke="#ff0"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      d="M4.92 2.514L21.964 19.56">

                </path>
              </svg>
            </span>
            {/*  */}
          </div>
        </div>
        <div class="logoBack" innerHTML={this.categories.logoBack}>
          {/*logo background*/}
        </div>
        <div class="icons_block">
          <Social arr={this.categories.socialIcon}/>
        </div>
        <div class="container h-100">
          <cnt-flexy-view-abdullakh-promo-header-nav
            headNav={this.categories.headNav}
            social={this.categories.socialIcon}
            onOpenForm={() => this.openForm()}
            onHeaderTheme={() => this.headerTheme()}
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
                this.categories.btn.map((item) =>
                  <cnt-flexy-view-abdullakh-promo-animate-btn
                    arr={item}
                    onOpenForm={() => this.openForm()}
                  />)
              }
            </div>
          </div>
          {
            this.popupComplited ? (
              <cnt-flexy-view-abdullakh-promo-about-me-section about={this.categories.formAboutMe}
                                                               onCloseForm={() => this.closeForm()}
              />) : ("")
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

  componentDidLoad() {
    // document.addEventListener('mousemove', StartMatrix);

    // function StartMatrix(event) {
    //   const header = document.querySelector('header');
    //   const svgGoLeft = this.querySelector('.svgGoLeft');
    //   const svgGoRight = this.querySelector('.svgGoRight');
    //   const halfHeight = header.clientHeight / 2;
    //   const halfWidth = header.clientWidth / 2;
    //   svgGoLeft.style.transform = 'matrix(-1, 0, 0, -1,  ' + -(event.offsetY - halfHeight) / 20 + ',  ' + (event.offsetX - halfWidth) / 20 + ')';
    //   svgGoRight.style.transform = 'matrix(-1, 0, 0, -1,  ' + (event.offsetY - halfHeight) / 20 + ',  ' + -(event.offsetX - halfWidth) / 20 + ')';
    // }
  }

  private StartMatrix(event) {
    const header = document.querySelector('header');
    const svgGoLeft = this.figureLeft;
    const svgGoRight = this.figureRight;
    const halfHeight = header.clientHeight / 2;
    const halfWidth = header.clientWidth / 2;
    svgGoLeft.style.transform = 'matrix(-1, 0, 0, -1,  ' + -(event.screenY - halfHeight) / 20 + ',  ' + (event.screenX - halfWidth) / 20 + ')';
    svgGoRight.style.transform = 'matrix(-1, 0, 0, -1,  ' + (event.screenY - halfHeight) / 20 + ',  ' + -(event.screenX - halfWidth) / 20 + ')';
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
    if (this.headClass.id === "header_backg_black") {
      return (
        this.headClass.id = "header_backg_white"
        // x
      )
    } else {
      return this.headClass.id = "header_backg_black"
      // x
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
