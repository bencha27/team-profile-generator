const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;

    if (typeof officeNum !== "number" || isNaN(officeNum) || officeNum < 0) {
      throw new Error("Expected 'officeNum' parameter to be a non-negative number");
    }
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;