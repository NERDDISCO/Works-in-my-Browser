import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>USB explained</h3>
    <p>We have an USB device</p>
    <p>The device can have multiple configurations, we have to choose one: device.selectConfiguration</p>
    <p>A configuration can have multiple interfaces, we have to claim one: device.claimInterface</p>
    <p>An interface can have multiple endpoints, for example to send data from the USB device to the browser: transferIn on Endpoint 4</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>USB</Subtitle>

      <LargeImage src="media/usb_configurations_interfaces_endpoints.svg"
                  alt="USB device with configurations, interfaces and endpoints"
                style={{height: 60 + "vh"}} />
    </A>

  </Slide>
)
