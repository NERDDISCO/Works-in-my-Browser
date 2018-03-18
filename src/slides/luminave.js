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
    <h3>luminave</h3>
    <p>All the lights and visualization from a couple of minutes ago was operated by luminave</p>
    <p>A project by NERD DISCO to operate different kind of creative models</p>
    <p>modV, fivetwelve, Dekk, WebUSB-DMX-Controller</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Title>luminave</Title>
    </A>

  </Slide>
)
