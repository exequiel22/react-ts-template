import React from 'react';
import Avatar from './components/Avatar';
import AvatarStack from './components/AvatarStack';

const App: React.FC = () => {
  return (
    <AvatarStack>
      <Avatar>
        <img
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </Avatar>
      <Avatar>
        <img
          src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </Avatar>
      <Avatar>E</Avatar>
      <Avatar>
        <img
          src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
          alt=''
        />
      </Avatar>
      <Avatar>A</Avatar>
    </AvatarStack>
  );
};

export default App;
