class forminput {
  getFname() {
    return cy.get("#fname");
  }
  getLname() {
    return cy.get("#lname");
  }
  getAgeM() {
    return cy.get("#Male");
  }
  getAgeF() {
    return cy.get("#Female");
  }
  getVehicle1() {
    return cy.get("#vehicle1");
  }
  getVehicle2() {
    return cy.get("#vehicle2");
  }
  getCar() {
    return cy.get("#cars");
  }
}
export default forminput;
