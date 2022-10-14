export const idGenerator = () => {
  let list = [
    {
      id: 0,
      text: "Hello",
      done: false
    },
    {
      id: 2,
      text: "Hello",
      done: false
    }
  ]

  for(let i = 0; i < list.length; i++) {
    list[0].id = 1
    let newId = Math.max(list[i].id) + 1
  }
}