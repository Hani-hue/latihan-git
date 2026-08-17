// Model sederhana, masih pakai in-memory array dulu
let items = [
  { id: 1, name: 'Contoh Item 1' },
  { id: 2, name: 'Contoh Item 2' },
];

module.exports = {
  getAll: () => items,
  getById: (id) => items.find((item) => item.id === Number(id)),
  create: (data) => {
    const newItem = { id: Date.now(), ...data };
    items.push(newItem);
    return newItem;
  },
};
