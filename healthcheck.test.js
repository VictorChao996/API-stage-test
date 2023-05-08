import axios from "axios";
import SETTINGS from "./settings.js";
import token from "./utils/getToken.js";

describe(`healthcheck`, () => {
    it("should return 200 OK status", async () => {
        const response = await axios.get(
            `${SETTINGS.API_ENDPOINT}/healthcheck`
        );
        expect(response.data).toHaveProperty("status", "ok");
    });
});
