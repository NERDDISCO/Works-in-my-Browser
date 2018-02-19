import React from 'react'
import Fragment from '@dekk/fragment'
import {Title} from '@dekk/text'
import Notes from '@dekk/speaker-notes'

import {ChapterSlide, Chapter} from '../masters'
import {zoomIn} from '../animation'

const notes = (
  <Notes>
    <h3>These are notes</h3>
    <p>lorem ipsum dolor sit amed</p>
  </Notes>
)

export default (
  <ChapterSlide background='var(--main-bg)'>
    {notes}
    <Chapter.Top>
      <Fragment order={0}
                animation={zoomIn}>
        <Title>🔥</Title>
      </Fragment>
    </Chapter.Top>
  </ChapterSlide>
)
