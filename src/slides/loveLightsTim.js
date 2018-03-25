import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>In love with</h3>
    <p>Lights</p>
    <p>visualisations</p>
    <p>Music</p>
  </Notes>
)

export default (
  <Slide key={uuid()} luminave={[]}>
    {notes}

    <A>
      <Title>❤️</Title>
      <Fragment order={1}>
        <Title>Lights</Title>
      </Fragment>
      <Fragment order={2}>
        <Title>Visualisations</Title>
      </Fragment>
      <Fragment order={3}>
        <Title>Music</Title>
      </Fragment>
    </A>

  </Slide>
)
