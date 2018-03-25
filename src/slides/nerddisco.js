import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {LargeImage} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>NERDDISCO</h3>
    <p>Projects about everything that is related to visualisations and LEDs and lights</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`#14171e`}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LargeImage src="media/nerddisco_logo_white.svg"
                  alt="NERDDISCO"
                  style={{width: 80 + "vw"}} />
    </A>

  </Slide>
)
