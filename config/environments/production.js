module.exports = {
  PORT: process.env.PORT,
  DB: {
    username: "postgres",
    password: "postgres",
    database: "school_prod",
    host: "localhost",
    dialect: "postgres",
  },
};
