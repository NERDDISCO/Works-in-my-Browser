import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle} from '@dekk/text'
// import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {SuperTimer} from '../components'
import {Plugins} from '@dekk/deck'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3 />
    <p>In 30s I will clap my hands</p>
  </Notes>
)

const handleRest = (fragmentIndex, fragmentOrder) => {
  // The animation is done
  console.log(fragmentIndex, fragmentOrder)
}

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>
        <Fragment order={1} plain>
          {(t, a) => {
            return <SuperTimer isPlaying={a} timer={0.5} />
          }}
        </Fragment>
      </Title>

      <Fragment order={1}>
        <Subtitle>I will clap my hands</Subtitle>
      </Fragment>
      <Fragment order={3}>
        <Subtitle>It will happen</Subtitle>
      </Fragment>
    </A>
  </Slide>
)
