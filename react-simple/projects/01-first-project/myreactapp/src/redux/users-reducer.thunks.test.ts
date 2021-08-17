import { follow } from './users-reducer'

test('', () => {
  const thunk = follow(1)
  thunk(null)
})
