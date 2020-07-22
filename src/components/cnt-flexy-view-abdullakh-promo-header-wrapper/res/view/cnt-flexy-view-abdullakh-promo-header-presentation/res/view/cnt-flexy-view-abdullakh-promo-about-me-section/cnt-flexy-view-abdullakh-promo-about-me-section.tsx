import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {AbdullakhAboutMeSection} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-about-me-section',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-about-me-section.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoAboutMeSection implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() about: AbdullakhAboutMeSection;

  /**
   *  Вызов модального окна формы
   * */
  @Event() closeForm: EventEmitter;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <section class="container contact_form_outerBlock" id="contact_form">
        <div class="contact_form">
          <cnt-flexy-view-abdullakh-promo-form-close/>
          <div class="contact_form_wrapper">
            <FormAbout arr={this.about.contactForm}/>
          </div>
          <div class="about_me_wrapper">
            <AboutMe arr={this.about.aboutMe}/>
          </div>
        </div>
      </section>
    );
  }

}

/*
* компонентная функция для вывода элементов компонента AboutMeSectionForm
 */
const FormAbout = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-promo-section-form contactForm={item}/>
    );
  })
}

/*
* компонентная функция для вывода элементов компонента AboutMeSection
 */
const AboutMe = (props) => {
  return props.arr.map((item) => {
    return (
      <cnt-flexy-view-abdullakh-promo-section-about-me about={item}/>
    );
  })
}
