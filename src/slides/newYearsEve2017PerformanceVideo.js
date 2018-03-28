import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence}  from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins, Live} from '@dekk/dekk'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'
import {YouTube, Video} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>New Years Eve 2017 Performance</h3>
    <p>Olli is using luminave to do a performance to the music</p>
    <p>The room is filled with smoke, so that we can see the light even better</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <YouTube videoId="Qq9V5KHAf0s" start={223}>
        {props => {
          return (
            <React.Fragment>
              <Sequence order={1} steps={2}>
                {(index, time, timeline) => {
                  return <Live><Video {...props} isPlaying={index === 0} /></Live>
                }}
              </Sequence>
            </React.Fragment>
          )
        }}
      </YouTube>
    </A>

  </Slide>
)
