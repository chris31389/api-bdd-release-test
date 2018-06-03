var { Given, When, Then } = require('cucumber');
const assert = require('assert');
const request = require('request');
const targetUrl = process.env.targetUrl;

Given('a post id of {int}', function (input) {
    id = input;
});

When('I get a single post', function (callback) {
    if (!targetUrl) throw "you need to set the 'targetUrl' env variable.  e.g. $env:targetUrl='http://localhost:3000'";
    request.get(`${targetUrl}/posts/${id}`, (err, response, body) => {
        if (err) {
            callback(err);
        }
        else {
            apiResponse = response;
            callback();
        }
    })
})

Then('it is successful', function () {
    isSuccess = apiResponse.statusCode >= 200 && apiResponse.statusCode < 300;
    assert.equal(isSuccess, true);
});