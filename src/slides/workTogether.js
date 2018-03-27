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
    <h3>Work together</h3>
    <p>You are not alone</p>
    <p>The web is here to solve all your problems</p>
    <p>Find like minded peeople on conferences and meetups</p>
    <p>If there is no meetup near you; create one</p>
    <p>Go on CodePen and GitHub to get inspiration</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Work Together</Uppercase></Title>
    </A>

  </Slide>
)
