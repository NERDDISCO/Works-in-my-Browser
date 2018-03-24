import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize} from '../components'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebMIDI in JS</h3>
    <p></p>
  </Notes>
)

export default (

  <Slide key={uuid()} background="#f8f8ff">
    {notes}

    <A>
      <Fragment order={0}>

        <ViewportSize>
          <Code language='arduino' style={colorSchemes.docco}>
          {`// Run over and over again
void loop() {
  // WebUSB is available
  if (Serial.available() > 0) {

    // Read bytes (the # channels) from WebUSB and save them into incoming
    Serial.readBytes(incoming, channels);

    // Iterate over all channels
    for (int i = 0; i < channels; i++) {
      // Set the value for each channel
      dmx_master.setChannelValue(i + 1, incoming[i]);
    }
  }
}`}
          </Code>
        </ViewportSize>

      </Fragment>
    </A>

  </Slide>
)
