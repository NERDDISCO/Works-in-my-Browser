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
    <h3>USB descriptors</h3>
    <p>A USB device is made out of many different descriptors. Each of them helps our computer to understand how the USB device works</p>
    <p>Device: basic information like USB version, vendor and product id</p>
    <p>Configuration: The device can have multiple configurations, like how the device is powered, maximum power consumption</p>
    <p>Interface: A configuration can have multiple interfaces, combines the endpoints into functional groups to perform a single feature of the device</p>
    <p>Endpoints: An interface can have multiple endpoints (types: control, interrupt, isochronous, bulk)</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>USB Descriptions</Subtitle>

      <LargeImage src="media/usb_configurations_interfaces_endpoints.svg"
                  alt="USB device with configurations, interfaces and endpoints"
                style={{height: 60 + "vh"}} />
    </A>

  </Slide>
)
