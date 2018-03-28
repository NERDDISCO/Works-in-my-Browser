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

// import interstellar from '../media/interstellar.jpg'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Bill & Ted's: Excellent Adventure</h3>
    <p>Bill & Ted are traveling in one dimension</p>
    <p>They enjoy talking with themselfes a helping each other out in the different timelines</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/excellent_adventure.webp)`} mixin="--slide-color: white">
    <Plugins.Data luminave={['0position 1', 'color green']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Bill & Ted's Excellent Adventure</Uppercase></Title>
    </A>

  </Slide>
)
