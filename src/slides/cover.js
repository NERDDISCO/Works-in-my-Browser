import React from 'react'
import Fragment from '@dekk/fragment'
import {Title, Subtitle} from '@dekk/text'
import Notes from '@dekk/speaker-notes'
import {Cover} from '@dekk/master-slides'
import {zoom} from '../animation'

const notes = (
  <Notes>
    <p>My name is Gregor</p>
    <p>And my name is Tim</p>
  </Notes>
)

export default (
  <Cover.Slide background='var(--main-bg)'>
    {notes}
    <Cover.A>
      <Title>Works in my Browser</Title>
    </Cover.A>

    <Cover.B>
      <Subtitle>Gregor Adams & Tim Pietrusky</Subtitle>
    </Cover.B>
  </Cover.Slide>
)
