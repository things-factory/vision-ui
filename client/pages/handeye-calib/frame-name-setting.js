import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

class HandEyeCalibrationFrameNameSetting extends connect(store)(LitElement) {
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
        sensor frame
        <select>
          <option>AAA</option>
          <option>BBB</option>
        </select>
      </div>

      <div>
        object frame
        <select>
          <option>AAA</option>
          <option>BBB</option>
        </select>
      </div>

      <div>
        end-effector frame
        <select>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
        </select>
      </div>
      <div>
        robot base frame
        <select>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
          <option>aruco board 5x7</option>
        </select>
      </div>
    `
  }
}

customElements.define('handeye-calib-frame-name-setting', HandEyeCalibrationFrameNameSetting)
