const supertest = require('supertest')
const app = require('../index')

let server
let request

beforeAll(done => {
  server = app.listen(done)
  request = supertest(server)
})

afterAll(done => {
  server.close(done)
})

test('test suite works', () => {
  expect(1).toBe(1)
})

// test("test endpoint path works", () => {
//   return request.get("/api/test").then(response => {
//     expect(response.statusCode).toBe(200);
//   });
// });
