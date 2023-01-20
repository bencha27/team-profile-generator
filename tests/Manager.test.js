const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager subclass", () => {
  describe("Object initialization", () => {
    it("Creates an object with name, id, email, and officeNum", () => {
      const manager = new Manager("John", 1, "john@email.com", 123);

      expect(manager).toEqual({ name: "John", id: 1, email: "john@email.com", officeNumber: 123 });
    });

    it("Creates a subclass of Employee class", () => {
      const manager = new Manager("John", 1, "john@email.com", 123);

      expect(manager).toBeInstanceOf(Employee);
    });
  });

  describe("Input validation", () => {
    it("Throws an error if provided no arguments", () => {
      const cb = () => new Manager();
  
      expect(cb).toThrow();
    });
    
    it("Throws an error if 'officeNum' is not a number", () => {
      const cb = () => new Manager("John", 1, "john@email.com", "1");
      const err = new Error("Expected 'officeNum' parameter to be a non-negative number");
  
      expect(cb).toThrowError(err);
    });
  
    it("Throws an error if 'officeNum' is a negative number", () => {
      const cb = () => new Manager("John", 1, "john@email.com", -1);
      const err = new Error("Expected 'officeNum' parameter to be a non-negative number");
  
      expect(cb).toThrowError(err);
    });
  });

  describe("Object methods", () => {
    it("getRole returns 'Manager'", () => {
      const manager = new Manager("John", 1, "john@email.com", 123);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
})