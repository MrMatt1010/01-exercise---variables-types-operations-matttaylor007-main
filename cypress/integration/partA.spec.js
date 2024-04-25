/**
 * IMPORTANT NOTE!
 * The CSS spec for the project is very specific about what css measurements to use
 * But they are relative units. Cypress returns the absolute units after calculating from relative units
 * So all expectations are using absolute units that Cypress derives from the relative units
 * Very hacky!
 */

describe("JS Types and Variables", () => {
  describe("Part A", () => {
    it("should have the correct Name", () => {
      cy.visit("http://localhost:5000");
      cy.get("#fullName").contains("Bill Murray");
    });

    it("should have the correct Email", () => {
      cy.visit("http://localhost:5000");
      cy.get("#email").contains("billmurray@gmail.com");
    });

    it("should have the correct Age", () => {
      cy.visit("http://localhost:5000");
      cy.get("#age").contains("70");
    });

    it("should display 'Yes' for 'Has senior citizen discount?'", () => {
      cy.visit("http://localhost:5000");
      cy.get("#hasDiscount").contains("Yes");
    });

    it("should have the correct % value for 'Has senior citizen discount?'", () => {
      cy.visit("http://localhost:5000");
      cy.get("#discountAmount").contains("5");
    });

    it("should display 'Yes' for 'Dietary requirements'", () => {
      cy.visit("http://localhost:5000");
      cy.get("#hasDietaryRequirement").contains("Yes");
    });

    it("should display N for 'vegetarian' dietary requirements", () => {
      cy.visit("http://localhost:5000");
      cy.get("#vegetarian").contains("N");
    });

    it("should display Y for 'gluten free' dietary requirements", () => {
      cy.visit("http://localhost:5000");
      cy.get("#glutenFree").contains("Y");
    });

    it("should display the correct booking reference", () => {
      cy.visit("http://localhost:5000");
      cy.get("#bookingReference").contains("ABC12345");
    });

    it("should display the correct departure date", () => {
      cy.visit("http://localhost:5000");
      cy.get("#departureDate").contains("21/12/20");
    });

    it("should display the correct departure time", () => {
      cy.visit("http://localhost:5000");
      cy.get("#departureTime").contains("07:25");
    });

    it("should display the correct departure airport", () => {
      cy.visit("http://localhost:5000");
      cy.get("#departureAirport").contains("AKL");
    });

    it("should display the correct flight cost", () => {
      cy.visit("http://localhost:5000");
      cy.get("#flightCost").contains("1999.00");
    });

    it("should display the correct airport tax", () => {
      cy.visit("http://localhost:5000");
      cy.get("#airportTax").contains("23.00");
    });

    it("should display the correct total (excluding discount)", () => {
      cy.visit("http://localhost:5000");
      cy.get("#totalCost").contains("2022.00");
    });

    it("should display the correct discount total", () => {
      cy.visit("http://localhost:5000");
      cy.get("#totalDiscount").contains("101.10");
    });

    it("should display the correct total (including discount)", () => {
      cy.visit("http://localhost:5000");
      cy.get("#totalWithDiscount").contains("920.90");
    });
  });
});
