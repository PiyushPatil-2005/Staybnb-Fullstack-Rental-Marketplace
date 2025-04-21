class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        console.log(message)
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;