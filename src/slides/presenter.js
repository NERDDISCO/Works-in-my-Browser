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
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Presenter</h3>
    <p>Everything is controlled by the presenter</p>
    <p>This means that by using the presenter, we can travel in time</p>
    <p>But does this also mean we can travel into different dimmensions?</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LargeImage src="media/presenter.jpg"
                  alt="Presenter" />
    </A>

  </Slide>
)
