describe("app correctly works on main page", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });
  it('should be available on localhost:3000', function() {
    cy.visit('http://localhost:3000');
  });

  it("should delete ingredient", function () {
    cy.get("li")
      .contains("Мясо бессмертных моллюсков Protostomia")
      .trigger("dragstart");
    cy.get("div").contains("Сюда кидай ингридиенты").trigger("drop");
    cy.get("li")
      .contains("Краторная булка N-200i")
      .trigger("dragstart");
    cy.get("div").contains("Кидай сюда булочки").trigger("drop");
    cy.get(".constructor-element__action").click({ multiple: true });
    cy.get(".pages_right__1NOeI")
      .contains("Мясо бессмертных моллюсков Protostomia")
      .should("not.exist");
  });

  it("should open IngredientDetails page by click on the ingredient", function () {
    cy.get("li").contains("Флюоресцентная булка R2-D3").click();
    cy.contains("Детали ингридиента").should("exist");
    cy.get(".modal_modal__3gBoU").contains("Флюоресцентная булка R2-D3").should("exist");
  });

  it("should open main page by default", function () {
    cy.contains("Соберите бургер");
  });

  it("should open feed page by click on menu button", function () {
    cy.get("a").contains("Лента заказов").click();
    cy.contains("Лента заказов");
  });

  it("should open login page by click on user button", function () {
    cy.get("a").contains("Личный кабинет").click();
    cy.contains("Вход");
    cy.get("a").contains("Конструктор").click();
  });
});

describe("app correctly works with routes ", function () {
  before(function () {
    cy.visit("http://localhost:3000");
  });

  it("should open main page by default", function () {
    cy.contains("Соберите бургер");
  });

  it("should open feed page by click on menu button", function () {
    cy.get("a").contains("Лента заказов").click();
    cy.contains("Лента заказов");
  });

  it("should open login page by click on user button", function () {
    cy.get("a").contains("Личный кабинет").click();
    cy.contains("Вход");
    cy.get("a").contains("Конструктор").click();
  });
});
