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
{`#include <WebUSB.h>
#include <Conceptinetics.h>

WebUSB WebUSBSerial(1, "localhost:1337");
#define Serial WebUSBSerial

// Amount of DMX channels
#define channels 512

// dmx_master(channels , pin);
// channels: Amount of DMX channels
// pin: Pin to do read / write operations on the DMX shield
DMX_Master dmx_master(channels, 2);

// Amount of incoming bytes via WebUSB
byte incoming[channels];`}
          </Code>
        </ViewportSize>
        
      </Fragment>
    </A>

  </Slide>
)
