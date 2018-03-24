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
          {`// Run once on startup
void setup() {
  // Initialize incoming with 0
  memset(incoming, 0, sizeof(incoming));

  // Wait until WebUSB connection is established
  while (!Serial) {
    ;
  }

  // Start DMXMaster & transmission to DMXShield
  dmx_master.enable();
}`}
          </Code>
        </ViewportSize>

      </Fragment>
    </A>

  </Slide>
)
