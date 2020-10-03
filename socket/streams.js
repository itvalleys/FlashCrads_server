module.exports = function (io) {



  io.on('connection', (socket) => {
    socket.on('getCourses', (data) => {
      console.log("ok received")
      io.emit('refreshgettingCourse', {});
    });
  });

  // io.on('connection', (socket) => {
  //   socket.on('refresh', (data) => {
  //     io.emit('refreshPage', {});
  //   });



  //   socket.on('refreshchatlist', (data) => {
  //     io.emit('refreshcomponent', {});
  //   });

  //   socket.on('refreshmsgcount', (data) => {
  //     io.emit('refreshcount', {});
  //   });

  //   socket.on('onlineEvent', (data) => {
  //     socket.join(data.room);
  //     user.EnterRoom(socket.id, data.user, data.room);
  //     const list = user.GetList(data.room);
  //     io.emit('userOnline', _.uniq(list));
  //   });

  //   socket.on('disconnect', () => {
  //     const removeduser = user.RemoveUser(socket.id);
  //     if (removeduser) {
  //       const userArray = user.GetList(removeduser.room);
  //       const arr = _.uniq(userArray);
  //       _.remove(arr, (n) => n === removeduser.name);
  //       io.emit('userOnline', arr);
  //     }
  //   });

  //   socket.on('sharedata', (data) => {
  //     io.emit('receivedata', { data });
  //   });

  //   socket.on('refreshProfile', (data) => {
  //     io.emit('refreshimg', { data });
  //   });
  // });
};
