
/* eslint-disable */

const CREDENTIALS = {
  booking: '123456',
  ssn: '197203172452',
  password: '12345'
}

export const mockToken = ({ loginType, ...rest }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (rest[loginType] === CREDENTIALS[loginType] && rest.password === CREDENTIALS.password) {
      return resolve({
        'access_token': 'some_token',
        'expires_in': 315360000,
        'id': 52,
        'group': 'Users',
        'full_name': 'Ishrak Ibne Imam',
        'first_name': 'Ishrak',
        'last_name': 'Ibne Imam',
        'image': ''
      })
    } else {
      return reject('Invalid login attempt')
    }
  }, 2000)
})

export const mockSSNData = () => new Promise(resolve => {
  setTimeout(() => {
    return resolve({
      ssn: '',
      firstName: 'Ishrak',
      lastName: 'Ibne Imam',
      address: '83/1 East Rajabazar, Farmgate',
      zip: '23637',
      city: 'Dhaka',
      email: 'ishrak@cefalo.com'
    })
  }, 2000)
})
