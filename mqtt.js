// Create a client instance
//client = new Paho.MQTT.Client("openproject.rfindustrial.com", Number(9090), "clientId");

// set callback handlers
//client.onConnectionLost = onConnectionLost;
//client.onMessageArrived = onMessageArrived;

// connect the client
//client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("/vivero/#");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  //if (responseObject.errorCode !== 0) {
  //  console.log("onConnectionLost:"+responseObject.errorMessage);
  //}
}

// called when a message arrives
function onMessageArrived(message) {
  //console.log("onMessageArrived:"+message.payloadString);
  //console.log("onMessageTopic:"+message.destinationName);
  //
  //var topic = message.destinationName;
  //var value = parseFloat(message.payloadString);
  //if (topic.endsWith("/TEMP"))
  {
	//dataGauges.setValue(0, 1, 50);// value / 1000);
	//chart.draw(dataGauges, optionsGauges);
  }	  
  //
  //if (topic.endsWith("/HUM"))
  //{
	//data.setValue(1, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  
  //
  //if (topic.endsWith("/CO2"))
  //{
	//data.setValue(2, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  
  //if (topic.endsWith("/MOIST"))
  //{
	//data.setValue(3, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  
  //if (topic.endsWith("/LUX"))
  //{
	//data.setValue(4, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  

  
  
}

var dataGauges = google.visualization.arrayToDataTable([
  ['Label', 'Value'],
  ['Temperatura', 0],
  ['Humedad', 0],
  ['CO2', 0],
  ['Humedad Suelo', 0],
  ['Luz', 0]
]);

var optionsGauges = {
  width: 800, height: 240,
  redFrom: 90, redTo: 100,
  yellowFrom:75, yellowTo: 90,
  minorTicks: 5
};

var chart = new google.visualization.Gauge(document.getElementById('chart_div'));



var client2 = mqtt.connect('ws://openproject.rfindustrial.com:9090')

client2.subscribe('/vivero/#')
//client2.publish('pepe', 'Hello mqtt')

client2.on('message', function (topic, message) {
	
  console.log(topic + ":" + message.toString())

  if (topic.endsWith("/TEMP"))
  {
	dataGauges.setValue(0, 1, 50);// value / 1000);
	chart.draw(dataGauges, optionsGauges);
  }	  

  //
  //if (topic.endsWith("/HUM"))
  //{
	//data.setValue(1, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  
  //
  //if (topic.endsWith("/CO2"))
  //{
	//data.setValue(2, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  
  //if (topic.endsWith("/MOIST"))
  //{
	//data.setValue(3, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  
  //if (topic.endsWith("/LUX"))
  //{
	//data.setValue(4, 1, message.payloadString / 1000);
	//chart.draw(data, options);
  //}	  



})

//client2.end()
