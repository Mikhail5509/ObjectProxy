import orderByProps from "../orderByProps";

test('should return properties in specified order and then alphabetically', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const sortOrder = ['name', 'level'];

  const result = orderByProps(obj, orderByProps);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ])
})