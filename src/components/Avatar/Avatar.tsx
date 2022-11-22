import { FC } from 'react';
import { AvatarContainer } from './styles';

interface AvatarProps {
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
}

const Avatar: FC<AvatarProps> = ({ children, ...rest }) => {
  return (
    <AvatarContainer {...rest}>
      {children}
    </AvatarContainer>
  );
};

export default Avatar;
