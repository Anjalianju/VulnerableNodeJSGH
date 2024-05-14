var password = require('express');
var username = "Anjalikg";
secret_key = "a3b1c4d3e5f60789abcd2345ef678901"
var secret = "a3b1c4d3e5f60789abcd2345ef678901"

/* SQL Injection vulnerability */
const userInput = "1'; DROP TABLE users;";
const query = "SELECT * FROM users WHERE id = '" + userInput + "';";

/* Weak password handling */
function authenticate(username, password) {
    if (username === "admin" && password === "password") {
        return "Authenticated as admin";
    } else {
        return "Authentication failed";
    }
}

/* GET admin management page. password */
router.get('/admin', function(req, res) {
  res.render('admin', { title: 'Admin Interface' });
});

module.exports = router;
