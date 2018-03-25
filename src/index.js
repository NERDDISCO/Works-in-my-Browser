import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css} from 'styled-components'

import Deck, {Elements, Plugins} from '@dekk/deck'
import Slide from '@dekk/slide'
import Paging from '@dekk/paging'
import Controller from './plugins/controller'
import LocalStorage from '@dekk/local-storage'
import Listener from '@dekk/listener'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import * as slide from './slides'
import uuid from 'uuid/v4'

import Luminave from './plugins/luminave'

const StyledHeader = styled.header`
  background: var(--header-background);
  color: var(--header-color);
  z-index: 1337;
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 1rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  font-size: 1rem;
  opacity: 0;
  pointer-events: none;

  ${props => {
    if (props.isActive) {
      return `
          pointer-events: all;
          opacity: 1;
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

// const lightSetting = `
//   #light1 {
//     color: rgb(255, 0, 0);
//     transform: rotateX(20deg);
//   }
//
// `

const baseStyles = css`
  ${'' /* --font-size: calc(var(--min-font-size) * 1px + (var(--max-font-size) - var(--min-font-size)) * calc(1vw + 1vh); */};
`

const slides = [
  cloneElement(slide.worksInMyBrowser, {key: uuid()}),
  slide.flashingLights,

  slide.predictTheFuture,
  slide.inTheNext30s,
  slide.livePerformance,
  slide.everythingAtTheSameTime,
  // slide.timeTravelTheories,
  slide.terminator,
  slide.backtothefuture,
  slide.interstellar,
  slide.interstellar4dto3dCommunication,
  slide.travelInTime,
  /* Maybe this is too much in general? Just show the video of the end, but that's it? */
  // cloneElement(slide.timeTraveling, {key: uuid()}),
  /* Should we add more here? Do we switch over to my NoteBook for the performance? */
  slide.gregorAdamsTimPietrusky,

  slide.backgroundGregor,
  slide.drawingsFromGregor,

  slide.backgroundTim,
  slide.familyTim,
  slide.nerddisco,
  slide.jsconfeu2014,
  slide.jsconfeu2014PerformanceTim,
  slide.jsconfeu2014FirstContactWithGregor,
  slide.newYearsEve2017,
  slide.newYearsEve2017VjAndDjDance,
  slide.newYearsEve2017PerformanceVideo,
  slide.loveLightsTim,

  slide.luminave,
  slide.webmidi,
  slide.novationLaunchpadMini,
  slide.webmidiEnable,
  slide.webmidiListen,
  slide.dmx512,
  slide.newYearsEve2017Performance,
  slide.dmx512Network,
  slide.dmx512Plug,
  slide.dmx512LightForJsfestExplained,
  slide.dmx512Manual,
  // slide.dmx512HowToControlIt,
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
  slide.webusbDmxControllerAdded,
  slide.webusbEnable,
  slide.webusbUsbPortEnableUserGesture,
  slide.webusbConnect,
  slide.webusbUsbPortConnect,
  slide.webusbUsbPortConnect2,
  slide.webusbUsbPortDisconnect,
  slide.webusbUsbPortReadLoop,
  slide.webusbUsbPortSend,
  slide.webusbDmx512Data,
  slide.luminaveDemo,
  slide.luminaveColor,
  slide.luminaveColorMoveAround,
  slide.luminaveColorStrobeMoveAround,

  slide.dekkProject,

  slide.bestWayToPredictTheFutureIsToCreateIt,

  slide.luminaveDekkIntegration,
  // slide.integrationLuminaveinDekk,
  cloneElement(slide.luminaveColor, {key: uuid()}),
  cloneElement(slide.luminaveColorMoveAround, {key: uuid()}),
  cloneElement(slide.luminaveColorStrobeMoveAround, {key: uuid()}),

  slide.tryAllTheThings,
  slide.livePerformance,
  slide.thankYou
]

/*
 Integrate Luminave into Dekk
 backlight for your talk
 set scenes to match your slide mood
*/

const {present, live} = search.parse(window.location.href)

const Button = styled.button`
  position: fixed;
  top: 0;
  left: 0;
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
          <Controller trigger="keydown" handleFrame={this.setFrame} />
          <Paging trigger="keydown" />
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
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>
        </Elements>

        <Plugins>
          <LocalStorage subscribe />
          <Luminave subscribe handleFrame={this.handleFrame} slides={slides} />
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
