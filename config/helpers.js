const User = require('../models/user.model');

module.exports = {
  updateChatList: async (req, newMessage) => {
    await User.update(
      {
        _id: req._id,
      },
      {
        $pull: {
          ChatList: {
            receiverId: req.params.receiver_Id,
          },
        },
      }
    );

    await User.update(
      {
        _id: req.params.receiver_Id,
      },
      {
        $pull: {
          ChatList: {
            receiverId: req._id,
          },
        },
      }
    );

    await User.update(
      {
        _id: req._id,
      },
      {
        $push: {
          ChatList: {
            $each: [
              {
                receiverId: req.params.receiver_Id,
                msgId: newMessage._doc._id,
              },
            ],
            $position: 0,
          },
        },
      }
    );

    await User.update(
      {
        _id: req.params.receiver_Id,
      },
      {
        $push: {
          ChatList: {
            $each: [
              {
                receiverId: req._id,
                msgId: newMessage._id,
              },
            ],
            $position: 0,
          },
        },
      }
    );
  },
};
