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
import {ViewportSize} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <p>Open a connection to the device</p>
    <p>When ok: Select the first configuration if the OS didn't do this already</p>
    <p>There can be <a href="http://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors">multiple configurations</a> for every USB device and they can control:
      <ul>
        <li>power consumption</li>
        <li>self or bus powered</li>
        <li>amount of interfaces</li>
      </ul>
    </p>
    <p>When ok: Claim interface, so that only you can interact with it. Interface = One of the functionalities that the USB device provides</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#f8f8ff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>USBPort</Subtitle>
      <ViewportSize>
        <Code language='arduino' style={colorSchemes.docco}>
{`connect() {
  return device.open()

  .then(() => {
    if (device.configuration === null) {
      // Select #1 USB configuration
      return device.selectConfiguration(1)
    }
  })

  // Get exclusive access to the #2 interface
  .then(() => device.claimInterface(2))

  // Declare that we are ready to receive data
  .then(() => device.controlTransferOut({
    'requestType': 'class',
    'recipient': 'interface',
    'request': 0x22,
    'value': 0x01, // Endpoint: 2
    'index': 0x02 // Interface #2
  }))

  .then(() => {
    read()
  })
}`}
        </Code>
      </ViewportSize>
    </A>

  </Slide>
)
