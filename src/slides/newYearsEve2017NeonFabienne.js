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
// import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3></h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <FitImage src="https://scontent-frt3-2.cdninstagram.com/vp/4c513a73e2ef4d6b41e12152fa06ed80/5B3110A7/t51.2885-15/e35/25039427_845945382243248_4831747347966853120_n.jpg"
                alt="Neon Fabienne" />
    </A>

  </Slide>
)
