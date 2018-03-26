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
    <h3>Disconnect</h3>
    <p>Disconnect from the USB device</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>USBPort</Subtitle>
      <ViewportSize>
        <Code language='arduino' style={colorSchemes.docco}>
{`disconnect() {
  // Declare that we don't want to receive data anymore
  return device.controlTransferOut({
    'requestType': 'class',
    'recipient': 'interface',
    'request': 0x22,
    'value': 0x00, // Endpoint: 1
    'index': 0x02 // Interface #2
  }).
  then(() => device.close())
}`}
        </Code>
      </ViewportSize>
    </A>

  </Slide>
)
