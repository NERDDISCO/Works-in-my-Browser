import React from 'react'
import Fragment from '@dekk/fragment'
import {Title} from '@dekk/text'
import Notes from '@dekk/speaker-notes'
import {Chapter} from '@dekk/master-slides'
import {zoom} from '../animation'

const notes = (
  <Notes>
    <h3>These are notes</h3>
    <p>lorem ipsum dolor sit amed</p>
  </Notes>
)

export default (
  <Chapter.Slide background='var(--main-bg)'>
    {notes}
    <Chapter.A>
      <Fragment order={0}
                animation={zoom.in}>
        <Title>Thank you</Title>
      </Fragment>
    </Chapter.A>
  </Chapter.Slide>
)
