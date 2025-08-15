import Hasher from "../utils/passwordHasher.js"

const users = []

export async function Login(req, res){
    const body = req.body
    const {email, password} = body
    if (!email || !password){
        throw {
            code: 401,
            message: "Please provide your login credentials"
        }
    }
    const user = users.find(
        user => user.userEmail === email
    )
    if (!user){
        throw {
            code: 404,
            message: "User not found"
        }
    }
    const isPasswordValid = user.secret === Hasher(password)
    if (!isPasswordValid){
        throw {
            code: 401,
            message: "Invalid credential"
        }
    }
    const {secret, ...userWithoutPassword} = user
    res.send({
        message: "Login successful",
        user: userWithoutPassword
    })
}
export async function GetUsers(req, res){
    res.send(users)
}
export async function RegisterUser(req, res){
    const body = req.body
    const id = Math.floor(100000 + Math.random() * 90000)
    const {name, email, password, role} = body
    if (!name || !email || !password || !role){
        throw{
            status: 401,
            message: "Please provide the required fields i.e: name, email, password and role"
        }
    }
    const hashedPassword = Hasher(password)
    const user = {
        id: id,
        name: name,
        userEmail: email,
        secret: hashedPassword,
        role: role
    }
    users.push(user)
    const { secret, ...userWithoutPassword} = user
    res.send({
        message: "User created successfully",
        user: userWithoutPassword
    })
}
export async function GetUserById(req, res){
    const id = parseInt(req.params.id)
    const user = users.find(
        user => user.id === id
    )
    if (!user){
        throw {
            code: 404,
            message: "User not found"
        }
    }
    const {secret, ...userWithoutPassword} = user
    res.send({
        message: "User found successfully",
        user: userWithoutPassword
    })
}
export async function ForgotPassword(req, res){
    const body = req.body
    const { email } = body
    const user = users.find(
        user => user.userEmail === email
    )
    if (!user){
        throw {
            code: 400,
            message: "user not found"
        }
    }
    const userIdx = users.findIndex((user) => user.userEmail === email)
    const userWithCode = {...user, resetCode: Math.floor(100000 + Math.random() * 90000), expiresAt: Date.now() + 10 * 60 * 1000 }
    users[userIdx] = userWithCode
    res.status(200).send(userWithCode)
}
export async function ResetPassword(req, res){
    const body = req.body
    const { resetCode, email, newPassword } = body
    if (!resetCode || !email || !newPassword){
        throw {
            code: 400,
            message: "Please provide email, reset code and new password"
        }
    }
    const user = users.find(
        user => user.userEmail === email
    )
    if (!user){
        throw {
            code: 404,
            message: "user not found"
        }
    }
    if (!user.resetCode || !user.expiresAt){
        throw {
            code: 400,
            message: "Please request for a code before trying to reset password"
        }
    }
    if (Date.now() > user.expiresAt){
        throw {
            code: 400,
            message: "The reset code has expired"
        }
    }
    const userIdx = users.findIndex((user) => user.userEmail === email)
    if (user.resetCode === resetCode){
        users[userIdx].secret = Hasher(newPassword)
        users[userIdx].resetCode = null
        users[userIdx].expiresAt = null
    }
    res.status(200).send({
        message: "Password reset was successfull",
        user: users[userIdx]
    })
}
export async function UpdateUser(req, res){
    const body = req.body
    const { name } = body
    const id = parseInt(req.params.id)
    if (!name || !id){
        throw {
            code: 400,
            message: "please provide name and ID"
        }
    }
    const user = users.find(user => user.id === id)
    if (!user){
        throw {
            code: 404,
            message: "User not found"
        }
    }
    user.name = name
    const {secret, ...userWithoutPassword} = user
    res.status(200).send({
        message: 'User updated successfully',
        user: userWithoutPassword
    })
}
export async function DeleteUser(req, res){
    const body = req.body
    const { email } = body 
    if (!email){
        throw {
            code: 500,
            message: "Please provide the email of the user you want to delete"
        }
    }
    const index = users.findIndex(
        user => user.userEmail === email
    )
    if (!index){
        throw{
            code: 404,
            message: "Couldnt find the user with the provided email address"
        }
    }
    users.splice(index, 1)
    res.status(200).send("User deleted successfuly")
}