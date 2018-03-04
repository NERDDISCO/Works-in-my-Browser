import React from 'react'
import Fragment from '@dekk/fragment'
import {Title} from '@dekk/text'
import Notes from '@dekk/speaker-notes'
import {Chapter} from '@dekk/master-slides'
import {fade} from '@dekk/animation'

const notes = (
  <Notes>
    <p>lorem ipsum dolor sit amed</p>
  </Notes>
)

export default (
  <Chapter.Slide background='var(--main-bg)'>
    {notes}
    <Chapter.A>
      <Fragment order={1} animation={fade.in}>
        <Title>🔥</Title>
      </Fragment>
    </Chapter.A>
  </Chapter.Slide>
)
