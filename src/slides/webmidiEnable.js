import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize, Code2} from '../components'


const {Slide, A} = Main

import {select} from '../utils'

const ranges = [
  [ // WebMidi.enable
    select([0, 0], [1, 0])
  ],
  [ // Listen for MIDI controller that are connecting
    select([5, 0], [9, 0])
  ],
  [ // listen(port)
    select([7, 0], [8, 0]),
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const notes = (
  <Notes>
    <h3>enable with WebMidi.js</h3>
    <p>Before being able to use WebMidi, we have to <b>enable</b> it</p>
    <p>When this was successful we can listen to connect events. They are fired when the MIDI controller gets added or removed via USB</p>
    <p>When one of these events occur, we can talk with the actual device on the different ports it has</p>
  </Notes>
)

const code = `WebMidi.enable(err => {
  if (err) {
    console.error('Web MIDI API could not be enabled:', err)
  } else {

    // Added MIDI input / output ports
    WebMidi.addListener('connected', { port } => {
      listen(port)
    })

  }
})`

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
