window.WebMidi.enable(err => {
  if (err) {
    console.error('Web MIDI API could not be enabled:', err)
  } else {

    // Added MIDI input / output ports
    WebMidi.addListener('connected', ({ port }) => {
      listen(port)
      const { manufacturer, name, type, id } = port
      write(`Added ${name} from "${manufacturer}" with ID "${id}" and type "${type}`)
    })

    WebMidi.addListener('disconnected', ({ port }) => {
      const { manufacturer, name, type, id } = port
      write(`Removed ${name} from "${manufacturer}" with ID "${id}" and type "${type}`)
    })
  }
})

function listen(port) {
  const { manufacturer, name, id, type } = port

  if (type === 'input') {

    // Listen to "noteon" events
    port.addListener('noteon', 'all', ({

      data: [channel, note, velocity]

    }) => {
      console.log(`noteon: ${note}`)
      write(`noteon: ${note}`)
    })
  }
}

function write(message) {
  let elem = document.createElement('div')
  elem.innerHTML = message

  document.body.appendChild(elem)
}
