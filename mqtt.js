// Create a client instance
client = new Paho.MQTT.Client("openproject.rfindustrial.com", Number(9090), "clientId");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}


var client2 = mqtt.connect('ws://openproject.rfindustrial.com:9090')

client2.subscribe('pepe')
client2.publish('pepe', 'Hello mqtt')

client2.on('message', function (topic, message) {
  console.log(message.toString())
})

//client2.end()
