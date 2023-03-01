import * as GETUserByID from "../requests/GetUserIdReq"

describe('Get User by ID', () => {
    it('Get a user', () => {
        var userID = 1;
        GETUserByID.userByID(userID).should((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(userID);
            expect(response.body.userName).to.eq("User 1");
            expect(response.body.password).to.eq("Password1");
        })
    });
});