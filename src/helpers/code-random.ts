
import {  customAlphabet } from 'nanoid'
// import shortid from 'shortid'

export const codeRandom = (size: number) => {
  const nanoid = customAlphabet("1234567890abcdefghijklmnñopqrstwxyz",6)

  return nanoid(6)
}
