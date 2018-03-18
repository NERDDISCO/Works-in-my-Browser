import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Text} from '@dekk/text'
// import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Chapter, Half, Collage, Grid, ImageGrid
import {Chapter} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'

const {Slide, A, B} = Chapter

const notes = (
  <Notes>
    <h3>Intro</h3>
    <p>My Name is Gregor Adams</p>
    <p>And my name is Tim Pietrusky</p>
    <p>We are here today to show you what the Web is capable of</p>
    <p>That you can use the web for anything</p>
    <p>Even beyond your imagination</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Title>Gregor Adams</Title>

      <Fragment order={1}>
        <Title>&</Title>
        <Title>Tim Pietrusky</Title>
      </Fragment>
    </A>

  </Slide>
)
