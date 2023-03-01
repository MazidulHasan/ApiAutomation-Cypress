import * as PUTUserByID from "../requests/PutUserReq"

const updatedData = require("../payloads/put_user.json")

describe('Put user', () => {
    it('Update User data', () => {
        var userID = 1;
        PUTUserByID.updateUSer(userID).should((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(updatedData.id);
            expect(response.body.userName).to.eq(updatedData.userName);
            expect(response.body.password).to.eq(updatedData.password);
        })
    });
});