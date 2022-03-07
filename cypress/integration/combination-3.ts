describe("Level 3 - Combination", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Title contain level 3", () => {
		cy.get(".level-3").find("h1").should("contain.text", "Level 3");
	});

	it("Field required", () => {
		cy.get(".level-3").find("input").click();
		cy.get(".level-3").find("h1").click();
		cy.get(".level-3")
			.find("mat-error")
			.should("contain.text", "Ce champs est requis !");
	});

	it("amount is possible", () => {
		cy.get(".level-3").find("input").type(20);
		cy.get(".level-3")
			.find(".container-form-action-valid")
			.find("#action-button")
			.click();
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.should("contain.text", "20");
	});

	it("autocorrect the typed amount - 0€", () => {
		cy.get(".level-3").find("input").type(0);
		cy.get(".level-3")
			.find(".container-form-action-valid")
			.find("#action-button")
			.click();
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.should("contain.text", "20");
		cy.get(".level-3").find("input").should("contain.value", 20);
	});

	it("autocorrect the typed amount - 90€", () => {
		cy.get(".level-3").find("input").type(90);
		cy.get(".level-3")
			.find(".container-form-action-valid")
			.find("#action-button")
			.click();
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.should("contain.text", "35");
		cy.get(".level-3").find("input").should("contain.value", 70);
	});

	it("autocorrect the typed amount - 28€ - more", () => {
		cy.get(".level-3").find("input").type(28);
		cy.get(".level-3")
			.find(".container-form-action-valid")
			.find("#action-button")
			.click();
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.eq(0)
			.should("contain.text", "35");
		cy.get(".level-3").find(".item-card").eq(0).click();
		cy.get(".level-3").find("input").should("contain.value", 35);
	});

	it("autocorrect the typed amount - 28€ - less", () => {
		cy.get(".level-3").find("input").type(28);
		cy.get(".level-3")
			.find(".container-form-action-valid")
			.find("#action-button")
			.click();
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.eq(1)
			.should("contain.text", "26");
		cy.get(".level-3").find(".item-card").eq(1).click();
		cy.get(".level-3").find("input").should("contain.value", 26);
	});

	it("autocorrect the typed amount - 28€ - more button", () => {
		cy.get(".level-3").find("input").type(28);
		cy.get(".level-3")
			.find(".container-form-action-valid")
			.find("#action-button")
			.click();
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.eq(0)
			.should("contain.text", "35");
		cy.get(".level-3").find(".item-card").eq(0).click();
		cy.get(".level-3").find("input").should("contain.value", 35);
		cy.get(".level-3")
			.find(".container-form-action-more-plus")
			.find("#action-button")
			.click();
		cy.wait(500);
		cy.get(".level-3").find("input").should("contain.value", 40);
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.eq(0)
			.should("contain.text", "20");
	});

	it("autocorrect the typed amount - 28€ - less button", () => {
		cy.get(".level-3").find("input").type(28);
		cy.get(".level-3")
			.find(".container-form-action-valid")
			.find("#action-button")
			.click();
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.eq(1)
			.should("contain.text", "26");
		cy.get(".level-3").find(".item-card").eq(1).click();
		cy.get(".level-3").find("input").should("contain.value", 26);
		cy.get(".level-3")
			.find(".container-form-action-more-less")
			.find("#action-button")
			.click();
		cy.wait(500);
		cy.get(".level-3").find("input").should("contain.value", 25);
		cy.get(".level-3")
			.find(".mat-list-item-content")
			.eq(0)
			.should("contain.text", "25");
	});

	it("less button disabled", () => {
		cy.get(".level-3").find("input").type(20);
		cy.get(".level-3")
			.find(".container-form-action-more-less")
			.find("#action-button")
			.click();
		cy.wait(500);
		cy.get(".level-3")
			.find(".container-form-action-more-less")
			.find("#action-button")
			.should("have.class", "disabled");
	});

	it("more button disabled", () => {
		cy.get(".level-3").find("input").type(70);
		cy.get(".level-3")
			.find(".container-form-action-more-plus")
			.find("#action-button")
			.click();
		cy.wait(500);
		cy.get(".level-3")
			.find(".container-form-action-more-plus")
			.find("#action-button")
			.should("have.class", "disabled");
	});
});
