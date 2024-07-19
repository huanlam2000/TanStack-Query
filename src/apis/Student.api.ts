import { Student, Students } from 'types/student.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string) =>
  http.get<Students>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })

export const getStudent = (id: number | string, options?: { signal: AbortSignal }) =>
  http.get<Student>(`students/${id}`, { signal: options?.signal })

export const addStudent = (student: Omit<Student, 'id'>) => http.post<Student>('/students', student)

export const updateStudent = (id: number | string, student: Student) => http.put<Student>(`/students/${id}`, student)

export const deleteStudent = (id: number | string) => http.delete<Student>(`/students/${id}`)
