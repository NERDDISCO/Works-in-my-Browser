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

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>First contact with Gregor</h3>
    <p>After my talk he came to me</p>
    <p>Talking something about creating his own synth</p>
    <p>Be became best friends instantly</p>
    <p>Doing awesome stuff like CodePenDay together</p>
    <p>What was missing is a collaboration talk, so we decided that one day we will do it</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>#1 contact with Gregor</Title>
      <Fragment order={1}>
        <Title>🤓</Title>
        <Title><Uppercase>Let's do a collaboration talk</Uppercase></Title>
      </Fragment>
    </A>

  </Slide>
)
