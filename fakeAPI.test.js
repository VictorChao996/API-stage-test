//! 測試不需要 openVPN 的 API

import axios from "axios";
// import SETTINGS from "./settings.js";
// import token from "./utils/getToken.js";

describe(`fakeAPI test`, () => {
    it("should return 200 OK status", async () => {
        console.log(
            `API endpoint: 'https://jsonplaceholder.typicode.com/todos/1'`
        );
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        // console.log(response);
        console.log(response.data);
        expect(response.data).toHaveProperty("id", 1);
        expect(response.data).toHaveProperty("userId", 1);
    });
});
