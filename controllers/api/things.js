const Thing = require('../../models/thing');

module.exports = {
  index,
  create,
  delete: deleteOne,
};

async function index(req, res) {
  const things = await Thing.find({});
  res.status(200).json(things);
}

async function create(req, res) {
  const thing = await Thing.create(req.body);
  res.status(201).json(thing);
}

async function deleteOne(req, res) {
  const deletedThing = await Thing.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedThing);
}
