import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Get data from USB</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#f8f8ff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>USBPort</Subtitle>
      <ViewportSize>
        <Code language='arduino' style={colorSchemes.docco}>
{`read() {
  // Receive 512 bytes on Endpoint 5
  device.transferIn(5, 512).then({data} => {
    // Use data
    read()
  }, error => {
    onReceiveError(error)
  })
}`}
        </Code>
      </ViewportSize>
    </A>

  </Slide>
)