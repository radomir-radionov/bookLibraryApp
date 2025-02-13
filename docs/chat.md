- when the user switches to the chat page than socket emits 'newUser' event and send obj with, username and a room.

- server are listening this event and do next actions:
  - add user to users array
  - filter users by rooms
