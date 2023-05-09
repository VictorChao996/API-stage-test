import axios from "axios"

let token
// let url = "http://192.168.50.102/api/v1/client/login"
let url = "http://member-api.appworks.local/api/v1/client/login"
const response = await axios.post(url, {
    username: "Stlish",
    password: "stylish123"
})

console.log(response.data)
token = response.data.data.access_token

export default token
