const BaseError = require("./BaseError");

class UserExistError extends BaseError {
    constructor(message) {
      super('UserExistError', 400, message, true);
    }
  }
module.exports = UserExistError