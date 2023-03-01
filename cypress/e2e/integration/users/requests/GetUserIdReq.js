/// <reference types="cypress"/>

function userByID(userId) {
    return cy.request({
        method:"GET",
        url:`https://fakerestapi.azurewebsites.net/api/v1/Users/${userId}`
        // headers: { id: userId }
    }).then((response)=>{
        expect(response.body).to.be.not.null;
        expect(response.body).to.be.not.empty;
    })
}
export {userByID}