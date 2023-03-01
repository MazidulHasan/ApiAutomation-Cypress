/// <reference types="cypress"/>

function userList() {
    return cy.request({
        method:"GET",
        url:"https://fakerestapi.azurewebsites.net/api/v1/Users"  
    })
}
export {userList}