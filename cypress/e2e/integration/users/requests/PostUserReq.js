/// <reference types="cypress"/>

const payloadAddUser = require("../payloads/add_user.json")
const payloadInvalidUser = require("../payloads/add_invalid_user.json")

function newUser(){
    return cy.request({
        method:"Post",
        url: "https://fakerestapi.azurewebsites.net/api/v1/Users",
        body: payloadAddUser
    })
}
export{newUser}

function newInvalidUser(){
    return cy.request({
        method:"Post",
        url: "https://fakerestapi.azurewebsites.net/api/v1/Users",
        failOnStatusCode: false,
        body: payloadInvalidUser
    })
}
export{newInvalidUser}
