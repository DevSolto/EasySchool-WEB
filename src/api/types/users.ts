export type User = {
  id: string
  avatarUrl: string
  name: string
  cpf: string
  role: "STUDENT" | "TEACHER" | "ADMIN"
  password: string
  salt: string
  createdAt: string
  updatedAt: string
}

export type Pagination = {
  total: number
  offset: number
  limit: number
}

export type UserResponse = {
  data: User[]
  pagination: Pagination
}

export type Filter = {
  student:boolean
  admin:boolean
  teacher:boolean
}
