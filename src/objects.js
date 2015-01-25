/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  return ({type: 'Goldfish', brand: 'Pepperidge Farm', flavor: 'Cheddar', count: 2000}); //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
window.systemMsgsReceived = 0;
function MessageLog(user) {
  this.user = user;
  this.sentMsgs = [];
  this.receivedMsgs = [];
  var _totalSent = 0;
  var _totalReceived = 0;
  this.logMessage = function(messageText, direction) {
    if (direction === 0) {
      this.sentMsgs.unshift(messageText);
      _totalSent++;
      if (this.sentMsgs.length > 5) {
        this.sentMsgs.pop();
      }
    }
    else if (direction === 1) {
      this.receivedMsgs.push(messageText);
      _totalReceived++;
      systemMsgsReceived++;
    }
    else {
      return undefined;
    }
  };
  this.getSentMessage = function(n) {
    return this.sentMsgs[n];
  };
  this.totalSent = function() {
    return _totalSent;
  };
  this.totalReceived = function() {
    return _totalReceived;
  };
}
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function() {
  return this.receivedMsgs[this.receivedMsgs.length - 1];
};
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog('Black Hat Guy');
myLog.logMessage('foo', 1);
myLog.logMessage('bar', 1);
myLog.logMessage('baz', 1);
console.log(myLog.lastReceivedMessage());
console.log(myLog.totalReceived());
//end your code

/**
* Add a method to the MessageLog prototype called systemReceived().
* This method should return the total number of messages received for all
* instances of message logs. So if you have logs A and B, A has received
* 3 messages, B has received 8. systemReceived() should return 11. You
* may need to do more than simply add a method to make this functionality
* work.
*/

//your code here
MessageLog.prototype.systemReceived = function() {
  return systemMsgsReceived;
};
var myLog2 = new MessageLog('Some Guy');
myLog2.logMessage('foo', 1);
myLog2.logMessage('bar', 1);
myLog2.logMessage('baz', 1);
console.log(myLog2.systemReceived());
//end your code
