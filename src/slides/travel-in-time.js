import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Uppercase} from '@dekk/text'
// import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>We can Travel in Time</h3>
    <p>Like we did before, but instead of only predicting the future, we will jump into the future</p>
    <p>But where do we jump to?</p>
    <p>Let's find out</p>
  </Notes>
)

export default (
  <Slide key={uuid()} luminave={[]}>
    {notes}

    <A>
      <Title><Uppercase>We can Travel in Time</Uppercase></Title>
    </A>

  </Slide>
)
