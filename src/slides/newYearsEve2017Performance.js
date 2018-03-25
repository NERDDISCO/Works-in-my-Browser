import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import styled, {css} from 'styled-components'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

// import newyearsEve2017 from './/media/newyears_eve_2017.jpg'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>New Years Eve 2017: Setup</h3>
    <p>All the lights that I used for my New Years Eve party where controlled using DMX512</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <FitImage src="media/newyears_eve_2017.jpg"
                alt="Full New Years Eve 2017 setup: Frontal" />
    </A>

  </Slide>
)
