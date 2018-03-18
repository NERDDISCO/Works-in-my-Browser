import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Text} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Grid} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

const {Slide, A, B, C, D} = Grid

const notes = (
  <Notes>
    <h3>Time Travel Movies</h3>
    <p>Terminator</p>
    <p>Back to the Future</p>
    <p>Butterfly Effect</p>
    <p>Klick</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Fragment fit order={1}>
        <FitImage
          src="http://placehold.it/600"
          alt="this is a placeholder image. please adjust the alt accordingly"/>
      </Fragment>
    </A>

    <B>
      <Fragment fit order={2}>
        <FitImage
          src="https://placehold.it/600"
          alt="this is a placeholder image. please adjust the alt accordingly"/>
      </Fragment>
    </B>

    <C>
      <Fragment fit order={3}>
        <FitImage
          src="https://placehold.it/600"
          alt="this is a placeholder image. please adjust the alt accordingly"/>
      </Fragment>
    </C>

    <D>
      <Fragment fit order={4}>
        <FitImage
          src="https://placehold.it/600"
          alt="this is a placeholder image. please adjust the alt accordingly"/>
      </Fragment>
    </D>
  </Slide>
)
