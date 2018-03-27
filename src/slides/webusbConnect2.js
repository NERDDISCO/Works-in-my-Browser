import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize, Code2} from '../components'


const {Slide, A} = Main

import {select} from '../utils'

const ranges = [
  [ // USB connection established
    select([1, 0], [3, 0])
  ],
  [ // Receive data
    select([3, 0], [8, 0])
  ],
  [ // Receive error
    select([9, 0], [14, 0])
  ],
  [ // error
    select([15, 0], [19, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `connect(port) {
  // USB connection is established
  port.connect().then(() => {
    // Receive data
    port.onReceive = data => {
      const textDecoder = new TextDecoder()
      console.log(textDecoder.decode(data))
    }

    // Receive error
    port.onReceiveError = error => {
      // USB is disconnected
      console.log(error)
    }

  }, error => {
    // USB is disconnected
    console.error(error)
  })
}`

const notes = (
  <Notes>
    <h3>Connect to USBPort</h3>
    <p>After selecting a USB device, the connect function is triggered on the selected port</p>
    <p>Then we execute connect, which is a method from USBPort (which is a helper to work with USB)</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebUsbConnection.js</Subtitle>

      <Code2 ranges={ranges} options={codeOptions}>
          {code}
      </Code2>

    </A>

  </Slide>
)
