import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
// Text, Title, Subtitle, Uppercase, Bold, Center, Code
import {Title, Subtitle, Text} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
// Cover, Main, Half, Collage, Grid, ImageGrid
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {LayoutAB, Spacer} from '../components'

const {Slide, A} = Main

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
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LayoutAB>
        <Fragment order={0}>
          <img src="media/gregoradams.jpeg"
                alt="Gregor Adams"
                style={{height: 25 + "vh"}} />
          <Title>Gregor Adams</Title>
        </Fragment>

        <Spacer />

        <Fragment order={1}>
          <img src="media/timpietrusky.jpg"
                    alt="Tim Pietrusky"
                    style={{height: 25 + "vh"}} />
          <Title>Tim Pietrusky</Title>
        </Fragment>
      </LayoutAB>
    </A>

  </Slide>
)
