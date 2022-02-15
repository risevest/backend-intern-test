const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Helper = {
  /**
   * Hash Password Method
   * @param {string} password
   * @returns {string} returns hashed password
   */
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },
  /**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },

  /**
   * Generate Token
   * @param {string} id
   * @returns {string} token
   */

  generateToken(payload) {
    const token = jwt.sign({ payload }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
  },

  /**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  /**
   * isNumeric helper method
   * @param {string} phoneNumber
   * @returns {Boolean} True or False
   */
  isNumeric(num) {
    return !isNaN(num);
  },
};

module.exports = Helper;
