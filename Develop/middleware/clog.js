// Make a function that logs the request method and the request path
const clog = (req, res, next) => {
    switch(req.method) {
        case "GET": {
            console.info(`${req.method} request made to ${req.path}`);
        }
        case "POST": {
            console.info(`${req.method} request made to ${req.path}`);
        }
        case "DELETE": {
            console.info(`${req.method} request made to ${req.path}`);
        }
        default:
            console.log(`${req.method} request made to ${req.path}`)
    }

    // Call next so the server continues to the requested path after logging the request information
    next();
};

exports.clog = clog;