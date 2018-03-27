import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize, Code2} from '../components'


const {Slide, A} = Main

import {select} from '../utils'

const ranges = [
  [ // listen
    select([0, 0], [1, 0])
  ],
  [ // port deconstruct
    select([1, 10], [1, 22]),
    select([1, 24], [1, 28]),
    select([1, 30], [1, 32]),
    select([1, 34], [1, 38])
  ],

  [ // type is input
    select([3, 0], [4, 0])
  ],
  [ // addListener
    select([5, 0], [7, 0])
  ],
  [ // event deconstruct
    select([8, 13], [8, 20]),
    select([8, 22], [8, 26]),
    select([8, 28], [8, 36])
  ],
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `listen(port) {
  const { manufacturer, name, id, type } = port

  if (type === 'input') {

    // Listen to "noteon" events
    port.addListener('noteon', 'all', ({

      data: [channel, note, velocity]

    }) => {
      // Trigger actions when a specific note is hit
    })
  }
}`



const notes = (
  <Notes>
    <h3>Listen to MidiMessageEvents</h3>
    <p>Port contains useful information: manufacturer, name, id & type</p>
    <p>There are two differnt types: Input ports & output ports</p>
    <p>Everything that the MIDI controller sends to our computer is coming from the input port</p>
    <p>Everything that our computer is sending to the MIDI controller on the output port</p>
    <p>Listen to all "noteon" (which would be a "keydown" on the keyboard)</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebMidiConnection.js</Subtitle>

      <Code2 ranges={ranges} options={codeOptions}>
          {code}
      </Code2>
    </A>

  </Slide>
)
