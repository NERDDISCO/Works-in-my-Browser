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
// import {SuperTimer} from '../components'
import {LargeImage} from '../components'
import novationLaunchpadMini from '../media/novationLaunchpadMini.jpg'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Novation LaunchPad Mini</h3>
    <p>I have a Novation LaunchPad, which is a MIDI controller that can be attachted over USB to the computer</p>
    <p>It has 80 buttons and every one can be identified using the MIDI note</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LargeImage src={novationLaunchpadMini}
                  alt="Novation LaunchPad Mini" />
    </A>

  </Slide>
)
