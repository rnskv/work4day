export const removeEmptyValuesFromObject = (obj) => {
  let result = {};
  Object.keys(obj).forEach((key, index) => {
    if (obj[key] !== undefined && obj[key] !== null) {
      result[key] = obj[key];
    }
  });
  console.log(result);
  return result;
};

export const toNum = (string) => {
  if (string === undefined || string === null || isNaN(string)) {
    return undefined
  } else {
    return Number(string)
  }
};

export const toBool = (value) => {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false
  }

  return Boolean(value)
};
