import React from 'react'
import {render} from 'react-dom'
import styled, {css} from 'styled-components'

import Deck, {Slide, Elements, Plugins} from '@dekk/dekk'
import * as slide from './slides'

const App = () => (
  <Deck timer={50}>
    {slide.worksInMyBrowser}

    {slide.gregorAdamsTimPietrusky}

    {slide.predictTheFuture}

    {slide.inTheNext30s}

    {slide.livePerformance}

    {slide.everythingAtTheSameTime}

    {slide.travelInTime}

    {slide.timeTravelTheories}

    {slide.code}

    {slide.inTheNext30sClapHands}

    {slide.tryAllTheThings}

    {slide.livePerformance}

    {slide.thankYou}
  </Deck>
)

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint)
