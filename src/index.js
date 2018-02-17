import React from 'react'
import {render} from 'react-dom'

import Deck from '@dekk/deck'
import Slide from '@dekk/slide'
import Text, {Title, Subtitle} from '@dekk/text'
import Fragment from '@dekk/fragment'

const mountPoint = document.getElementById('mount-point')

const App = () => (
  <Deck>
    <Slide>
      <h1>Works in my Browser</h1>
    </Slide>

    <Slide> <h2>Chapter 2</h2> </Slide>

    <Slide> <h2>Chapter 3</h2> </Slide>
  </Deck>
)

render(<App />, mountPoint)
