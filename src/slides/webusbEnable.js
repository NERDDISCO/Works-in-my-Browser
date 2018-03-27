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
  [ // enable
    select([0, 0], [1, 0])
  ],
  [ // filter
    select([1, 0], [6, 0])
  ],
  [ // request access
    select([7, 0], [9, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `enable() {
  // Only request the port for specific devices
  const filters = [
    // Arduino LLC (10755), Leonardo ETH (32832)
    { vendorId: 0x2a03, productId: 0x8040 }
  ]

  // Request access to the USB device
  navigator.usb.requestDevice({ filters })
    // Create a new USB device
    .then(device => new USBPort({ device }))

    // Connect to the selected USB device
    .then(selectedPort => {
      connect(selectedPort)
    })

    .catch(error => {
      console.error(error)
    })
}`

const notes = (
  <Notes>
    <h3>Enable WebUSB</h3>
    <p>enable() function has to be triggered by the user</p>
    <p>In order to be able to interact with the USB device</p>
    <p>Set filters to only get the elements that we want and not every element that is attachted to the computer</p>
    <p>Request access</p>
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
