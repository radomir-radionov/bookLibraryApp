import {hash} from 'bcrypt'

const createHash = async (str) => {
  const saltRounds = 10
  const hashedString = await hash(str, saltRounds)
  return hashedString
}

export default createHash
