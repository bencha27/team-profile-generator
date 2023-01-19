const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern subclass", () => {
  it("Creates an object with name, id, email, and school", () => {
    const intern = new Intern("John", 1, "john@email.com", "John's University");

    expect(intern).toEqual({ name: "John", id: 1, email: "john@email.com", school: "John's University" });
  });

  it("Creates a subclass of Employee class", () => {
    const intern = new Intern("John", 1, "john@email.com", "John's University");

    expect(intern).toBeInstanceOf(Employee);
  });

  describe("Input validation", () => {
    it("Throws an error if provided no arguments", () => {
      const cb = () => new Intern();
  
      expect(cb).toThrow();
    });
    
    it("Throws an error if 'school' is not a string", () => {
      const cb = () => new Intern("John", 1, "john@email.com", 2);
      const err = new Error("Expected 'school' parameter to be a non-empty string");
  
      expect(cb).toThrowError(err);
    });

    it("Throws an error if 'school' is an empty string", () => {
      const cb = () => new Intern("John", 1, "john@email.com", "");
      const err = new Error("Expected 'school' parameter to be a non-empty string");
  
      expect(cb).toThrowError(err);
    });
  });

  describe("Object methods", () => {
    it("Returns the school name", () => {
      const intern = new Intern("John", 1, "john@email.com", "John's University");

      expect(intern.getSchool()).toEqual("John's University");
    })

    it("Returns the role", () => {
      const intern = new Intern("John", 1, "john@email.com", "John's University");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
})