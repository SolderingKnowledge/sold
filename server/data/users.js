import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sean Parker',
    email: 'sean@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Craid David',
    email: 'craig@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users