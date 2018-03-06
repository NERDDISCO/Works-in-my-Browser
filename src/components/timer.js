import React, {cloneElement} from 'react'
import PropTypes from 'prop-types'
import Timer, {renderCountdown} from '@dekk/countdown'

export default class SuperTimer extends Timer {
  /**
   * @private
   */
  static get propTypes() {
    return {
      timer: PropTypes.number.isRequired,
      timerWarning: PropTypes.number,
      isPlaying: PropTypes.bool
    }
  }

  /**
   * @private
   */
  static get defaultProps() {
    return {
      timer: 5,
      timerWarning: 0
    }
  }

  /**
    * @param {Object} props
    *   The properties
    * @param {number} props.timer
    * @param {number} [props.timerWarning=0]
    *
    */
   constructor(props) {
     super(props)
   }

   /**
    * @private
    * @return {Wrapper}
    *   The entire Deck inside a Wrapper
    */
   render() {
     const countdown = {
       isRunning: this.props.isPlaying,
       end: this.props.timer,
       timerWarning: this.props.timerWarning || 0,
       render: renderCountdown
     }

     return (
       <Timer {...countdown} />
     )
   }
}
