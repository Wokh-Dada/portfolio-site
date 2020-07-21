import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-animate-btn',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-animate-btn.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoAnimateBtn implements ComponentInterface {
  @Prop() arr: any;

  /**
   *  Вызов модального окна формы
   * */
  @Event() openForm: EventEmitter;


  render() {
    return (
      <div class="author_btn_block">
        <div class="author_btn_wrapper">
          <button class="author_btn" onClick={() => this.openForm.emit()}>
            {
              this.arr.btnComplited ?
                <a href={this.arr.btnHref} target="_blank">
                  {this.arr.btnText}
                </a>:
                this.arr.btnText
            }

          </button>
          <div class="buttonIcon" innerHTML={this.arr.btnSvg}>

          </div>
        </div>
      </div>
    );
  }

}