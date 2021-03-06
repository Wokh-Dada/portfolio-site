import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {AbdullakhSectionAboutMe} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-section-about-me',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-section-about-me.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoSectionAboutMe implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() about: AbdullakhSectionAboutMe;

  /**
   *  close модального окна формы
   * */
  @Event() closeForm: EventEmitter;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
      <div class="about_me_wrapper_inner">
        <div class="giga_text_about" onClick={()=> this.clickOnHeader.emit(this.about.gigaText)}>
          {this.about.gigaText}
        </div>
        <div class="about_me_block_info_block">
          <div class="about_me_title">
            <h4 onClick={()=> this.clickOnHeader.emit(this.about.aboutMeTitle)}>
              {this.about.aboutMeTitle}
            </h4>
          </div>
          <div class="about_me_subtitle">
            <h5 onClick={()=> this.clickOnHeader.emit(this.about.aboutMeSubtitle)}>
              {this.about.aboutMeSubtitle}
            </h5>
          </div>
          <div class="about_me_text">
            <p innerHTML={this.about.aboutMeInfo} onClick={()=> this.clickOnHeader.emit(this.about.aboutMeInfo)}>

            </p>
          </div>
          <div class="my_skills">
            <div class="my_skills_icon">

            </div>
          </div>
        </div>
      </div>
    );
  }

}
