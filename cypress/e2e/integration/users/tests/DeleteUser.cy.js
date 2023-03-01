import * as DeleteUserByID from "../requests/DeleteUserReq"

describe('Delete user', () => {
    it('Delete User data', () => {
        var userID = 7;
        DeleteUserByID.deleteUser(userID).should((response)=>{
            expect(response.status).to.eq(200);
        })
    });
});