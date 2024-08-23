export interface CreateRoleDto {
  
    readonly name: string,
    readonly description: string | null
  
}

export interface UpdateRoleDto {
  
    readonly name?: string,
    readonly description?: string
  
}
