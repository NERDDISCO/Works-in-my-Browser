import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB</h3>
    <p>Use USB directly from the browser</p>
    <p>If you want to really understand how USB works, I recommend reading "USB in a NutShell". Really helped me to get the concepts into my head.</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="WebUSB"/></Title>
      <Subtitle><a href="https://wicg.github.io/webusb">wicg.github.io/webusb</a></Subtitle>
      <Fragment order={1}><Subtitle><a href="http://www.beyondlogic.org/usbnutshell/">USB in a NutShell</a></Subtitle></Fragment>
    </A>

  </Slide>
)
