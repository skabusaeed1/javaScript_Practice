import mock from "../fixtures/BooksList.json";
import data from "../../submissionData.json"; // do not create this file
//const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];

describe("react onclick librart", () => {
  let acc_score = 1;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });  

  data.forEach(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    it(`Only Heading and Get Books Button should be visible when component loads`, () => {
      cy.visit(url);
      cy.contains("h1", /Book House/).should("be.visible");
      cy.get(".hide-books").should("not.exist");
      cy.get(".get-books").should("exist");
      cy.get(`[data-cy="container"]`).should("not.exist")
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should make a get request to endpoint when clicked on Get Books button and disappear on UI once clicked on it", () => {
      cy.intercept("GET", "**/get-books").as("get-books-list");
      cy.visit(url);
      cy.get(".get-books").should("be.visible").click();
      cy.wait("@get-books-list");
      cy.get(".get-books").should("not.exist");
      cy.get(`[data-cy="container"]`).should("exist")
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check all types of books are visible only checking no of books", () => {
      cy.intercept("GET", "**/get-books").as("get-books-list");
      cy.visit(url);
      cy.get(".get-books").should("be.visible").click();
      cy.wait("@get-books-list");
      cy.get(".get-books").should("not.exist")
      cy.get(`.book_card`).should("have.length", mock.length);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all details of the book as mentioned in problem statement are displayed", () => {
      cy.intercept("GET", "**/get-books").as("get-books-list");
      cy.visit(url);
      cy.get(".get-books").should("be.visible").click();
      cy.wait("@get-books-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 3 === 0) {
            cy.wrap(child).find("h3").should("contain", mock[index].title);
            cy.wrap(child).find("h5").should("contain", mock[index].author);
            cy.wrap(child).find("h6").should("contain", mock[index].category);
            cy.wrap(child).find("p").should("contain", mock[index].isbn);
            cy.wrap(child).find(".borrow_book_button").should("be.visible");
            cy.wrap(child).find(".return_book_button").should("not.exist");
          }
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

   

    
    it("Onclicking on Borrow button, the button should get disabled and text content should change accordingly and also new button to return should be visible", () => {
      cy.intercept("GET", "**/get-books").as("get-books-list");
      cy.visit(url);
      cy.get(".get-books").should("be.visible").click();
      cy.wait("@get-books-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 3 === 0) {         
            cy.wrap(child).find(".borrow_book_button").should("be.visible");
            cy.wrap(child).find(".return_book_button").should("not.exist");
            cy.wrap(child).find(".borrow_book_button").should("have.text","Borrow").click();
            cy.wrap(child).find(".return_book_button").should("have.text","Return").should("exist");
            cy.wrap(child).find(".borrow_book_button").should("have.text","Borrowed").should("be.disabled");
          }
        });
      cy.then(() => {
        acc_score += 3;
      });
    });


    it("Clicking on the return button should should show borrow button and it should be enabled", () => {
      cy.intercept("GET", "**/get-books").as("get-books-list");
      cy.visit(url);
      cy.get(".get-books").should("be.visible").click();
      cy.wait("@get-books-list");
      cy.get('[data-cy="container"]')
        .children()
        .each((child, index) => {
          if (index % 4 === 0) {         
            cy.wrap(child).find(".borrow_book_button").should("be.visible");
            cy.wrap(child).find(".return_book_button").should("not.exist");
            cy.wrap(child).find(".borrow_book_button").should("have.text","Borrow").click();
            cy.wrap(child).find(".return_book_button").should("have.text","Return").should("exist");
            cy.wrap(child).find(".borrow_book_button").should("have.text","Borrowed").should("be.disabled");
            cy.wrap(child).find(".return_book_button").should("have.text","Return").click({force:true})
            cy.wrap(child).find(".borrow_book_button").should("have.text","Borrow");
            cy.wrap(child).find(".return_book_button").should("not.exist");
          }
        });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Onclicking on Get Books button Hide Books button is appearing along the books data or not", () => {
      cy.intercept("GET", "**/get-books").as("get-books-list");
      cy.visit(url);
      cy.get(".get-books").should("be.visible").click();
      cy.wait("@get-books-list");
      cy.get('[data-cy="container"]').should("exist");
      cy.get(".get-books").should("not.exist")
      cy.get(".hide-books").should("exist").should("be.visible").click();
      cy.get('[data-cy="container"]').should("not.exist");
      cy.get(".get-books").should("exist")
      cy.then(() => {
        acc_score += 2;
      });
    });

   
    
    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});