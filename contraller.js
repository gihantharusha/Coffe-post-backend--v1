const Users = require("./usersModel");
const Post = require("./postModel");
const Firends = require("./firendsModel");

const getUsers = (req, res) => {
  Users.find()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

const checkUsers = (req, res) => {
  const name = req.query.name;
  const password = req.query.password;
  Users.find({ name: name })
    .then((response) => {
      if (response[0].password == password) {
        res.send({ status: "ok", id: response[0].id });
      } else {
        res.send("wrong password");
      }
    })
    .catch(() => res.send("wrong name"));
};

const addUser = (req, res) => {
  const user = new Users({
    name: req.query.name,
    password: req.query.password,
  });

  user
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => res.send(err));
};

const findUsersByname = (req, res) => {
  Users.find({ name: req.query.name }).then((response) => res.send(response));
};

const DeleteUsers = (req, res) => {
  Users.delete({ id: req.query.id }).then((response) => res.send(response));
};

//Post model

const addPost = (req, res) => {
  const post = new Post({
    id: req.query.id,
    post: req.query.post,
  });

  post
    .save()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

const getPostsById = (req, res) => {
  Post.find({ id: req.query.id })
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

//firends model

const addFirends = (req, res) => {
  const firend = new Firends({
    id: req.query.id,
    firend_N: req.query.name,
    firends_id: req.query.fid,
  });

  firend
    .save()
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

const getfirendById = (req, res) => {
  Firends.find({ id: req.query.id })
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

const deleteFirendById = (req, res) => {
  Firends.delete({ id: req.query.id })
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

module.exports = {
  addUser,
  getUsers,
  findUsersByname,
  DeleteUsers,
  checkUsers,
  addPost,
  getPostsById,
  addFirends,
  getfirendById,
  deleteFirendById,
};
