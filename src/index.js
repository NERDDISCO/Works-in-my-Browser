import React from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'styled-components'

import Deck, {Config} from '@dekk/deck'

import {cover, fire, thankYou} from './slides'

injectGlobal`
  :root {
    --main-bg: #111;
    font-family: sans-serif;
    background: var(--main-bg);
    color: #fff;
  }
`

const App = () => (
  <Deck>
    <Config paging={false} url='hash'/>
    {cover}
    {fire}
    {thankYou}
  </Deck>
)

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint)
