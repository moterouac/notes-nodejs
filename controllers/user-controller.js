const userService = require('../services/user-service');

module.exports = {
    getUser: async (req, res, next) => {
      try {
        const uid = req.query.uid;
        const user = await userService.getUser(uid);
        return res.status(200).json(user);
      } catch (error) {
        next(error);
      }
    },
    createUser: async (req, res, next) => {
      try {
        const data = req.body;
        const user = await userService.createUser(data);
        return res.status(201).json(user);
      } catch (error) {
        next(error);
      }
    },
  };
  