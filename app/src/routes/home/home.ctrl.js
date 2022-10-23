"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger");
const parseurl = require('parseurl');


const output = {
    home: (req, res) => {
        resultLog(null, req, res);
        res.render("home/index");
    },

    login: (req, res) => {
        resultLog(null, req, res);
        res.render("home/login");
    },

    register: (req, res) => {
        resultLog(null, req, res);
        res.render("home/register");
    }
}


const process = {

    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();

        resultLog(response, req, res);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();

        resultLog(response, req, res);
    }

}

module.exports = {
    output,
    process
}


//로그 처리 및 결과값 반환처리
const resultLog = (response, req, res) => {
    const url = {
        method: req.method,
        path: parseurl(req).pathname,
        status: (response !== null ? response.err : false) ? 400 : 200,
    };

    if (response === null) {
        logger.info(`${url.method} |  ${url.path} 화면 | Request Query : ${JSON.stringify(req.query)} `);
        return;
    }

    let result = false;

    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} | Request Body : ${JSON.stringify(req.body)}  |  msg | ${response.err}`
        );

        result = true;
    } else {

        logger.info(
            `${url.method} ${url.path} ${url.status} Response: ${response.success}  | Request Body : ${JSON.stringify(req.body)}  |   msg | ${response.msg || ""}`
        );
        result = false;
    }

    if (result) return res.status(400).json({ msg: response.err.toString() });
    return res.status(200).json(response);
};
