const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'

const createPassword = (length = 8, hasNumbers = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ''
    return generatePassword(length, chars)
}



const generatePassword = (length, chars) => {
    let password = ''
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports = createPassword
