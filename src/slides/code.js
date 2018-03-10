import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Text, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Grid} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
import * as dekkAnimation from '@dekk/animation'

const {Slide, A, B, C, D} = Grid

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
      <Code>
        {`
          const helloWorld = foo => {
            console.log(foo)
          }
        `}
      </Code>
    </A>

    <B>
    </B>

    <C>
    </C>

    <D>
    </D>
  </Slide>
)
