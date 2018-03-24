import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {CodeJs} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>What is happening?</h3>
    <p>So what exactly is happening?</p>
  </Notes>
)

export default (
  <Slide key={uuid()} light={["JSFest_Static", "COLOR GREEN"]}>
    {notes}

    <A>
      <Title>What is happening?</Title>
      <img src="media/dmx512_controller_communication_webusb.svg"
                  alt="WebUSB DMX Controller communication"
                  style={{height: 60 + "vh"}} />
    </A>

  </Slide>
)
