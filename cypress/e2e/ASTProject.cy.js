import fi from "..//pageObject/forminput";
const cargo = new fi();
before(() => {
  cy.visit("http://localhost/xyz/");
});
describe("empty spec", () => {
  it("passes", () => {
    cargo.getFname().type("Farrukh");
    cargo.getLname().type("Hussain");
    cargo.getAgeM().click();
    cargo.getVehicle1().click();
    cargo.getCar().select("bmw");
    cy.get("#btn").click();
  });
  it("passes", () => {
    cargo.getFname().type("zoya");
    cargo.getLname().type("Ali");
    cargo.getAgeF().click();
    cargo.getVehicle2().click();
    cargo.getCar().select("toyota");
    cy.get("#btn").click();
  });
});
