import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Uppercase} from '@dekk/text'
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
    <h3></h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()} light={["COLOR Rainbow"]}>
    {notes}

    <A>
      <Title>
        <Uppercase>Try All The Things</Uppercase>
      </Title>
    </A>

    <B>
      <Fragment order={1}>
        <Subtitle>
          <Uppercase>🔥 Really 🔥</Uppercase>
        </Subtitle>
      </Fragment>

      <Fragment order={2}>
        <Subtitle>
          <Uppercase>🦄 Everything 🦄</Uppercase>
        </Subtitle>
      </Fragment>
    </B>

  </Slide>
)
