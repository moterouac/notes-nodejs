const { create,getByUidOrAuthId } = require('../repositories/user-repository');

const { ErrorHandler } = require('../config/helpers/error-helper');

const createUser = async (data) => {
    const uid = '';
    const userExist = await getByUidOrAuthId(uid);
    if (userExist) throw new ErrorHandler(409, 'User already exists');
    await create(data);
    return getByUidOrAuthId(uid);
  };

  const getUser = async (uid) => {
    return getByUidOrAuthId(uid);
  };

module.exports = {
    createUser,
    getUser
}  