import {css, injectGlobal} from 'styled-components'

/*
 *
 * Slide
 *
 */
export const cube = css`
  transform:
    perspective(200vmax)
    translate3d(0, 0, -50vh)
    rotate3d(1, 0, 0, calc(90deg * var(--time) * var(--direction)))
    translate3d(0, 0, -50vh);
    backface-visibility: hidden;
    transform-style: preserve-3d;
`

export const cube2 = css`
  transform:
    perspective(100vmax)
    translate3d(0, 0, 30vh)
    rotate3d(0, 1, 0, calc(180deg * var(--time) * var(--direction)))
    translate3d(0, 0, -60vh);
    backface-visibility: hidden;
    transform-style: preserve-3d;
`

export const zoom = css`
  transform: scale3d(calc(1 - var(--time)), calc(1 - var(--time)), 1);
  opacity: calc(1 - var(--time));
`

/*
 *
 * Fragment
 *
 */
export const fadeIn = css`
   transition:
     transform 0.25s ease-${props => props.active ? 'out' : 'in'},
     opacity 1s ease-${props => props.active ? 'in' : 'out'};
   opacity: ${props => props.active ? 1 : 0};
   transform: translate3d(0, ${props => props.active ? 0 : 100}%, 0);
 `

export const zoomIn = css`
   transition:
     transform 4.25s ease-${props => props.active ? 'out' : 'in'},
     opacity 5s ease-${props => props.active ? 'in' : 'out'};
   opacity: ${props => props.active ? 1 : 0};
   transform: scale3d(${props => props.active ? 1 : 0}, ${props => props.active ? 1 : 0}, 1);
 `
