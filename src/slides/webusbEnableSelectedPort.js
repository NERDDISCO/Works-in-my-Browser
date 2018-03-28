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
  [ // open session
    select([2, 0], [7, 0])
  ],
  [ // Select #1 configuration
    select([8, 0], [14, 0])
  ],
  [ select([15, 0], [17, 0])] // access to interface #2
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `  // Request access to the USB device
  navigator.usb.requestDevice({ filters })
    // Open session to selected USB device
    .then(selectedDevice => {
      device = selectedDevice
      return device.open()
    })

    // Select #1 configuration if not automatially set by OS
    .then(() => {
      if (device.configuration === null) {
        return device.selectConfiguration(1)
      }
    })

    // Get exclusive access to the #2 interface
    .then(() => device.claimInterface(2))

    // We are ready to receive data
    .then(() => device.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': 0x22,
      'value': 0x01, // Endpoint: 1
      'index': 0x02 // Interface: #2
    }))

    // Receive 512 bytes on Endpoint 5
    .then(() => device.transferIn(5, 512))

    .then(({ data }) => {
      let decoder = new TextDecoder()
      console.log('Received: ' + decoder.decode(data))
    })

    .catch(error => {
      console.log(error)
    })
}`

const notes = (
  <Notes>
    <h3>Enable WebUSB</h3>
    <p>Connect to the selectedPort and open a session to the device</p>
    <p>Use configuration #1 if no configuration was automatially applied by the Operating System</p>
    <p>Get exclusive access to interface #2</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebUsbConnection.js</Subtitle>

      <Code2 ranges={ranges} options={codeOptions} order={-1}>
          {code}
      </Code2>
    </A>

  </Slide>
)
