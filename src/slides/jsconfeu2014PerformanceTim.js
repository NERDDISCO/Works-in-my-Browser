import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence} from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {YouTube, Video} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>JSConf EU 2014: LED Wall</h3>
    <p>It's December 2014, my talk starts at 20:00 and is kicking off the after party</p>
    <p>The first demo is failing super hardy</p>
    <p>I have nothing to lose for the next demo: My own LED wall</p>
    <p>Minute 18</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <YouTube videoId="tia6iP85Zuk" start={1106}>
        {props => {
          return (
            <React.Fragment>
              <Sequence order={0} steps={3}>
                {(index, time, timeline) => {
                  return <Video {...props} isPlaying={index === 1} />
                }}
              </Sequence>
            </React.Fragment>
          )
        }}
      </YouTube>
    </A>

  </Slide>
)
