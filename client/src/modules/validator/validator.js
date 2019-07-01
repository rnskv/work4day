class Validator {
  validate(value, validations) {
    let result = true;
    validations.forEach(validation => {
      switch (validation) {
        case 'required':
          result = result && Boolean(value.toString().length);
      }
    });

    return result;
  }
}

export default new Validator();
