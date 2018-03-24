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

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Custom Device</h3>
    <p>We have to create a device that is allowed to talk with out website</p>
    <p>The only custom hardware demo I could find was related to Arduino</p>
    <p>I never used an Arduino, because I was afraid of programming in C</p>
    <p>But that repository is a super good starting point</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Title>Custom Device</Title>

      <Fragment order={1}>
        <Subtitle>
          <a href="https://github.com/webusb/arduino">github.com/webusb/arduino</a>
        </Subtitle>
      </Fragment>
    </A>

  </Slide>
)