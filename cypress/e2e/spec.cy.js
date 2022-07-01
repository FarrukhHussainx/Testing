import fi from "..//pageObject/forminput";
const cargo = new fi();
before(() => {
  cy.visit("http://localhost/xyz/");
});
describe("empty spec", () => {
  it("passes", () => {
    cargo.getfname().type("Farrukh");
    cy.get("#lname").type("Hussain");
    cy.get("#Male").click();
    cy.get("#vehicle2").click();
    cy.get("#btn").click();
  });
  it("passes", () => {
    cy.get("#fname").type("Muhammad");
    cy.get("#lname").type("Sawaid");
    cy.get("#Male").click();
    cy.get("#vehicle1").click();
    cy.get("#btn").click();
  });
});
