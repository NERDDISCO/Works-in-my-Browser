import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
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
    {notes}

    <A>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tia6iP85Zuk?rel=0&amp;showinfo=0&amp;start=1106" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </A>

  </Slide>
)
