import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

class HandEyeCalibrationObjectDetectionSetting extends connect(store)(LitElement) {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
    `
  }

  static get properties() {
    return {
      settings: Object
    }
  }

  render() {
    return html`
      <h3>object detection setting</h3>

      <div>
        image topic
        <select>
          <option>AAA</option>
          <option>BBB</option>
        </select>
      </div>

      <div>
        camera topic
        <select>
          <option>AAA</option>
          <option>BBB</option>
        </select>
      </div>

      <div>
        calibration board
        <select>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
        </select>
      </div>
      <div>
        square size
        <input type="number" />
      </div>
      <div>
        marker size
        <input type="number" />
      </div>
      <div>
        seperation
        <input type="number" />
      </div>
    `
  }
}

customElements.define('handeye-calib-object-detection-setting', HandEyeCalibrationObjectDetectionSetting)
