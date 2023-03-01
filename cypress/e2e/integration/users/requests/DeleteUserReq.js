/// <reference types="cypress"/>

function deleteUser(userId) {
    return cy.request({
        method:"DELETE",
        url:`https://fakerestapi.azurewebsites.net/api/v1/Users/${userId}`,
        faliOnStatusCode: false
    }).then((response)=>{
        expect(response.body).to.be.not.null;   
    })
}
export {deleteUser}