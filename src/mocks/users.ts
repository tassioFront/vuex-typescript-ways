import User from '@/models/User'

export const users: User[] = [
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'alejandra',
      last: 'rodrigues'
    },
    email: 'alejandra.rodrigues@example.com',
    image: 'https://randomuser.me/api/portraits/women/18.jpg'
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'armando',
      last: 'da cruz'
    },
    email: 'armando.dacruz@example.com',
    image: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
  {
    gender: 'female',
    name: {
      title: 'miss',
      first: 'alda',
      last: 'barbosa'
    },
    email: 'alda.barbosa@example.com',
    image: 'https://randomuser.me/api/portraits/women/92.jpg'
  },
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'marilene',
      last: 'da rocha'
    },
    email: 'marilene.darocha@example.com',
    image: 'https://randomuser.me/api/portraits/women/31.jpg'
  },
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'ariela',
      last: 'nunes'
    },
    email: 'ariela.nunes@example.com',
    image: 'https://randomuser.me/api/portraits/women/46.jpg'
  }
]
