/* global window */
import {Component} from 'react'
import {isNumeric} from '@dekk/utils'
import Sockette from 'sockette'

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
    this.handleSlide = this.handleSlide.bind(this)

    this.connected = false
  }

  /**
   * @private
   */
  componentDidMount() {
    if (this.props.subscribe) {

      this.ws = new Sockette('ws://localhost:3001/dekk', {
        timeout: 5e3,
        maxAttempts: 500,
        onopen: e => {
          this.connected = true
        },
        onmessage: e => console.log('Received:', e),
        onreconnect: e => console.log('Reconnecting...', e),
        onmaximum: e => console.log('Stop Attempting!', e),
        onclose: e => console.log('Closed!', e),
        onerror: e => console.log('Error:', e)
      })

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
  * Send data rom the slide to luminave
  */
 handleSlide(slideIndex) {

    if (this.connected) {
      // slides were passed in so we can read the
      // properties
      const {slides = []} = this.props
      const slide = slides[slideIndex]

      if (slide) {
        // We set luminave data on slides
        // so now e can use it.
        const {light = null} = slide.props
        if (light !== null) {
          this.ws.send(JSON.stringify(light))
        }
      }
    }
  }

  /**
   * Check for changes
   **/
  componentDidUpdate(newProps) {
    // When the slide changes we want to trigger luminave
    if(newProps.slideIndex !== this.props.slideIndex) {
      this.handleSlide(this.props.slideIndex)
    }
  }

  /**
   * @private
   */
  render() {
    return null
  }
}
