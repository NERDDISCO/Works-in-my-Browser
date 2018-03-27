window.WebMidi.enable(err => {
  if (err) {
    console.error('Web MIDI API could not be enabled:', err)
  } else {

    // Added MIDI input / output ports
    WebMidi.addListener('connected', ({ port }) => {
      listen(port)
      const { manufacturer, name, type, id } = port
      write(`Added ${name} from "${manufacturer}" with ID "${id}" and type "${type}`, 'device')
    })

    WebMidi.addListener('disconnected', ({ port }) => {
      const { manufacturer, name, type, id } = port
      write(`Removed ${name} from "${manufacturer}" with ID "${id}" and type "${type}`, 'device')
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
      write(`noteon: ${note}`, 'note')
    })
  }
}

function write(message, type) {
  let elem = document.createElement('span')
  elem.innerHTML = message

  switch (type) {
    case 'note':
      document.getElementById('noteonLog').appendChild(elem)
      break;
    case 'device':
      document.getElementById('deviceLog').appendChild(elem)
      break;
    default:

  }



  // document.body.appendChild(elem)
}
