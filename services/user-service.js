const { create,getByUidOrAuthId } = require('../repositories/user-repository');


const createUser = async (data) => {
    const uid = '';
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