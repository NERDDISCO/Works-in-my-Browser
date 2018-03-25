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
    <h3>Party Hard</h3>
    <p>Escalated quickly</p>
    <p>Everything is neon</p>
    <p>Olli as the VJ and Patrick as the DJ</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
    <img
      src="https://media.giphy.com/media/C8oxNfUVi5Mh7kEEi4/giphy.gif"
      alt="Party Hard"/>
    </A>

  </Slide>
)
