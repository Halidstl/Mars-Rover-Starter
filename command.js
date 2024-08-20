class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     throw Error("Command type required.");
     this.value = value;
   }
 
 }
 
 module.exports = Command;