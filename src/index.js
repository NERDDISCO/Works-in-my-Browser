import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css} from 'styled-components'

import Deck, {Elements, Plugins} from '@dekk/deck'
import Slide from '@dekk/slide'
import Paging from '@dekk/paging'
import LocalStorage from '@dekk/local-storage'
import Listener from '@dekk/listener'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import * as slide from './slides'
import uuid from 'uuid/v4'

import Sockette from 'sockette'
import Luminave from './plugins/luminave'

let luminaveConnected = false

const ws = new Sockette('ws://localhost:3001/dekk', {
  timeout: 5e3,
  maxAttempts: 500,

  onopen: e => {
    luminaveConnected = true
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
  height: 0;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 1rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  font-size: 1rem;
  overflow: hidden;
  ${props => {
    if (props.isActive) {
      return `
          z-index: 1337;
          height: 100vh;
          overflow: auto;
        `
    }
  }};
`

const Header = props => <StyledHeader {...props} />

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
    <Header>
      <iframe
        src="https://localhost:1337"
        allow="midi, usb"
        sandbox="allow-same-origin allow-scripts"
        style={{width: 100 + 'vw', height: 100 + 'vh'}}
        frameBorder="0"
      />
    </Header>
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

const slides = [
  cloneElement(slide.worksInMyBrowser, {key: uuid()}),
  slide.predictTheFuture,
  slide.inTheNext30s,
  slide.livePerformance,
  slide.everythingAtTheSameTime,
  slide.timeTravelTheories,
  slide.travelInTime,
  /* Maybe this is too much in general? Just show the video of the end, but that's it? */
  cloneElement(slide.timeTraveling, {key: uuid()}),
  /* Should we add more here? Do we switch over to my NoteBook for the performance? */
  slide.gregorAdamsTimPietrusky,
  slide.bestWayToPredictTheFutureIsToCreateIt,

  slide.backgroundGregor,
  slide.drawingsFromGregor,

  slide.backgroundTim,
  slide.flashingLights,
  slide.familyTim,
  slide.nerddisco,
  slide.jsconfeu2014,
  slide.jsconfeu2014PerformanceTim,
  slide.jsconfeu2014FirstContactWithGregor,
  slide.newYearsEve2017,
  slide.newYearsEve2017VjAndDjDance,
  slide.newYearsEve2017PerformanceVideo,
  slide.loveLightsTim,

  slide.letsDoACollaborationTalk,

  slide.luminave,
  slide.webmidi,
  slide.novationLaunchpadMini,
  slide.webmidiCode,
  slide.dmx512,
  slide.newYearsEve2017Performance,
  slide.dmx512Network,
  slide.dmx512Plug,
  slide.dmx512LightForJsfestExplained,
  slide.dmx512Manual,
  slide.dmx512HowToControlIt,
  slide.webusb,
  slide.webusbDmxControllerConcept,
  slide.webusbNotAsEasyAsYouThink,
  slide.webusbCustomDevice,
  slide.webusbArduino,
  slide.webusbArduinoDmxShield,
  slide.webusbDmxController,
  slide.webusbArduinoSketch,
  slide.webusbArduinoSketchIncludeAndDefine,
  slide.webusbArduinoSketchSetup,
  slide.webusbArduinoSketchLoop,
  slide.webusbArduinoSketchUploadDone,
  slide.webusbArduinoHowDoesItWork,
  slide.webusbDmx512Data,

  slide.luminaveDemo,

  slide.dekkProject,

  slide.tryAllTheThings,
  slide.livePerformance,
  slide.thankYou
]

const {present, live} = search.parse(window.location.href)

const luminave = {
  connect() {
    luminave.connected = true
  },
  disconnect() {
    luminave.connected = false
  }
}

const doLuminave = (fragmentIndex, fragmentOrder) => {
  // talk to luminave
  if (fragmentOrder === 1) {
    // Connect luminave
    if (!luminave.connected) {
      // connectLuminave()
      console.log('connect to luminave')
      luminave.connect()
    }
  } else if (fragmentOrder === 100) {
    //
    console.log('disconnect from luminave')
    luminave.disconnect()
  } else if (fragmentOrder > 1) {
    // doLuminave Stuff based on order
    if (luminave.connected) {
      console.log(`do luminave for ${fragmentOrder}`)
    }
  } else {
    // when arrow back goes before luminave calls
    // kill luminave
    // killLuminave()
    console.log('disconnect from luminave')
    luminave.disconnect()
  }
}

const handleSlide = (slideIndex, slideCount) => {
  if (luminaveConnected) {
    if (slides[slideIndex].props.light !== undefined) {
      console.log(slides[slideIndex].props.light)
      ws.send(JSON.stringify(slides[slideIndex].props.light))
    }
  }
}

const Button = styled.button`
  z-index: 1337;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleFrame = this.handleFrame.bind(this)
    this.setFrame = this.setFrame.bind(this)
  }

  handleFrame(showFrame) {
    this.setState({
      showFrame
    })
  }

  setFrame() {
    this.setState(prevState => ({
      showFrame: !prevState.showFrame
    }))
  }

  render() {
    return present ? (
      <SpeakerDeck mixin={baseStyles} timer={50}>
        <Elements>
          <Button onClick={this.setFrame}>luminave</Button>
        </Elements>

        <Plugins>
          <Listener onSlide={handleSlide} />
          <Paging />
          <Url />
          <LocalStorage publish />
          <Luminave
            publish
            showFrame={this.state.showFrame}
            handleFrame={this.setFrame}
          />
        </Plugins>
        {slides}
      </SpeakerDeck>
    ) : live ? (
      <Deck mixin={baseStyles}>
        <Elements>
          <StyledHeader isActive={this.state.showFrame}>
            <iframe
              src="https://localhost:1337"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>
        </Elements>

        <Plugins>
          <LocalStorage subscribe />
          <Luminave subscribe handleFrame={this.handleFrame} />
        </Plugins>
        {slides}
      </Deck>
    ) : (
      <Deck mixin={baseStyles}>
        <Plugins>
          <Paging />
          <Url />
        </Plugins>
        {slides}
      </Deck>
    )
  }
}

const mountPoint = document.getElementById('mount-point')

render(<App />, mountPoint)
