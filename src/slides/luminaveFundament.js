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
import {RainbowText, LayoutAB, Spacer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Fundamentals of luminave</h3>
    <p>Polymer</p>
    <p>WebMIDI</p>
    <p>DMX512</p>
    <p>WebUSB</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="Fundamentals"/></Title>

      <LayoutAB>
        <div><Fragment order={0}><Subtitle>Web Components</Subtitle></Fragment></div>
        <Spacer />
        <div><Fragment order={0}><Subtitle>WebMIDI</Subtitle></Fragment></div>
        <Spacer />
        <div><Fragment order={0}><Subtitle>DMX512</Subtitle></Fragment></div>
        <Spacer />
        <div><Fragment order={0}><Subtitle>WebUSB</Subtitle></Fragment></div>
      </LayoutAB>

    </A>

  </Slide>
)
