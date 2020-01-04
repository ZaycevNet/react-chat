const io = require("socket.io")();

let users = [];

io.on("connection", socket => {
  console.log("event connection");
  socket.on("login", name => {
    console.log("event: login", name);
    const user = {
      id: socket.id,
      name,
      socket
    };

    users.push(user);

    socket.emit(
      "login",
      JSON.stringify({
        id: user.id,
        name: user.name
      })
    );
  });
  socket.on("disconnect", name => {
    console.log("event: disconnect");
    users = users.filter(user => user.id != socket.id);
  });
});

io.listen(3001);
