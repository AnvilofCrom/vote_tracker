'use strict';
$(document).ready(function(){

var photoArray;

var Photo = function (fileLocation) {
  this.path = fileLocation;
  this.votes = 1;
}
 Photo.prototype.highlight = function () {
 // highlight a color around the photo
}

//Tracker Object
var Tracker = function() {
}

 Tracker.prototype.waitingForVote = function () {

}

Tracker.prototype.getRandomInt = function() {  //picks two random pics to display
// randomly selects two objects from the Photo array
console.log("random", Math.floor((Math.random() * (13 - 0) +1) +0));
 // var rand = Math.floor((Math.random() * (13 - 0) +1) +0);
 // var rightPhoto = photoArray[rand];
 // var leftPhoto = photoArray[rand];
}

var Election = function(leftImg, rightImg) {
  this.leftImg = leftImg;
  this.rightImg = rightImg;
  this.tracker = new Tracker();

}



var CutestKitten = function() {
  this.elections = [];
  for (var i = 1; i <= 13; i = i + 2){
    this.elections.push(new Election("img/kitten/kit" + i + ".jpg", "img/kitten/kit" + (i + 1) + ".jpg"));
  }
  this.displayElection(this.elections[0]);
  var _this = this;
  document.getElementById("vote").addEventListener('click', function(){
    _this.nextElection();
  });
}
CutestKitten.prototype.nextElection = function (election) {
  var random = Math.floor(Math.random() * this.elections.length);
  this.displayElection(this.elections[random]);
}

CutestKitten.prototype.displayElection = function (election) {
  this.currentElection = election;
  document.getElementById('leftImg').setAttribute('src', election.leftImg);
  document.getElementById('rightImg').setAttribute('src', election.rightImg);
}

var cutestKitten = new CutestKitten();

// Chart code

var votesData = [
  {
    value: 1,
    color:"#D94272"
  },

  {
    value : 1,
    color : "#FDFFE4"
  }

];

var votesOptions = {
  segmentShowStroke : false,
  animateScale : true
};

var votes= document.getElementById('kittyVotes').getContext('2d');
var kittyVotes = new Chart(votes).Pie(votesData, votesOptions);


});

