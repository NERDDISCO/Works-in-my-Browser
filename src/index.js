import React from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'styled-components'

import Deck, {Plugins} from '@dekk/deck'
import Url from '@dekk/url'
import Paging from '@dekk/paging'

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
    <Plugins>
      <Url type="hash"/>
      <Paging trigger="keydown"/>
    </Plugins>

    {cover}
    {fire}
    {thankYou}
  </Deck>
)

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint)
