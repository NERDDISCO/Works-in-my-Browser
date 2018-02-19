import React from 'react'
import styled, {css, injectGlobal} from 'styled-components'
import createMaster, {Master, Static, Slot} from '@dekk/master'

injectGlobal`
  :root {
    --title-font-size: 4em;
  }
`

export {default as Cover, CoverSlide} from './cover'
export {Chapter, ChapterSlide} from './chapter'
