export class SendEmailOptionsDto {
  private constructor(
    public readonly to: string,
    public readonly template: string,
    public readonly subject: string,
    public readonly data: any
  ) {}
}

export class SendRecoveryDto {
  private constructor(
    public readonly name: string,
    public readonly url: string,
    public readonly to: string,
    public readonly code: string
  ) {}
}
