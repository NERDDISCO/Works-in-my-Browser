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
import {RainbowText, LayoutAB, Spacer, Column} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Hub of Light</h3>
    <p>luminave connects you to the world of lights and visualisations, it's the central hub that integrated everything else</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['0position 1', 'color rainbow', 'movement 2']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={5} text="luminave"/></Title>
      <Subtitle><Bold>Hub of Light</Bold></Subtitle>
    </A>

  </Slide>
)
