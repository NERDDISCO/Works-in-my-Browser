import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Title, Subtitle} from '@dekk/text'
import Notes from '@dekk/speaker-notes'
import {Cover} from '@dekk/master-slides'

const {Slide, A, B} = Cover

const notes = (
  <Notes>
    <p>We can predict the future</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Title>Predit the future</Title>
    </A>
  </Slide>
)
