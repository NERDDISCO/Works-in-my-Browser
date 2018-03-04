import React from 'react'
import {render} from 'react-dom'
import styled, {css} from 'styled-components'

import Deck, {Slide, Elements, Plugins} from '@dekk/dekk'
import {cover, fire, thankYou} from './slides'

const App = () => (
  <Deck timer={50}>
    {cover}
    {thankYou}
  </Deck>
)

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint)
