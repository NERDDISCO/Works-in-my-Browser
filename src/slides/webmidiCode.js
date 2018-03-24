import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {CodeJs} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebMIDI in JS</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    {notes}

    <A>
      <Fragment order={0}>
        <Code language='javascript' style={colorSchemes.docco}>
          {`
navigator.requestMIDIAccess()
          `}
        </Code>
      </Fragment>
      <Fragment order={1}>
        <Code language='javascript' style={colorSchemes.docco}>
          {`
MIDIMessageEvent
          `}
        </Code>
      </Fragment>
      {/* <CodeJs>
        {`
          console.log('test')
        `}
      </CodeJs> */}
    </A>

  </Slide>
)
