// Make a function that logs the request method and the request path
const clog = (req, res, next) => {
    switch(req.method) {
        case "GET": {
            console.info(`${req.method} request made to ${req.path}`);
            break;
        }
        case "POST": {
            console.info(`${req.method} request made to ${req.path}`);
            break;
        }
        case "DELETE": {
            console.info(`${req.method} request made to ${req.path}`);
            break;
        }
        default:
            console.log(`${req.method} request made to ${req.path}`);
            break;
    }

    // Call next so the server continues to the requested path after logging the request information
    next();
};

exports.clog = clog;