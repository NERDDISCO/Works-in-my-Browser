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
    <p>Travel in the same dimension</p>
    <p>Different versions in time are talking with Bill & Ted</p>
    <p>In this scene Bill & Ted meet a future version of each other. They ask: What number we have in our head? And they say: 69, dudes</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/excellent_adventure.webp)`} mixin="--slide-color: white">
    <Plugins.Data luminave={['COLOR GREEN']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Bill & Ted's Excellent Adventure</Uppercase></Title>
    </A>

  </Slide>
)
