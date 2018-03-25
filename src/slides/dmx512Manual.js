import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
// import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Manuel + Channels</h3>
    <p>Every fixture has one or more pre-defined set of channels</p>
    <p>In this case we have 14 channels</p>
    <p>Each channel can control a specific property of the fixture</p>
  </Notes>
)

import styled from 'styled-components'

const FancyTable = styled.table`
  height: 90vh;
`

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <FancyTable>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Function</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pan</td>
            <td>Horizontal movement within 540°</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pan 16 bit</td>
            <td>Higher resolution for Pan</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tilt</td>
            <td>Vertical movement within 230°</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Tilt 16 bit</td>
            <td>Higher resolution for Tilt</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Pan / Tilt Speed</td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Dimmer / Strobe</td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Red</td>
            <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>Green</td>
            <td></td>
          </tr>
          <tr>
            <td>9</td>
            <td>Blue</td>
            <td></td>
          </tr>
          <tr>
            <td>10</td>
            <td>White</td>
            <td></td>
          </tr>
          <tr>
            <td>11</td>
            <td>Color Macros</td>
            <td>Predefined set of colors</td>
          </tr>
          <tr>
            <td>12</td>
            <td>RGBW Speed</td>
            <td></td>
          </tr>
          <tr>
            <td>13</td>
            <td>Motion Macros</td>
            <td>Predefined set of movements</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Gobo / Gobo Shake</td>
            <td></td>
          </tr>
        </tbody>
      </FancyTable>
    </A>

  </Slide>
)
