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
    <p>Infinite universes, he has to find a way to contact the 3th dimension</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/backtothefuture.webp)`} mixin="--slide-color: white">
    <Plugins.Data luminave={['COLOR GREEN']}></Plugins.Data>
    {notes}
    <A>
      <Title><Uppercase>Back To The Future</Uppercase></Title>
    </A>

  </Slide>
)
