class UserController {
  constructor() {}

  sayHello(req, res) {
    return res.send({ message: "Hello World" });
  }
}

module.exports = UserController;
