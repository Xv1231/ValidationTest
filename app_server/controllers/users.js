const Users = require('../models/Users');

var sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

module.exports.getAllUsers = (req, res) => {
  Users.find({})
    .select('firstname lastname')
    .exec((err, data) => {
      if (err) {
        sendJsonResponse(res, 400, err);
      } else {
        sendJsonResponse(res, 200, data);
      }
    });
};
module.exports.create = (req, res) => {
  const user = new Users(req.body);
  user.save((err, us) => {
    if (err) {
      sendJsonResponse(res, 404, err);
    } else {
      sendJsonResponse(res, 201, us);
    }
  });
};
module.exports.update = function (req, res) {
  const id = req.params.userId;
  const users = req.body;
  if (!req.body) {
    sendJsonResponse(res, 400, {
      message: 'update request must have a body inside it',
    });
    return;
  }
  Users.findByIdAndUpdate(id, { $set: users }, { new: true }, (err, ublog) => {
    if (!ublog) {
      sendJsonResponse(res, 404, {
        message: 'user id not found',
      });
      return;
    } else if (err) {
      sendJsonResponse(res, 404, err);
      return;
    }
    res.send(
      "<script>alert('Successfully uploaded'); window.history.back(-1) </script>"
    );
  });
};
module.exports.delete = function (req, res) {
  const id = req.params.userId;
  console.log('The id is ', id);

  Users.findByIdAndDelete(id, (err) => {
    if (err) {
      sendJsonResponse(res, 404, err);
      return;
    }
    res.send(
      "<script>alert('Successfully deleted'); window.history.back() </script>"
    );
  });
};
