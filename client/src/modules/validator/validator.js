//@todo вынести в конфиг

const VALIDATOR_ERRORS = {
  REQUIRED: { message: 'Поле не должно быть пустым' },
  EMAIL: { message: 'Неверный формат e-mail' },
};

const VALIDATOR_PATTERNS = {
  EMAIL: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};

class Validator {
  validate(value, validations) {
    let isValid = true;
    let errors = [];

    validations.forEach(validation => {
      switch (validation) {
        case 'required':
          isValid = isValid && Boolean(value.toString().length);
          if (!isValid) {
            errors.push(VALIDATOR_ERRORS.REQUIRED);
          }
          break;
        case 'email':
          isValid = isValid && VALIDATOR_PATTERNS.EMAIL.test(value);
          if (!isValid) {
            errors.push(VALIDATOR_ERRORS.EMAIL);
          }
          break;
      }
    });

    return {
      isValid,
      errors,
    };
  }
}

export default new Validator();
