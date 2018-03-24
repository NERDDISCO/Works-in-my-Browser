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
    <h3>New Years Eve 2017</h3>
    <p>4 years later one of my biggest dreams came true</p>
    <p>Big house party with 25 friends</p>
    <p>Basement full of lights, visuals and music</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url("media/newyearseve2017_neon_fabienne.jpg")`}>
    {notes}

    <A>
      <Title style={{filter: 'invert(100%) drop-shadow(5px 5px 0 red)'}}>New Years Eve 2017</Title>
    </A>

  </Slide>
)
