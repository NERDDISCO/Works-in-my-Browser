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
}








class WebUsbConnection {
  constructor() {
    this.device = null
  }

  enable() {
    // Only request the port for specific devices
    const filters = [
      // Arduino LLC (10755), Leonardo ETH (32832)
      { vendorId: 0x2a03, productId: 0x8040 }
    ]

    // Request access to the USB device
    navigator.usb.requestDevice({ filters })
      // Create a new USB device
      .then(device => device.open())

      .then(device => {
        if (device.configuration === null) {
          // Select #1 USB configuration
          return device.selectConfiguration(1)
        }
      })

      // Get exclusive access to the #2 interface
      .then(device => device.claimInterface(2))

      // We are ready to receive data on Endpoint 1 of Interface #2
      .then(device => device.controlTransferOut({
        'requestType': 'class',
        'recipient': 'interface',
        'request': 0x22,
        'value': 0x01, // Endpoint: 1
        'index': 0x02 // Interface: #2
      }))


      // Receive 512 bytes on Endpoint 5
      .then(device => device.transferIn(5, 512))

      .then(this.assign)

      .then(({ data }) => {
        let decoder = new TextDecoder()
        console.log('Received: ' + decoder.decode(result.data))
      })

      .catch(error => {
        console.log(error)
      })
  }

  assign(device) {
    this.device = device
    return Promise.resolve(device)
  }

  disconnect() {
    if (this.device === null) {
      throw new Error(`device has not been enabled. Cannot diconnect undefined`)
    }
    // Declare that we don't want to receive data anymore
    return this.device.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': 0x22,
      'value': 0x00, // Endpoint: 1
      'index': 0x02 // Interface: #2
    })
    .then(() => this.device.close())
  }

  write(data) {
    if (this.device === null) {
      throw new Error(`device has not been enabled. Cannot write undefined`)
    }
    // Send data to the USB device on endpoint 4
    return this.device.transferOut(4, data)
  }
}


const webusbConnection = new WebUsbConnection()

webusbConnection.enable()
