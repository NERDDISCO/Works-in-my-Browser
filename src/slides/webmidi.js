import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Web MIDI</h3>
    <p>stands for Musical Instrument Digital Interface</p>
    <p>Use MIDI devices in the browser</p>
    <p>I recommend you to use WebMidi.js to make handling the WebMIDI API even more awesome and simple</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="Web MIDI"/></Title>
      <Subtitle><a href="https://www.w3.org/TR/webmidi/">w3.org/TR/webmidi</a></Subtitle>
      <Fragment order={1}><Subtitle><a href="https://github.com/cotejp/webmidi">WebMidi.js</a></Subtitle></Fragment>
    </A>

  </Slide>
)
