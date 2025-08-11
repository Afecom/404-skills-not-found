export default function NotFoundHandler(req, res, next){
    res.status(404).json({
        statusCode: 404,
        message: "Oops, couldnt find the resource you are looking for",
    })
}