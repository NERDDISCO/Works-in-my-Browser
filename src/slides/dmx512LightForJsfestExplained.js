import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Lights for JSFest</h3>
    <p>This is a Moving Head from Eurlite called TMH-8</p>
    <p>Moving head means that is can move around</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <LargeImage src="media/eurolite_tmh8.jpg"
                  alt="Eurolite TMH-8" />
    </A>

  </Slide>
)
