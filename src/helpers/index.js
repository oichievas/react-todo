export const idGenerator = (todos) => {
  if (!todos.length) return 1

  return todos.reduce((prev, current) => {
    return prev > current.id ? prev : current.id
  }, 0) + 1
}
