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
    <h3>Back to the Future</h3>
    <p>Travling into the past and the future, but in the same dimension</p>
    <p>Marty and the Doc want to avoid interacting with their own selfs in a different timeline to not change the future</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/backtothefuture.webp)`} mixin="--slide-color: white">
    <Plugins.Data luminave={['0position 1', 'color green', 'movement 1']}></Plugins.Data>
    {notes}
    <A>
      <Title><Uppercase>Back To The Future</Uppercase></Title>
    </A>

  </Slide>
)
