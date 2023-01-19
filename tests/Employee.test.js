const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Object initialization", () => {
    it("Creates an object with name, id, and email", () => {
      const employee = new Employee("John", 111, "john@email.com");
  
      expect(employee.name).toEqual("John");
      expect(employee.id).toEqual(111);
      expect(employee.email).toEqual("john@email.com");
    });
  });
  
  describe("Input validation", () => {
    it("Throws an error if provided no arguments", () => {
      const employee = new Employee();
  
      expect(employee).toThrow();
    });
  
    it("Throws an error if 'name' is not a string", () => {
      const employee = new Employee(1);
      const err = new Error("Expected 'name' parameter to be a string");
      
      expect(employee).toThrowError(err);
    });
    
    it("Throws an error if 'name' is an empty string", () => {
      const employee = new Employee("");
      const err = new Error("Expected 'name' parameter to be a non-empty string");
  
      expect(employee).toThrowError(err);
    });
  
    it("Throws an error if id is not a number", () => {
      const employee = new Employee("John", "1");
      const err = new Error("Expected 'id' parameter to be a number");
  
      expect(employee).toThrowError(err);
    });
  
    it("Throws an error if id is a negative number", () => {
      const employee = new Employee("John", -1);
      const err = new Error("Expected 'id' parameter to be a non-negative number");
  
      expect(employee).toThrowError(err);
    })
  
    it("Throws an error if email is not a string", () => {
      const employee = new Employee("John", 111, 2);
      const err = new Error("Expected 'email' parameter to be a string");
  
      expect(employee).toThrowError(err);
    });

  });

  describe("Object methods", () => {
    it("Returns the name", () => {
      const employee = new Employee("John", 111, "john@email.com");

      expect(employee.getName()).toEqual("John");
    });

    it("Returns the id", () => {
      const employee = new Employee("John", 111, "john@email.com");

      expect(employee.getId()).toEqual(111);
    });

    it("Returns the email", () => {
      const employee = new Employee("John", 111, "john@email.com");

      expect(employee.getEmail()).toEqual("john@email.com");
    });

    it("Returns the role", () => {
      const employee = new Employee("John", 111, "john@email.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  })
})