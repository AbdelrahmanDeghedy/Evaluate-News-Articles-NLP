import 'babel-polyfill'

const request = require('supertest')
const { app } = require('../index')

describe('API Testing', () => {
  test('It Should return an error 404, because /api endpoint is a POST not GET', (done) => {
    request(app)
      .get('/api')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
})
