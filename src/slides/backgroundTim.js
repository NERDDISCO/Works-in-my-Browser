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
    <h3>Background Tim</h3>
    <p>CTO at my own company, doing enterprise Integration with Microservices in Java</p>
    <p>Has a family</p>
    <p>Interested in ligths and visualizations</p>
  </Notes>
)

export default (
  <Slide key={uuid()} luminave={[]}>
    {notes}

    <A>
      <Title>Tim?</Title>
    </A>

  </Slide>
)
