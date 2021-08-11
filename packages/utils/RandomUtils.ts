export class RandomUtils {

    static randomEmail(): string {
      return `autotest+${new Date().getTime()}@gmail.com`
    }
}