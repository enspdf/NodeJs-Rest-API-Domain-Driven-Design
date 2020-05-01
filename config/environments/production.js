module.exports = {
  PORT: process.env.PORT,
  DB: {
    user: "postgres",
    password: "postgres",
    database: "school_prod",
    host: "localhost",
    dialect: "postgres",
  },
};
