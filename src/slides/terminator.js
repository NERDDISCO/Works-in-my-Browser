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

// import terminator from '../media/terminator.jpg'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Terminator</h3>
    <p>Time traveling in Terminator was to change the past</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/terminator.webp)`} mixin="--slide-color: white">
    <Plugins.Data luminave={['COLOR RED']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Terminator</Uppercase></Title>
    </A>

  </Slide>
)
