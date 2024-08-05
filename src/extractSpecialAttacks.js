function extractSpecialAttacks(character) {
  const { special = [] } = character;
  return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
    id,
    name,
    description,
    icon,
  }));
}

export default extractSpecialAttacks;