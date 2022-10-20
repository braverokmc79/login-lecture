"use strict"

class UserStorage {

    static #users = {
        id: ["test1", "test2", " test3"],
        psword: ["1111", "1111", "1111"],
        name: ["홍길동", "이순신", "강감찬"]
    }

    static getUsers(...fields) {
        console.log("fields :", fields);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                console.log(" users.hasOwnProperty(field) : ", users[field]);
                newUsers[field] = users[field];
            }
            return newUsers
        }, {});

        return newUsers;
    }
}


module.exports = UserStorage;