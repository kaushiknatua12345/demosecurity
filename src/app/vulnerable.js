// Vulnerable JavaScript file for CodeQL testing

// SQL Injection vulnerability
function unsafeQuery(userInput) {
  const query = "SELECT * FROM users WHERE name = '" + userInput + "'";
  return query;
}

// XSS vulnerability
function displayMessage(message) {
  document.body.innerHTML = message;
}

// Command injection
function executeCommand(cmd) {
  eval(cmd);
}

// Path traversal
function readFile(filename) {
  const fs = require('fs');
  return fs.readFileSync('./data/' + filename);
}

// Hardcoded credentials
const API_KEY = "super-secret-api-key-12345";
const password = "admin123";

// Insecure random
function generateToken() {
  return Math.random().toString(36);
}

// Prototype pollution
function merge(target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
  return target;
}

module.exports = {
  unsafeQuery,
  displayMessage,
  executeCommand,
  readFile,
  API_KEY,
  generateToken,
  merge
};
