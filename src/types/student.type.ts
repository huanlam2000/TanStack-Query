export interface Student {
  id: number
  firstName: string
  lastName: string
  email: string
  gender: string
  country: string
  avatar: string
  btc_address: string
}

export type Students = Pick<Student, 'avatar' | 'id' | 'email' | 'lastName'>[]
