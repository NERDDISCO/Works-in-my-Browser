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
    <h3>What does luminave mean?</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={5} text="lumi"/> — <RainbowText time={5} text="nave"/></Title>

      <LayoutAB>
        <div><Subtitle>i<RainbowText time={3} text="lumi"/>nado <br />=<br /><Bold>light</Bold><br />(Esperanto)</Subtitle></div>
        <Spacer />
        <div><Subtitle><RainbowText time={3} text="nave"/> <br />=<br /><Bold>A hub of a wheel</Bold><br />(English)</Subtitle></div>
      </LayoutAB>

    </A>

  </Slide>
)
