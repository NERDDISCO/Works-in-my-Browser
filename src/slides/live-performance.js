import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle} from '@dekk/text'
// import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Cover} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

const {Slide, A, B} = Cover

const notes = (
  <Notes>
    <h3>Live Performance</h3>
    <p>A video of the future</p>
  </Notes>
)

export default (
  <Slide key={uuid()} luminave={[]}>
    {notes}

    <A>
      <Title>Live Performance</Title>
    </A>
    <B>
      <Subtitle>Add video / picture here</Subtitle>
    </B>

  </Slide>
)
