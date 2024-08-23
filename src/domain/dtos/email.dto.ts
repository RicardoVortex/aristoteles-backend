export interface SendEmailOptionsDto {
  
    readonly to: string,
    readonly template: string,
    readonly subject: string,
    readonly data: any
  
}

export interface SendRecoveryDto {
  
    readonly name: string,
    readonly url: string,
    readonly to: string,
    readonly code: string
  
}
