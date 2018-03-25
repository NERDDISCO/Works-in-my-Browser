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

// import interstellar from '../media/interstellar.jpg'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Interstellar</h3>
    <p>Exposed in the 4th dimension</p>
    <p>In the last 15 minutes of the film we enter the 4th dimension</p>
    <p>Infinite universes, he has to find a way to contact the 3th dimension</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/interstellar.gif)`}>
    <Plugins.Data luminave={['COLOR BLUE']}></Plugins.Data>
    {notes}

    <A>
      <Title><Uppercase>Interstellar</Uppercase></Title>
    </A>

  </Slide>
)
