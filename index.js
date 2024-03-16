//import { record } from "rrweb";
//const {record} = require("rrweb");
console.log("...inside script");

var events = [];
var flag = true;
function startRec() {
  flag = true;
  const stopRecording = rrweb.record({
    emit(event) {
      if (flag) {
        events.push(event);
        console.log(event);
      } else {
        console.log("recording stopped!!!");
      }
    },
  });
}

function stopRec() {
  flag = false;
  console.log("flag set false");
}

var fileData;
function fetchSessionDataFromFile() {
  var request = new XMLHttpRequest();
  if ("withCredentials" in request) {
    // Firefox 3.5 and Safari 4
    request.open("GET", "../../../Downloads/recording.json", true);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == "200") {
        var jsonData = JSON.parse(request.responseText);
        // Work with JSON data here
        //console.log("json data", jsonData);
        fileData = jsonData;
        console.log("Success");
        console.log("fileData", fileData);
      }
    };
    request.send();
    //console.log("failed")
  }
}

function playSession() {
  console.log("filedata in play", fileData);
  const replayer = new rrweb.Replayer(fileData);
  replayer.play();
}

function downloadEvents() {
  var json = JSON.stringify(events);
  json = [json];
  var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });
  var url = window.URL || window.webkitURL;
  link = url.createObjectURL(blob1);
  var a = document.createElement("a");
  a.download = "recording.json";
  a.href = link;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  console.log("filedata--", fileData);
}
