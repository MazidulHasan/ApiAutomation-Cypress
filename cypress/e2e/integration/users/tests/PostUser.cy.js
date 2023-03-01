import * as POSTUser from "../requests/PostUserReq"

describe('Post User', () => {
    it('Add New user', () => {
        POSTUser.newUser().should((response)=>{
            console.log(response.body);
            expect(response.body).to.be.not.null;
            expect(response.body).to.be.not.empty;

            expect(response.status).to.equal(200);
            expect(response.body.id).to.eq(101);
            expect(response.body.userName).to.eq("TestName");
            expect(response.body.password).to.eq("TestPassword");
        })
    });

    it.only("Try to add a invalid user", () => {
        POSTUser.newInvalidUser().should((response) => {
          expect(response.status).to.eq(400);
          expect(response.body.title).to.eq("One or more validation errors occurred.")
        });
    });

});