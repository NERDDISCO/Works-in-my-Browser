/* global window */
import {Component} from 'react'
import {isNumeric} from '@dekk/utils'

/**
 * @public
 */
export default class Luminave extends Component {
  /**
   * @private
   */
  static get defaultProps() {
    return {
      channel: '@luminave'
    }
  }

  /**
   * @public
   */
  constructor(props) {
    super(props)
    this.handleStore = this.handleStore.bind(this)
  }

  /**
   * @private
   */
  componentWillMount() {
    if (this.props.subscribe) {
      const oldValue = window.localStorage.getItem(this.props.channel)
      try {
        this.handleMessage(JSON.parse(oldValue))
      } finally {
        window.addEventListener('storage', this.handleStore)
      }
    }
  }

  /**
   * Unsubscribe when unmounted
   * @private
   */
  componentWillUnmount() {
    if (this.props.subscribe) {
      window.removeEventListener('storage', this.handleStore)
    }
  }

  /**
   * When the props change we need to publish the changes.
   * To prevent flooding we only publish when the slideIndex or fragmentIndex
   * change.
   * @private
   */
  componentWillReceiveProps({showFrame, publish}) {
    if (publish) {
      if (showFrame !== this.props.showFrame) {
        const message = {
          showFrame
        }
        window.localStorage.setItem(this.props.channel, JSON.stringify(message))
      }
    }
  }

  /**
   * Sends the message to localStorage after confirming a difference
   * between the old value and the new value
   * @private
   */
  handleStore({key, oldValue, newValue}) {
    if (key === this.props.channel && oldValue !== newValue) {
      this.handleMessage(JSON.parse(newValue))
    }
  }

  /**
   * @private
   * @param {String} message
   *   The message that has been sent
   */
  handleMessage(message) {
    // Only allow messages of type `object`
    if (typeof message === 'object' && message) {
      const {showFrame} = message
      this.props.handleFrame(showFrame)
    }
  }

  /**
   * @private
   */
  render() {
    return null
  }
}
