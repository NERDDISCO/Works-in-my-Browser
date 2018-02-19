import React from 'react'
import styled from 'styled-components'
import createMaster, {Master, Slot, Static} from '@dekk/master'
import Text, {Title, Subtitle, Uppercase} from '@dekk/text'
import {Header} from '../components'
import {cube} from '../animation'

const Footer = () => (
  <footer>
    <Uppercase>© 2018 Gregy Ätom & Tirn Perusky</Uppercase>
  </footer>
)

export const masterFromConfig = (name, slots) => {
  const slide = createMaster(
    <Master>
      <Static name="Header"><Header/></Static>
      <Static name="Footer"><Footer/></Static>
      {slots.map((props, i) => <Slot key={props.name} {...props} />)}
    </Master>
  )
  return slots.reduce((a, b) => ({...a, [b.name]: slide[b.name]}), {[name]: slide})
}

export const {Chapter} = masterFromConfig('Chapter', [
  {name: 'Top', only: [Title, Subtitle], required: true},
  {name: 'Bottom', only: [Subtitle, Title]}
])

export const ChapterSlide = styled(Chapter)`
  display: grid;
  grid-template-columns: 2rem auto 2rem;
  grid-template-rows: 2rem calc(50vh - 2rem) calc(50vh - 2rem) 2rem;
  grid-template-areas:
    ". Header ."
    ". Top ."
    ". Bottom ."
    ". Footer .";

  [data-slot],
  [data-static] {
    height: 100%;
    width: 100%;
  }
  [data-static="Header"] {
    grid-area: Header;
  }
  [data-static="Footer"] {
    grid-area: Footer;
  }
  [data-slot="Bottom"] {
    grid-area: Bottom;
  }
  [data-slot="Top"] {
    grid-area: Top;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  ${cube('x')}
`
