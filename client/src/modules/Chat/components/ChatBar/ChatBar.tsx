import { ChatBarStyled } from './styles';

type TProps = {
  room: string;
  users: any[];
};

const ChatBar = ({ room, users }: TProps) => {
  return (
    <ChatBarStyled>
      <header>
        <h4>Add Friends</h4>
        <h4>Комната: {room}</h4>
      </header>
      <div>
        {users.map((el, index) => {
          const { user } = el;
          return (
            <div key={index}>
              {user}
              {/* <img src={user.avatar} alt={user.username} />
              <p>{user.username}</p> */}
            </div>
          );
        })}
      </div>
    </ChatBarStyled>
  );
};

export default ChatBar;
