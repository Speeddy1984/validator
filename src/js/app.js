export default class Validator {
  validateUsername(username) {
    const re = /^[a-zA-Z](?!.*?[\d]{4,})[a-zA-Z\d_-]*[a-zA-Z]$/;
    if (username.match(re)) {
      return 'Имя пользователя корректно'
    } else {
      return 'Имя пользователя некорректно'
    }
  }
}