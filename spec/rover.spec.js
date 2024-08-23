const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  //TEST 7
  test("constructor sets position and default values for mode and generatorWatts", function (){
    let position = 5;
    let rover = new Rover(position);

    expect(rover.position).toBe(5);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });
  //TEST 8
  test("response returned by receiveMessage contains the name of the message", function (){
    expect();
  });
  //TEST 9
  //test("response returned by receiveMessage includes two results if two commands are sent in the message", function (){
  //});
  //TEST 10
  //test("responds correctly to the status check command", function (){
  //});
  //TEST 11
  //test("responds correctly to the mode change command", function (){
  //});
  //TEST 12
  //test("responds with a false completed value when attempting to move in LOW_POWER mode", function (){
  //});
  //TEST 13
  //test("responds with the position for the move command", function (){
  //});

});
