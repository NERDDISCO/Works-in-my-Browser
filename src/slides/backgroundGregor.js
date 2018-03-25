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
    <h3>Background Gregor</h3>
    <p>Working at</p>
    <p>Interested in</p>
  </Notes>
)

export default (
  <Slide key={uuid()} luminave={[]}>
    {notes}

    <A>
      <Title>Gregor?</Title>
    </A>

  </Slide>
)
