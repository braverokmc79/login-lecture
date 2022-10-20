"use strict"

class UserStorage {

    static #users = {
        id: ["test1", "test2", " test3"],
        psword: ["1111", "1111", "1111"],
        name: ["홍길동", "이순신", "강감찬"]
    }

    static getUsers(...fields) {
        console.log("fields :", fields); //[id,psword, name]
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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);  //=>[id,psword, name] => 키값만 배열로 변환처리

        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;

        }, {});
        return userInfo;
    }

}


module.exports = UserStorage;