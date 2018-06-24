
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

  // Initializing Firebase
  var config = {
    apiKey: "AIzaSyBkXrsNvR8nL-r7QlafejNVXFym35KEr6s",
    authDomain: "trainpi-8222b.firebaseapp.com",
    databaseURL: "https://trainpi-8222b.firebaseio.com",
    projectId: "trainpi-8222b",
    storageBucket: "",
    messagingSenderId: "864335359712"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var unTrain = "";
  var dernierTrain = "";
  var destination = "";
  var arrival = "";
  var timeAway = "";

  $(".add-train").on("click",function(response) {
    
    response.preventDefault();
    
    trainName = $("#trainNameInput").val();
    destination = $("#destinationInput").val();
    unTrain = $("#unTrainInput").val();

    database.ref().set({
        train_nName: trainName,
        un_Train: unTrain,
        dernier_Train: dernierTrain,
        destination: destination,
        arrival: arrival,
        time_Away: timeAway,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  })
 //Ignore all this shit. 
  database.ref().on("child_added", function (snapshot) {
    var child = snapshot.val();
    var monthWorked = child.dateAdded - child.start_date;
    console.log(child.start_date)
    console.log(child.dateAdded);
    console.log(monthWorked);
    var employeeInfo = $(`
    <tr>
    
      <td>${child.train_Name}</td>
      <td>${child.un_Train}</td>
      <td>${child.dernier_train}</td>
      <td>${child.dateAdded - child.start_date}</td>
      <td>${child.monthly_rate}</td>
      <td>${child.monthly_rate * monthWorked}</td>
      
    </tr>`);

    moment("20111031", "YYYYMMDD").fromNow();
})


