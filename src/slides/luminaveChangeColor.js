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

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>luminave</h3>
    <p>change the color to red</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="red" mixin="--slide-color: white">
    <Plugins.Data luminave={['COLOR RED']}></Plugins.Data>
    {notes}

    <A>
    </A>

  </Slide>
)
