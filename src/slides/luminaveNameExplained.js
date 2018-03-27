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
    <p>iluminado = light in Esperanto</p>
    <p>nave = hub of a wheel</p>
    <p>luminave connects you to the world of lights and visualisations, it's the central hub that integrated everything else</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><Fragment order={0}><RainbowText time={5} text="lumi"/></Fragment> <Fragment order={3}>— <RainbowText time={5} text="nave"/></Fragment></Title>

      <LayoutAB>
        <Fragment order={1}>
          <div><Subtitle>i<RainbowText time={3} text="lumi"/>nado <br /><Fragment order={2}>=<br /><Bold>light</Bold><br />(Esperanto)</Fragment></Subtitle></div>
        </Fragment>
        <Spacer />
        <Fragment order={4}>
          <div><Subtitle><RainbowText time={3} text="nave"/> <br /> <Fragment order={5}>=<br /><Bold>A hub of a wheel</Bold><br />(English)</Fragment></Subtitle></div>
        </Fragment>
      </LayoutAB>

    </A>

  </Slide>
)
