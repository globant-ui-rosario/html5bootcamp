let wsUri = "wss://echo.websocket.org/";
let output;

function init()
{
  output = document.getElementById("output");
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { console.log("CONNECTED"); };
  websocket.onclose = function(evt) { console.log("DISCONNECTED"); };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { console.log(`Error: ${evt.data}`); };
}

function onMessage(evt)
{
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
  websocket.close();
}

function doSend(message)
{
  writeToScreen("SENT: " + message);
  websocket.send(message);
}

function writeToScreen(message)
{
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

function sendMessage(){
  let message = document.getElementById('message').value;
  doSend(message);

}

window.addEventListener("load", init, false);