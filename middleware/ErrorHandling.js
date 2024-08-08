function errorHandling(err, req, res, next) {
    if (err || res.statusCode >= 400) {
        res.json(
            {
                status: err.status ||
                    res.statusCode || 500,
                err: "An error occurred, please try again later"
            }
        )
    }
    next()
}
 export{
    errorHandling
 }