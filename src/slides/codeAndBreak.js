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
import {Code2} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Code & Break</h3>
    <p>You code, you break, you code, you break</p>
    <p>You only learn something if you break something</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Code & Break</Uppercase></Title>
      <Fragment order={1}><Title><Uppercase>Code & Break</Uppercase></Title></Fragment>
      <Fragment order={2}><Title><Uppercase>Code & Break</Uppercase></Title></Fragment>
      <Fragment order={3}><Title><Uppercase>Code & Break</Uppercase></Title></Fragment>
    </A>

  </Slide>
)
