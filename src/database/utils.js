const path = require("path");
const fs = require("fs");

const saveToDatabase = (DB) => {
    fs.writeFileSync(
        path.resolve("./src/database/db.json"),
        JSON.stringify(DB, null, 2),
        {
            encoding: "utf-8",
        }
    );
};

module.exports = { saveToDatabase };