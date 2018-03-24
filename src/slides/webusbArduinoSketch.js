import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Arduino Sketch</h3>
    <p>To use the DMX512 shield</p>
    <p>Register the Arduino to whitelist the URL + port</p>
    <p>Receive messages from the browser via WebUSB</p>
    <p>Send that data into DMX universe</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <img src="media/arduino_ide_webusb_sketch.png"
                  alt="Arduino IDE: Sketch for WebUSB & DMX512"
                 style={{height: 105 + "vh"}} />
    </A>

  </Slide>
)
