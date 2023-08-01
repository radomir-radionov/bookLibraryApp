class UserHandlers {
  async test(ctx) {
    const a = 1
    console.log(1)
    ctx.body = a
  }

  async createUser(ctx) {
    console.log(ctx.body)
  }
}

export default new UserHandlers()
