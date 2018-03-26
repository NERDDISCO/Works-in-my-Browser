import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import 'codemirror/mode/javascript/javascript'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'

const {Slide, A} = Main

import Code from '@dekk/code'
const ranges = [
  [
    {
      anchor: {ch: 0, line: 0},
      head: {ch: 100, line: 0}
    },
    {
      anchor: {ch: 0, line: 1},
      head: {ch: 100, line: 1}
    }
  ],
  [
    {
      anchor: {ch: 0, line: 2},
      head: {ch: 100, line: 2}
    }
  ],
  [
    {
      anchor: {ch: 7, line: 2},
      head: {ch: 11, line: 2}
    }
  ],
  [
    {
      anchor: {ch: 14, line: 2},
      head: {ch: 19, line: 2}
    }
  ],
  [
    {
      anchor: {ch: 4, line: 6},
      head: {ch: 100, line: 6}
    },
    {
      anchor: {ch: 4, line: 7},
      head: {ch: 100, line: 7}
    },
    {
      anchor: {ch: 4, line: 8},
      head: {ch: 100, line: 8}
    }
  ]
]

const code = `import React from 'react'
import {render} from 'react-dom'
import Deck, {Slide} from '@dekk/dekk'

render(
  <Deck>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
  </Deck>
, document.getElementById('app))`

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'monokai'
}

const notes = (
  <Notes>
    <h3>Back to the Future</h3>
    <p>Infinite universes, he has to find a way to contact the 3th dimension</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['COLOR GREEN']}></Plugins.Data>
    {notes}
    <A>
      <Code ranges={ranges} options={codeOptions}>
          {code}
      </Code>
    </A>

  </Slide>
)
