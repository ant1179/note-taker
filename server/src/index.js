const express = require("express");
const i18n = require("i18n");
require("./database");
const routes = require("./routes");
const logger = require("./config/logger.config");

const app = express();

i18n.configure({
    locales: ["fr"],
    defaultLocale: "fr",
    directory: __dirname + "/i18n",
});
app.use(i18n.init);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.all("*", (req, res) => {
    res.status(404).end();
});

app.listen(process.env.PORT);
logger.info(`Server is running on port ${process.env.PORT}`);