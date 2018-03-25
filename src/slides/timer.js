import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle} from '@dekk/text'
// import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'

// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {SuperTimer} from '../components'

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
      <Title>
        {' '}
        <SuperTimer isPlaying={true}></SuperTimer>
      </Title>
    </A>

  </Slide>
)
