import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes, Quote} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {Code2} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Use latest browser as a platform</h3>
    <p>It's ok to use the latest version of your favorite browser to try out stuff</p>
    <p>Don't limit yourself to "it has to work everywhere"</p>
    <p>We have to open our eyes and use stuff, give back feedback to browser vendors</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>

      <Title><Quote>It's ok to use the Browser</Quote></Title>

    </A>

  </Slide>
)
