import crypto from 'crypto'

export default function Hasher(password){
    const salt = "A random secret"
    const hash = crypto.createHmac('sha256', salt)
                        .update(password)
                        .digest('hex')
    return hash
}