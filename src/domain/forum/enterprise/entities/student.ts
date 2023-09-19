import { Entity } from '@/core/entitites/entity'
import { UniqueEntityID } from '@/core/entitites/unique-entity-id'

interface StudendProps {
  name: string
  email: string
  password: string
}

export class Student extends Entity<StudendProps> {
  get name() {
    return this.name
  }

  get email() {
    return this.email
  }

  get password() {
    return this.password
  }

  static create(props: StudendProps, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }
}
