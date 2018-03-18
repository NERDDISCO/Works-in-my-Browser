import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Cover} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

const {Slide, A, B} = Cover

const notes = (
  <Notes>
    <h3>Works in my Browser</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Title>
         <Uppercase>Works in my Browser</Uppercase>
       </Title>
    </A>
    <B>
      <Subtitle>
        <br />
        @
        <br /><br />
      </Subtitle>
      <Subtitle>
        {' '}
        <img src="media/JSfest2018_logo.png"
                  alt="JS Fest 2018 Logo" />
      </Subtitle>
    </B>

  </Slide>
)
