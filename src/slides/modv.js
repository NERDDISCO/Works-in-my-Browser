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
import styled from 'styled-components'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>modV</h3>
    <p>Music visualisations in WebGL</p>
    <p>By Sam Wray</p>
  </Notes>
)

const BrightTape = styled.div`
  padding: 1em;
  color: #fff;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, .85));
`

export default (
  <Slide key={uuid()} background={`url(media/modv.png)`}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <BrightTape>
        <Title>modV</Title>
      </BrightTape>
      <BrightTape>
        <Subtitle><a href="https://github.com/2xAA/modV">github.com/2xAA/modV</a></Subtitle>
      </BrightTape>
    </A>

  </Slide>
)
