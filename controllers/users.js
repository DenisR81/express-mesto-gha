const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch((err) => res.send({ message: `Ошибка: ${err}` }));
};

module.exports.getUser = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => res.send({ user }))
    .catch((err) => res.send({ message: `Ошибка: ${err}` }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ user }))
    .catch((err) => res.send({ message: `Ошибка: ${err}` }));
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  const { _id } = req.user;
  User.findByIdAndUpdate(_id, { name, about }, { new: true })
    .then((user) => res.send({ user }))
    .catch((err) => res.send({ message: `Ошибка: ${err}` }));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  const { _id } = req.user;
  User.findByIdAndUpdate(_id, { avatar }, { new: true })
    .then((user) => res.send({ user }))
    .catch((err) => res.send({ message: `Ошибка: ${err}` }));
};
