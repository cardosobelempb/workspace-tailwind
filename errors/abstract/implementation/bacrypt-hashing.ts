import { BcryptHashing } from "../bacrypt-hashing";

class BcryptHasher extends BcryptHashing {
  verifyPassword(password: string, hash: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  genSaltSync(saltRounds: number): Promise<string> {
    throw new Error("Method not implemented.");
  }
  hashSync(plain: string, salt: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  compare(plain: string, hash: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  hash(plain: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
  generateSalt(saltRounds: number): string {
    throw new Error("Method not implemented.");
  }
}

export { BcryptHasher, BcryptHashing };
