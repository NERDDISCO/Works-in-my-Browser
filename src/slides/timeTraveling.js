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
import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Travel in Time</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>
        <Fragment order={1}>
          {(t, a) => {return <SuperTimer isPlaying={a} timer={0.25}></SuperTimer>}}
        </Fragment>
      </Title>
    </A>

  </Slide>
)
