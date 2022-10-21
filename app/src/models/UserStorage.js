"use strict"
const fs = require("fs").promises;
class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);

        const userKeys = Object.keys(users);  //=>[id,psword, name] => 키값만 배열로 변환처리
        console.log(" userKeys(id) :  ", userKeys);

        const userInfo = userKeys.reduce((newUser, info) => {
            console.log(" info : ", info);
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                console.log(" users.hasOwnProperty(field) : ", users[field]);
                newUsers[field] = users[field];
            }
            return newUsers
        }, {});
        return newUsers;
    }


    static getUsers(isAll, ...fields) {
        console.log("fields :", fields); //[id,psword, name]
        return fs.readFile("./src/databases/users.json").then((data) => {
            return this.#getUsers(data, isAll, fields);
        }).catch(console.error);
    }


    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json").
            then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }


    static async save(userInfo) {
        const users = await this.getUsers(true);

        console.log(" save  :", users);
        if (users.id.includes(userInfo.id)) {
            console.log(" 아이디 존재");
            return { success: false, msg: "이미 존재하는 아이디입니다." };
        }

        users.id.includes(userInfo.id)
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true }
    }

}


module.exports = UserStorage;