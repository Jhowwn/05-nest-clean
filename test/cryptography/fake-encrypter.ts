import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'

export class FakeEncrypter implements Encrypter {
  async encrypt(playload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(playload)
  }
}
