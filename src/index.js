import React, {cloneElement} from 'react'
import {render} from 'react-dom'
import styled, {css} from 'styled-components'

import Deck, {Elements, Plugins} from '@dekk/deck'
import Slide from '@dekk/slide'
import Paging from '@dekk/paging'
import Url from '@dekk/url'
import * as slide from './slides'
import uuid from 'uuid/v4'

import Sockette from 'sockette'

const ws = new Sockette('ws://localhost:3001/dekk', {
  timeout: 5e3,
  maxAttempts: 500,
  onopen: e => {
    ws.send(JSON.stringify(['JSFest_Static', 'shit fuck']))
  },
  onmessage: e => console.log('Received:', e),
  onreconnect: e => console.log('Reconnecting...', e),
  onmaximum: e => console.log('Stop Attempting!', e),
  onclose: e => console.log('Closed!', e),
  onerror: e => console.log('Error:', e)
})

const StyledHeader = styled.header`
  background: var(--header-background);
  color: var(--header-color);
  height: var(--header-height);
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 1rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  font-size: 1rem;
`

const Header = () => <StyledHeader />

const StyledFooter = styled.footer`
  background: var(--footer-background);
  color: var(--footer-color);
  height: var(--footer-height);
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 1rem;
`

const Footer = () => <StyledFooter />

const elements = (
  <Elements>
    <Header />
    <Footer />
  </Elements>
)

const plugins = (
  <Plugins>
    <Paging />
    <Url />
  </Plugins>
)

const baseStyles = css`
  ${'' /* --font-size: calc(var(--min-font-size) * 1px + (var(--max-font-size) - var(--min-font-size)) * calc(1vw + 1vh); */};
`

const App = () => (
  <Deck mixin={baseStyles}>
    {elements}
    {plugins}

    {cloneElement(slide.worksInMyBrowser, {key: uuid()})}

    {slide.predictTheFuture}

    {slide.inTheNext30s}

    {slide.livePerformance}

    {slide.everythingAtTheSameTime}
    {slide.timeTravelTheories}
    {slide.travelInTime}

    {/* Maybe this is too much in general? Just show the video of the end, but that's it? */}
    {cloneElement(slide.timeTraveling, {key: uuid()})}
    {/* Should we add more here? Do we switch over to my NoteBook for the performance? */}

    {slide.gregorAdamsTimPietrusky}
    {slide.bestWayToPredictTheFutureIsToCreateIt}

    {slide.backgroundGregor}
    {slide.drawingsFromGregor}

    {slide.backgroundTim}
    {slide.flashingLights}
    {slide.familyTim}
    {slide.nerddisco}
    {slide.jsconfeu2014}
    {slide.jsconfeu2014PerformanceTim}
    {slide.jsconfeu2014FirstContactWithGregor}
    {slide.newYearsEve2017}
    {slide.newYearsEve2017VjAndDjDance}
    {slide.newYearsEve2017PerformanceVideo}
    {slide.loveLightsTim}

    {/*   But I came to the conculsion that what I can do best
          Is to combine exsiting software with each other */}
    {/* {slide.manyDifferentProjectsTim} */}

    {/* pre-analyze the music for audio control */}

    {slide.letsDoACollaborationTalk}

    {slide.luminave}
    {slide.webmidi}
    {slide.novationLaunchpadMini}
    {slide.webmidiCode}
    {slide.dmx512}
    {slide.newYearsEve2017Performance}
    {slide.dmx512Network}
    {slide.dmx512Plug}
    {slide.dmx512LightForJsfestExplained}
    {slide.dmx512Manual}
    {slide.dmx512HowToControlIt}
    {slide.webusb}
    {slide.webusbDmxControllerConcept}
    {slide.webusbNotAsEasyAsYouThink}
    {slide.webusbCustomDevice}
    {slide.webusbArduino}
    {slide.webusbArduinoDmxShield}
    {slide.webusbArduinoSketch}
    {slide.webusbArduinoSketchIncludeAndDefine}
    {slide.webusbArduinoSketchSetup}
    {slide.webusbArduinoSketchLoop}
    {slide.webusbArduinoSketchUploadDone}
    {slide.webusbDmxController}
    {slide.webusbDmx512Data}
    {slide.luminaveDemo}
    {slide.webusbArduinoHowDoesItWork}

    {slide.dekkProject}

    {slide.code}

    {slide.inTheNext30sClapHands}

    {slide.tryAllTheThings}

    {slide.livePerformance}

    {slide.thankYou}
  </Deck>
)

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint)
