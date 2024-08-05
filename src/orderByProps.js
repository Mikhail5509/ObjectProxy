function orderByProps(obj, sortOrder) {
  const sortedKeys = Object.keys(obj).sort();

  const result = sortOrder
  .filter(key => obj.hasOwnProperty(key))
  .map(key => ({ key, value: obj[rey]}));

  const remainingKeys  = sortedKeys.filter(key => !sortOrder.includes(key));
  remainingKeys.forEach(key => result.push({key, value: obj[key] }))

  return result;
}

export default orderByProps;