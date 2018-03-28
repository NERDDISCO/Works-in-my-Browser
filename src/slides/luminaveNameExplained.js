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
    <h3>What does luminave mean?</h3>
    <p>lumi = light in many languages (illumination in english, iluminando in spanish) and lumi many other languages</p>
    <p>nave = hub of a wheel</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>

      <LayoutAB>
        <Column>
          <Fragment order={0}><Title><RainbowText time={5} text="lumi"/></Title></Fragment>

          <Fragment order={1}>
              <Subtitle>= <Bold>light</Bold></Subtitle>
              <ul>
                <li>luminado 🇪🇸</li>
                <li>illumination 🇬🇧</li>
                <li>lumière 🇫🇷</li>
              </ul>
          </Fragment>
        </Column>

        <Column>
          <Fragment order={2}><Title><RainbowText time={5} text="nave"/></Title></Fragment>

          <Fragment order={3}>
              <Subtitle>
                <Bold>= hub of a wheel</Bold>
              </Subtitle>
              <ul>
                <li>nave 🇬🇧</li>
              </ul>
          </Fragment>
        </Column>
      </LayoutAB>

    </A>

  </Slide>
)
