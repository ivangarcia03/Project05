class ProjectPagination{
    ​
    ​
       getHeading(){
        return cy.get('.is-size-3');
       }
    ​
       getSubHeading(){
        cy.get(' #sub_heading');
       }
    ​
      getCityParagraph(){
       return cy.get('#content');
      }
    ​
      getHeadingText(text){
        switch(text){
          case "Pagination":
            return this.getHeading()
          case "World City Populations 2022":
            return this.getSubHeading()
          case "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:":
            return this.getCityParagraph()     
        }
      }
    ​
      
    }
    ​
    ​
    module.exports = ProjectPagination