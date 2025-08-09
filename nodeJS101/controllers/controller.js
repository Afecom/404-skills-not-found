exports.home = (req, res) => {
    res.send("hello world")
}

exports.login = (req, res) => {
    const body = req.body
    console.log(body)
    res.send({
        message: "User created successfully",
        user: body
    })
}

exports.about = (req, res) => {
    res.send("this is the about page")
}

exports.contact = (req, res) => {
    res.send("this is the contact page")
}