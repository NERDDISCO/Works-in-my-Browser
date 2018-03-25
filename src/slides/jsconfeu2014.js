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
    <h3>JSConf EU 2014</h3>
    <p>First full talk at a conference ever</p>
    <p>World exclusive demo of the first version of NERDDISCO in the public</p>
    <p>One part was the LED wall</p>
  </Notes>
)

export default (
  <Slide key={uuid()} luminave={[]}>
    {notes}

    <A>
      <Title>
        JSConf EU 2014
      </Title>

      <Fragment order={1}>
        <Subtitle>
          My #1 full talk at a conference
        </Subtitle>
      </Fragment>
    </A>

  </Slide>
)
