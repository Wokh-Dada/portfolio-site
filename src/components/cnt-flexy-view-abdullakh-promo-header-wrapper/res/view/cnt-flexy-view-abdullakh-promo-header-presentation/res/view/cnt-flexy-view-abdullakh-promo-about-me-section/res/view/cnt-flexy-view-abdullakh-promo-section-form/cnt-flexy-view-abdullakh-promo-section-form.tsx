import {Component, ComponentInterface, EventEmitter, h, Prop, Event} from '@stencil/core';
import {AbdullakhSectionForm} from "./interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-section-form',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-section-form.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoSectionForm implements ComponentInterface {
  /**
   * объект с массивом меню и string для подкомпонентов
   * */
  @Prop() contactForm: AbdullakhSectionForm;

  /**
   *  close модального окна формы
   * */
  @Event() closeForm: EventEmitter;

  render() {
    return (
      <div class="contact_form_innerBlock">
        <div class="giga_text_contact">
          {this.contactForm.gigaText}
        </div>
        <div class="contact_form_wrapper_inner">
          <div class="contact_form_title">
            <h4>
              {this.contactForm.contactFormTitle}
            </h4>
          </div>
          <div class="contact_form_subtitle">
            <p>
              {this.contactForm.contactFormSubtitle}
            </p>
          </div>
          <div>
            <form action="">
              <div class="contact_form_input_required">
                <label class="contact_form_label">
                  {this.contactForm.name}
                </label>
                <input type="text"/>

              </div>
              <div class="contact_form_input_required">
                <label class="contact_form_label">
                  {this.contactForm.email}
                </label>
                <input type="text"/>

              </div>
              <div class="contact_form_input_required">
                <label class="contact_form_label">
                  {this.contactForm.message}
                </label>
                <textarea name="message"/>

              </div>
              <div class="contact_form_btn_block">
                {
                  this.contactForm.btn.map((item) => <cnt-flexy-view-abdullakh-promo-animate-btn arr={item}/>)
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}
