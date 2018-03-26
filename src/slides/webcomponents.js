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
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Web Components</h3>
    <p>Everything is super modular, so that it's possible to plug in anything into luminave</p>
    <p>Our framework of choice is Polymer 3, because they are going into the right direction</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}


    <A>
      <Title><RainbowText time={30} text="Web Components"/></Title>
      <Fragment order={1}><Subtitle>Polymer 3 (pre)</Subtitle></Fragment>
    </A>

  </Slide>
)
