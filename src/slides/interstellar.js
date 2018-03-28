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
    <h3>Interstellar</h3>
    <p>Tries to visualize the 4th dimension</p>
    <p>How you can interact inbetween dimensions</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/interstellar.gif)`} mixin="--slide-color: white">
    <Plugins.Data luminave={['0position 1', 'color blue']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Interstellar</Uppercase></Title>
    </A>

  </Slide>
)
