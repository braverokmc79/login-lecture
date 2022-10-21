"use strict"

const UserStorage = require("./UserStorage");

class User {

    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;

        UserStorage.getUserInfo(client.id, function (data) {
            console.log("3. 콜백 : ", data);

            const id = data.id;
            const psword = data.psword;

            if (id) {
                if (id === client.id && psword === client.psword) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디 입니다." };
        }
        );

        console.log("4. result :111 ");
    }

    register() {
        const client = this.body;
        return UserStorage.save(client);
    }

}

module.exports = User;