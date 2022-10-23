"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
    home: (req, res) => {
        logger(null, req, res);
        res.render("home/index");
    },

    login: (req, res) => {
        logger(null, req, res);
        res.render("home/login");
    },

    register: (req, res) => {
        logger(null, req, res);
        res.render("home/register");
    }
}


const process = {

    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        logger(response, req, res);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        logger(response, req, res);
    }

}

module.exports = {
    output,
    process
}


