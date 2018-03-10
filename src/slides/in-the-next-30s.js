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
import {SuperTimer} from '../components'

const {Slide, A, B} = Cover

const notes = (
  <Notes>
    <h3></h3>
    <p>In 30s I will clap my hands</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Title>
        <SuperTimer isPlaying={true} timer="0.5"></SuperTimer>
        {' '}
      </Title>
    </A>

    <B>
      <Fragment order={1}>
        <Subtitle>I will clap my hands</Subtitle>
      </Fragment>
      <Fragment order={2}>
        <Subtitle>It will happen</Subtitle>
      </Fragment>
    </B>

  </Slide>
)
