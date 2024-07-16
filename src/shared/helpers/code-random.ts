import { customAlphabet } from "nanoid";

export const codeRandom = (size: number) => {
  const nanoid = customAlphabet("1234567890abcdefghijklmnñopqrstwxyz", size);

  return nanoid();
};
