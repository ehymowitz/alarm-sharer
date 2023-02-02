export const ShallowEqual = <T extends Object>(
  object1?: T,
  object2?: T
): boolean => {
  if (!object1 || !object2) return false;

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key as keyof T] !== object2[key as keyof T]) {
      return false;
    }
  }
  return true;
};
