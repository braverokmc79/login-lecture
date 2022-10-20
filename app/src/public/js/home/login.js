"use strict"
const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

async function login() {
    const req = {
        id: id.value,
        psword: psword.value
    }

    const result = fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then(res => res.json())
        .then(res => res)
    console.log("result : ", result);
}
