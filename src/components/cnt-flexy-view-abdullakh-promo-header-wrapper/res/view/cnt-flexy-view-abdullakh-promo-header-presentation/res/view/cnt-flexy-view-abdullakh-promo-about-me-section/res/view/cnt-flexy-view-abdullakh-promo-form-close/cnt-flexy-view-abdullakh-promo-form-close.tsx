import {Component, ComponentInterface, Event, EventEmitter, h} from '@stencil/core';


@Component({
  tag: 'cnt-flexy-view-abdullakh-promo-form-close',
  styleUrl: 'cnt-flexy-view-abdullakh-promo-form-close.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAbdullakhPromoFormClose implements ComponentInterface {
  /**
   * Закрытие модального окна формы
   */
  @Event() closeForm: EventEmitter;

  /**
   * Закрытие модального окна формы
   */
  @Event() opMenu: EventEmitter;

  /**
   * клик по элементам компонента
   * */
  @Event() clickOnHeader: EventEmitter;

  render() {
    return (
        <div class="close" onClick={() => {
          this.closeForm.emit();
          this.opMenu.emit();
          this.clickOnHeader.emit(event);
        }}>
          <span>

          </span>
          <span>

          </span>
        </div>
    );
  }

}

