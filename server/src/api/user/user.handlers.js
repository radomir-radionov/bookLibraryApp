class UserHandlers {
  async test(context) {
    const a = 1
    console.log(1)
    context.body = a
  }
}

export default new UserHandlers()
