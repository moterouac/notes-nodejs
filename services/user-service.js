const { create,getByUidOrAuthId,getUserByEmail } = require('../repositories/user-repository');

const { ErrorHandler } = require('../config/helpers/error-helper');

const createUser = async (data) => {
    const email = data.email;
    const userExist = await getUserByEmail(email);
    if (userExist) throw new ErrorHandler(409, 'User already exists');
    await create(data);
    return getUserByEmail(email);
  };

  const getUser = async (uid) => {
    return getByUidOrAuthId(uid);
  };

  const getUserByemail = async (email) => {
    return getUserByEmail(email);
  };

module.exports = {
    createUser,
    getUser,
    getUserByemail
}  