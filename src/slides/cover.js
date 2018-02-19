import React from 'react'
import Fragment from '@dekk/fragment'
import {Title, Subtitle} from '@dekk/text'
import Notes from '@dekk/speaker-notes'

import {CoverSlide, Cover} from '../masters'
import {cube, zoom, zoomIn, fadeIn} from '../animation'

const notes = (
  <Notes>
    <h3>These are notes</h3>
    <p>lorem ipsum dolor sit amed</p>
  </Notes>
)

export default (
  <CoverSlide animation={zoom}
              background='var(--main-bg)'>
    {notes}
    <Cover.Top>
      <Title>Works in my Browser</Title>
    </Cover.Top>

    <Cover.Bottom>
      <br />
      <Subtitle>Gregor Adams & Tim Pietrusky</Subtitle>
    </Cover.Bottom>
  </CoverSlide>
)
