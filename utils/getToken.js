import axios from "axios";

let token;
const response = await axios.post(
    `http://member-api.appworks.local/api/v1/client/login`,
    {
        username: "Stlish",
        password: "stylish123",
    }
);

console.log(response.data);
token = response.data.data.access_token;

export default token;
