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

    static getUsers(...fields) {
        // console.log("fields :", fields); //[id,psword, name]
        // const users = this.#users;

        // const newUsers = fields.reduce((newUsers, field) => {

        //     if (users.hasOwnProperty(field)) {
        //         console.log(" users.hasOwnProperty(field) : ", users[field]);
        //         newUsers[field] = users[field];
        //     }
        //     return newUsers
        // }, {});

        // return newUsers;
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json").
            then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }


    static save(userInfo) {
        // try {
        //     const users = this.#users;
        //     users.id.push(userInfo.id);
        //     users.name.push(userInfo.name);
        //     users.psword.push(userInfo.psword);

        //     console.log("회원가입 :", users);
        //     return { success: true, msg: "회원 가입을 축합니다." }
        // } catch (err) {
        //     console.error("에러 : ", err);
        //     return { success: false, msg: "회원 가입에 실패했습니다." }
        // }
    }

}


module.exports = UserStorage;