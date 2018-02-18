import React from 'react'
import {render} from 'react-dom'
import styled, {css, injectGlobal} from 'styled-components'

import Deck from '@dekk/deck'
import {hash} from '@dekk/url'
import Store from '@dekk/store'
import Text, {Title, Subtitle, Uppercase} from '@dekk/text'
import createMaster, {Master, Static, Slot} from '@dekk/master'
import Fragment from '@dekk/fragment'

import {CoverSlide, Cover, ChapterSlide, Chapter} from './masters'
import {zoom, zoomIn, fadeIn, cube, cube2} from './animation'

const bgImage = `
  linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,1)),
  url(https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg)
`

const {Top, Bottom} = Chapter

const App = () => (
  <Deck url={hash}>
    {/* Cover-slide */}
    <CoverSlide background={bgImage}
                animation={zoom}>
      <Cover.Top>
        <Fragment order={0}
                  animation={fadeIn}><Subtitle>SinnerSchrader presents</Subtitle></Fragment>
        <Fragment order={0}
                  animation={fadeIn}><Subtitle>(Part of Accenture)</Subtitle></Fragment>
        <Fragment order={5}
                  animation={fadeIn}><Subtitle>A Gregy Ätom & Tirn Perusky Production</Subtitle></Fragment>
        <Fragment order={10}
                  animation={zoomIn}>
          <Title><br />Works in my Browserrr</Title>
        </Fragment>
      </Cover.Top>
      <Cover.Bottom>
        <Fragment order={30}
                  animation={fadeIn}>
          <Subtitle>
            past + present + future
          </Subtitle>
        </Fragment>
        <Fragment order={31}
                  animation={fadeIn}>
          <Title>
            =
            <br />
            <Uppercase>everything</Uppercase>
          </Title>
        </Fragment>
      </Cover.Bottom>
    </CoverSlide>
    {/* Slide # 1 */}
    <ChapterSlide background={bgImage}
                  animation={zoom}>
      <Top>
        <Fragment order={0}
                  animation={zoomIn}>
          <Title>🔥</Title>
        </Fragment>
      </Top>
    </ChapterSlide>
    {/* Slide # 2 */}
    <ChapterSlide background={bgImage}
                  animation={cube}>
      <Chapter.Top>
        <Title>THANK YOU</Title>
      </Chapter.Top>
    </ChapterSlide>
  </Deck>
)

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint)
