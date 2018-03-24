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
    <h3>Works in my Browser</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#eec924" mixin="--slide-color: #fcfcfc;">
    {notes}

    <A>
      <Title>
         <Uppercase>Works in my Browser</Uppercase>
       </Title>

      <img src="media/JSfest2018_logo.png"
              alt="JS Fest 2018 Logo" />
    </A>

  </Slide>
)
