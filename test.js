const {User} = require('./models')

getUsers = async () => {
  const users = await User.find()
  console.log(users)
}

getUsers()
