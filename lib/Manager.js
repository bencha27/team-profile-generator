const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;

    if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
      throw new Error("Expected 'officeNumber' parameter to be a non-negative number");
    }
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;