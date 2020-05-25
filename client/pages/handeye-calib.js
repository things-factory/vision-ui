import { html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

import '../views/wizard-view'

import './handeye-calib/global-setting'
import './handeye-calib/object-detection-setting'
import './handeye-calib/frame-name-setting'
import './handeye-calib/calibrate-operation'

class HandEyeCalibration extends connect(store)(PageView) {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      wizard-view {
        flex: 1;
      }
    `
  }

  static get properties() {
    return {}
  }

  render() {
    return html`
      <h2>Hand-Eye Calibration</h2>
      <h3>Configure the position and orientation of your 3D sensors to work with Operato</h3>

      <wizard-view>
        <handeye-calib-global-setting name="global-setting" title="Global Setting"></handeye-calib-global-setting>
        <handeye-calib-object-detection-setting
          name="object-detection-setting"
          title="Object Detection Setting"
        ></handeye-calib-object-detection-setting>
        <handeye-calib-frame-name-setting
          name="frame-name-setting"
          title="Frame Name Setting"
        ></handeye-calib-frame-name-setting>
        <handeye-calib-operation
          name="operation"
          title="Calibration Operation"
          .done=${() => this.done()}
        ></handeye-calib-operation>
      </wizard-view>
    `
  }

  done() {
    console.log('done....')

    this.renderRoot.querySelector('wizard-view').gotoStep(1)
  }
}

customElements.define('handeye-calib', HandEyeCalibration)
