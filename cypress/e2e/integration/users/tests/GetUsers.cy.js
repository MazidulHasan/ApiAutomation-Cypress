/// <reference types="cypress" />

import * as GETUsers from  "../requests/GetUserReq";

describe('Get Users', () => {
    it('Get Users List', () => {
        GETUsers.userList().should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null;
            expect(response.body).to.be.not.empty;
            console.log(response.body);
        })
    });
});