import Validator from "../app"

test("test correct w/ only lat", () => {
    const validated = new Validator('useroleg');
    expect(validated.validateUsername('useroleg')).toEqual('Имя пользователя корректно');
  });

  test("test correct w/ lat + dig", () => {
    const validated = new Validator('user12oleg');
    expect(validated.validateUsername('user12oleg')).toEqual('Имя пользователя корректно');
  });

  test("test incorrect w/ lat + dig>3", () => {
    const validated = new Validator('user2212oleg');
    expect(validated.validateUsername('user2212oleg')).toEqual('Имя пользователя некорректно');
  });

  test("test incorrect w/ cyr ", () => {
    const validated = new Validator('олег');
    expect(validated.validateUsername('олег')).toEqual('Имя пользователя некорректно');
  });

  test("test incorrect w/ lat + begin with dig", () => {
    const validated = new Validator('11oleg');
    expect(validated.validateUsername('11oleg')).toEqual('Имя пользователя некорректно');
  });

  test("test incorrect w/ lat + ends with dig", () => {
    const validated = new Validator('oleg11');
    expect(validated.validateUsername('oleg11')).toEqual('Имя пользователя некорректно');
  });

  test("test incorrect w/ lat + begin with  -", () => {
    const validated = new Validator('-oleg');
    expect(validated.validateUsername('-oleg')).toEqual('Имя пользователя некорректно');
  });

  test("test incorrect w/ lat + ends with -", () => {
    const validated = new Validator('oleg-');
    expect(validated.validateUsername('oleg-')).toEqual('Имя пользователя некорректно');
  });

  test("test incorrect w/ lat + begin with  _", () => {
    const validated = new Validator('_oleg');
    expect(validated.validateUsername('_oleg')).toEqual('Имя пользователя некорректно');
  });

  test("test incorrect w/ lat + ends with _", () => {
    const validated = new Validator('oleg_');
    expect(validated.validateUsername('oleg_')).toEqual('Имя пользователя некорректно');
  });