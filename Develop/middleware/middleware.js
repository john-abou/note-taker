// Make a function that logs the request method and the request path
const logReqs = (req, res, next) => {
    switch(req.method) {
        case "GET": {
            console.info(`${request.method} request made to ${request.path}`);
        }
        case "POST": {
            console.info(`${request.method} request made to ${request.path}`);
        }
        case "DELETE": {
            console.info(`${request.method} request made to ${request.path}`);
        }
        default:
            console.log(`${request.method} request made to ${request.path}`)
    }

    // Call next so the server continues to the requested path after logging the request information
    next();
}