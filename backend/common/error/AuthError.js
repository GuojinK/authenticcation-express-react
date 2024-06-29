const BaseError = require("./BaseError");

class AuthError extends BaseError {
    constructor(message) {
      super('AuthError', 400, message, true);
    }
  }
module.exports = AuthError