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
import {ViewportSize, Code2} from '../components'


const {Slide, A} = Main

import {select} from '../utils'

const ranges = [
  [ // new webusbConnection
    select([0, 0], [1, 0])
  ],
  [ // get user element
    select([2, 0], [4, 0])
  ],
  [ // listen for click
    select([5, 0], [7, 0])
  ],
  [ // Create connection
    select([7, 0], [9, 0])
  ],
  [ // send
    select([10, 0], [11, 0])
  ],
  [ // disconnect
    select([11, 0], [12, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'neo'
}

const code = `const webusbConnection = new WebUsbConnection()

// DOM element to interact with the user
const enableWebUsb = document.getElementById('enableWebUsb')

// Listen for click
enableWebUsb.addEventListener('click', e => {
  // Establish WebUSB connection
  webusbConnection.enable()

  // webusbConnection.send()
  // webusbConnection.disconnect()
})
`

const notes = (
  <Notes>
    <h3>Putting everything together</h3>
    <p>The user has to trigger the enalbe() function, because the page is not allowed to trigger this automatically, it has to come from the user</p>
    <p>Create a new webusbConnection (the one we defined in the slides before)</p>
    <p>Get access to a DOM element, let's say a button</p>
    <p>Listen for the click event on the button to enable the WebUSB connection</p>
    <p>When the connection was established you can use "send" to send data to the USB device or disconnect to close the connection.</p>

  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle>User Gesture</Subtitle>
      <Code2 ranges={ranges} options={codeOptions} order={0}>
          {code}
      </Code2>
    </A>

  </Slide>
)
