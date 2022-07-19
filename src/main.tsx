/**
 * @Author: Tomonori
 * @Date: 2020/2/25 17:03
 * @Title:
 * @Desc: ↓ ↓ ↓ ↓ ↓
 * -----
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import Axios from "axios";

import App from "./App";

import "./assets/css/index.styl"

console.log(`
 _______                                     _ 
|__   __|                                   (_)
   | | ___  _ __ ___   ___  _ __   ___  _ __ _ 
   | |/ _ \\| '_ \` _ \\ / _ \\| '_ \\ / _ \\| '__| |
   | | (_) | | | | | | (_) | | | | (_) | |  | |
   |_|\\___/|_| |_| |_|\\___/|_| |_|\\___/|_|  |_|
`);
console.info("e-mail: gutrse3321@live.com");

Axios.interceptors.response.use(
    resp => {
        console.log('%c█ url    = ' + resp.config.url, 'background: rgba(0, 128, 0, 0.1); color: green');
        console.log('%c█ status = ' + resp.status, 'color: green');
        console.log('%c█ data   =', 'color: green', resp.data);

        if (resp.data.code != 200) {
            if (resp.data.hasOwnProperty('fields')) {
                for (const key in resp.data.fields) {
                    if (resp.data.fields.hasOwnProperty(key)) {
                        const element = resp.data.fields[key]
                        return Promise.reject(key + element)
                    }
                }
            } else {
                return Promise.reject(resp.data.message)
            }
        }
        return resp
    },
    err => Promise.reject(err),
)

const root = document.getElementById("app");
ReactDOM.render(
    <App />,
    root
);
