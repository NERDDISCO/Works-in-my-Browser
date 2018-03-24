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
    <h3>DMX512 connector</h3>
    <p>DMX is using these XLR-3 connectors</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <LargeImage src="media/dmx512_connector.jpg"
                  alt="DMX512 plug" />
    </A>

  </Slide>
)
