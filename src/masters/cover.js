import React from 'react'
import styled from 'styled-components'
import createMaster, {Master, Slot} from '@dekk/master'

const Cover = createMaster(
  <Master>
    <Slot name='Top' />
    <Slot name='Bottom' />
  </Master>
)

export default Cover

export const CoverSlide = styled(Cover)`
  display: grid;
  grid-template-columns: 2rem auto 2rem;
  grid-template-rows: 50vh 50vh;
  grid-template-areas:
    ". Top ."
    ". Bottom .";

  [data-slot] {
    height: 100%;
    width: 100%;
  }
  [data-slot="Bottom"] {
    grid-area: Bottom;
  }
  }
  [data-slot="Top"] {
    grid-area: Top;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
