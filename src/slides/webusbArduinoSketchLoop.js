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
    <p>The second important part of an Arduino sketch is the loop method</p>
    <p>Once setup is done this is executed over and over again</p>
    <p>In this case we also wait until WebUSB is available</p>
    <p>Then we read the incoming bytes from WebUSB</p>
    <p>And iterate over every of the 512 channel values, to set them on the DMXMaster</p>
  </Notes>
)

export default (

  <Slide key={uuid()} background="#f8f8ff" luminave={[]}>
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
