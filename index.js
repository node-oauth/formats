'use strict';
/* eslint-disable no-control-regex */

/**
 * Validation rules.
 * @private
 */

const rules = {
  NCHAR: /^[\u002D\u002E\u005F\w]+$/,
  NQCHAR: /^[\u0021\u0023-\u005B\u005D-\u007E]+$/,
  NQSCHAR: /^[\u0020-\u0021\u0023-\u005B\u005D-\u007E]+$/,
  UNICODECHARNOCRLF: /^[\u0009\u0020-\u007E\u0080-\uD7FF\uE000-\uFFFD]+$/,
  UNICODECHARNOCRLF_EXTENDED: /^[\u{10000}-\u{10FFFF}]+$/u,
  URI: /^[a-zA-Z][a-zA-Z0-9+.-]+:/,
  VSCHAR: /^[\u0020-\u007E]+$/
};

/* eslint-enable no-control-regex */

/**
 * Ensure the value is a string.
 * @param s {any} the value to be checked
 * @throws {TypeError} if the value is not a string
 */
const ensureString = (s) => {
  const t = typeof s;
  if (t !== 'string') {
    throw new TypeError('Value must be a string');
  }
};

/**
 * Minimal, RFC 6749, compliant unicode validator.
 * @see https://datatracker.ietf.org/doc/html/rfc6749#appendix-A
 */
const isFormat = {

  /**
   * Validate if a value matches a unicode character.
   *
   * @see https://tools.ietf.org/html/rfc6749#appendix-A
   * @value {string} the value to be validated
   * @return {boolean} true, if valid, otherwise false
   */

  nchar: function(value) {
    ensureString(value);
    return rules.NCHAR.test(value);
  },

  /**
   * Validate if a value matches a unicode character, including exclamation marks.
   *
   * @see https://tools.ietf.org/html/rfc6749#appendix-A
   * @value {string} the value to be validated
   * @return {boolean} true, if valid, otherwise false
   */

  nqchar: function(value) {
    ensureString(value);
    return rules.NQCHAR.test(value);
  },

  /**
   * Validate if a value matches a unicode character, including exclamation marks and spaces.
   *
   * @see https://tools.ietf.org/html/rfc6749#appendix-A
   * @value {string} the value to be validated
   * @return {boolean} true, if valid, otherwise false
   */

  nqschar: function(value) {
    ensureString(value);
    return rules.NQSCHAR.test(value);
  },

  /**
   * Validate if a value matches a unicode character excluding the carriage
   * return and linefeed characters.
   *
   * @see https://tools.ietf.org/html/rfc6749#appendix-A
   * @value {string} the value to be validated
   * @return {boolean} true, if valid, otherwise false
   */

  uchar: function(value) {
    ensureString(value);
    // manually test \u10000-\u10FFFF
    if (rules.UNICODECHARNOCRLF.test(value)) {
      return true;
    }

    return rules.UNICODECHARNOCRLF_EXTENDED.test(value);
  },

  /**
   * Validate if a value matches generic URIs.
   *
   * @see http://tools.ietf.org/html/rfc3986#section-3
   * @value {string} the value to be validated
   * @return {boolean} true, if valid, otherwise false
   */
  uri: function(value) {
    ensureString(value);
    return rules.URI.test(value);
  },

  /**
   * Validate if a value matches against the printable set of unicode characters.
   *
   * @see https://tools.ietf.org/html/rfc6749#appendix-A
   * @value {string} the value to be validated
   * @return {boolean} true, if valid, otherwise false
   */

  vschar: function(value) {
    ensureString(value);
    return rules.VSCHAR.test(value);
  }
};

/**
 * Export validation functions.
 */
module.exports = isFormat;