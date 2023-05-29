const userService = require('../services/user-service');

module.exports = {
    getUser: async (req, res, next) => {
      try {
        const authId = req.authId;
        const uid = req.query.uid;
        const user = await userService.getUser(uid, authId);
        return res.status(200).json(user);
      } catch (error) {
        next(error);
      }
    },
  };
  