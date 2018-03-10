import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Text} from '@dekk/text'
// import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Chapter} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'

const {Slide, A, B} = Chapter

const notes = (
  <Notes>
    <h3></h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Title>Thank You!</Title>
    </A>

    <B>
      <Subtitle>❤️❤️❤️❤️❤️❤️❤️❤️❤️</Subtitle>
    </B>

  </Slide>
)