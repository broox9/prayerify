const Sequelize = require("sequelize");
const path = require("path");

const creds_path = path.join(process.env.CREDENTIALS_PATH, "./db.json");
const { bibleql } = require(creds_path);
const dbcreds =
  process.env.NODE_ENV === "production" ? bibleql.aws : bibleql.local;

const sequelize = new Sequelize(dbcreds.db, dbcreds.user, dbcreds.pwd, {
  host: dbcreds.host,
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
  // storage: //set the cloud storage url here
});

module.exports = sequelize;
