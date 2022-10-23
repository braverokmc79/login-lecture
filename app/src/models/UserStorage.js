"use strict"
//const fs = require("fs").promises;
const db = require("../config/db");
class UserStorage {
    /*
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
     */

    static async getUserInfo(id) {

        return new Promise((resolove, rejects) => {
            const query = "SELECT * FROM users WHERE id= ? ";
            db.query(query, [id], function (err, data) {
                if (err) return rejects(err);
                resolove(data.length === 0 ? false : data[0]);
            })
        });

    }


    static async save({ id, name, psword }) {

        return new Promise((resolove, rejects) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?,? ) ;";
            db.query(query, [id, name, psword], function (err) {
                if (err) return rejects(`${err}`);
                resolove({ success: true });
            })
        });
    }

}


module.exports = UserStorage;