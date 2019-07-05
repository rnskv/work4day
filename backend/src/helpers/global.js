export const removeUndefinedFromObject = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const toNum = (string) => {
  if (string === undefined || string === null || string === NaN) {
    return undefined
  } else {
    return Number(string)
  }
};
