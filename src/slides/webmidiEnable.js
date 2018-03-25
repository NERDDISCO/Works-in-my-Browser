import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebMIDI in JS</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#f8f8ff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>WebMidiConnection.js</Subtitle>
      <ViewportSize>
        <Code language='javascript' style={colorSchemes.docco}>
{`WebMidi.enable(err => {
  if (err) {
    console.error('Web MIDI API could not be enabled:', err)
  } else {

    // Added MIDI input / output ports
    WebMidi.addListener('connected', e => {
      listen(e.port)
    })

    // Removed MIDI input / output ports
    WebMidi.addListener('disconnected', e => {
      listen(e.port)
    })
  }
})`}
        </Code>
      </ViewportSize>
    </A>

  </Slide>
)
