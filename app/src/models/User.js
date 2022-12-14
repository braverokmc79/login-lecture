"use strict"
const UserStorage = require("./UserStorage");
class User {

    constructor(body) {
        this.body = body;
    }

    async login() {
        try {
            const client = this.body;
            const { id, psword } = await UserStorage.getUserInfo(client.id);

            if (id) {
                if (id === client.id && psword === client.psword) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디 입니다." };

        } catch (err) {
            return { success: false, err }
        }

    }

    async register() {
        try {
            const client = this.body;
            return await UserStorage.save(client);
        } catch (err) {
            return { success: false, err }
        }

    }

}

module.exports = User;