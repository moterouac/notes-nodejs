const { UserDB } = require('../models/user-model');
const ObjectID = require('mongodb').ObjectID;
const { v4: uuidv4 } = require("uuid");




const create = async (user) => {
    const dbUser = new UserDB(user);
   // const id = ObjectID(dbUser._id).toString();
    const id = { ...user, _id: uuidv4() };
    dbUser.uid = id;
    return dbUser.save();
};

const getByUidOrAuthId = async (uid, authId) => {
    if (uid != null && uid != '' && uid != undefined) {
      return UserDB.findOne({ uid: uid });
    } else {
      return UserDB.findOne({ authId: authId });
    }
  };

const getUserByEmail = async(email) => {
    return UserDB.findOne({ email: email });
}


module.exports = {
    create,
    getByUidOrAuthId,
    getUserByEmail
}
