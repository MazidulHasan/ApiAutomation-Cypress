/// <reference types="cypress"/>

const payloadPutUser = require("../payloads/put_user.json")

function updateUSer(userId) {
    return cy.request({
        method:"PUT",
        url:`https://fakerestapi.azurewebsites.net/api/v1/Users/${userId}`,
        failOnStatusCode: false,
        body: payloadPutUser
    }).then((response)=>{
        expect(response.body).to.be.not.null;
        expect(response.body).to.be.not.empty;
    })
}
export {updateUSer}