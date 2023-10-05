function generateCode() {
  const timestamp = new Date().getTime()
  const randomValue = Math.floor(Math.random() * 1000)

  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  let randomChars = ''
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomChars += characters.charAt(randomIndex)
  }

  const uniqueString = `${timestamp}${randomValue}${randomChars}`

  const hexString = Buffer.from(uniqueString).toString('hex')

  return hexString
}

export default generateCode
