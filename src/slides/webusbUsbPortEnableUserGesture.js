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
import {LargeImage} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>How does WebUSB work in the browser?</h3>
    <p>USB configuration: How is the device is powered? What is its maximum power consumption? How many interfaces does it have?</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#f8f8ff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LargeImage src="media/webusb_arduino_pair.png"
                  alt="Pair Arduino using WebUSB" />
    </A>

  </Slide>
)
