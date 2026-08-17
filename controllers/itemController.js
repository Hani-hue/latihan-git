const itemModel = require('../models/itemModel');

exports.index = (req, res) => {
  const items = itemModel.getAll();
  res.render('index', { items });
};

exports.store = (req, res) => {
  itemModel.create(req.body);
  res.redirect('/');
};
