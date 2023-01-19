const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer subclass", () => {
  it("Creates an object with name, id, email, and github", () => {
    const engineer = new Engineer("John", 1, "john@email.com", "john");

    expect(engineer).toEqual({ name: "John", id: 1, email: "john@email.com", github: "john" });
  });

  it("Creates a subclass of Employee class", () => {
    const engineer = new Engineer("John", 1, "john@email.com", "john");

    expect(engineer).toBeInstanceOf(Employee);
  });

  describe("Input validation", () => {
    it("Throws an error if provided no arguments", () => {
      const cb = () => new Engineer();
  
      expect(cb).toThrow();
    });
    
    it("Throws an error if github is not a string", () => {
      const cb = () => new Engineer("John", 1, "john@email.com", 2);
      const err = new Error("Expected 'github' parameter to be a string");
  
      expect(cb).toThrowError(err);
    });
  });

  describe("Object methods", () => {
    it("Returns the GitHub username", () => {
      const engineer = new Engineer("John", 1, "john@email.com", "john");

      expect(engineer.getGithub()).toEqual("john");
    })

    it("Returns the role", () => {
      const engineer = new Engineer("John", 1, "john@email.com", "john");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
})