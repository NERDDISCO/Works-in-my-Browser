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

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Attention</h3>
    <p>Please listen carefully:</p>
    <p>There will be a lot of Flashing Lights</p>
    <p>And movie spoilers</p>
    <p>And music</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="black" mixin="--slide-color: white">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>⚠️</Title>
      <Title><Uppercase>Flashing Lights</Uppercase></Title>
      <Fragment order={1}><Title><Uppercase>Loud Music</Uppercase></Title></Fragment>
      <Fragment order={2}><Title><Uppercase>Movie Spoiler</Uppercase></Title></Fragment>
      <Title>⚠️</Title>
    </A>

  </Slide>
)
