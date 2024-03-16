var socket = io("http://localhost:3000");

var firstEvent = null;
var roomName = "SqFR5uoLEUX8Qzuo66xF686qxf23";
var fileData;


function showLog(){
var request = new XMLHttpRequest();
if("withCredentials" in request)
  {
   // Firefox 3.5 and Safari 4
   request.open('GET', 'recording.json', true);
   request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == "200") {
            var jsonData = JSON.parse(request.responseText);
            // Work with your JSON data here
            console.log(jsonData);
            fileData = jsonData;
            console.log("Success");
            console.log(fileData);
        }
    };
   request.send();
  }else{
    
  console.log("failure");
  }
}


  const player = new rrweb.Replayer(fileData);
  player.play();




// const replayer = new rrweb.Replayer([], {
//    liveMode: true,
// });
// replayer.startLive();

// socket.on("connect", () => {
//   socket.emit("new-user", roomName);

//   // received from user side
//   socket.on("user-event", (data) => {
//     console.log(data);
//     replayer.addEvent(data);
//   });

//   // sent to server room for agent
//   socket.emit("receive-event", { event: "test", room: roomName });
// });


// var socket = io("http://localhost:3000");

// var firstEvent = null;
// var roomName = "SqFR5uoLEUX8Qzuo66xF686qxf23";

// var JSON_obj = 

// var events = Object.keys(JSON_obj); 

