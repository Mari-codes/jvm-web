import type { IconWithLabelProps } from './interface';
import { Container, StyledIcon, Text } from './styles';

export const IconWithLabel = ({ text, iconName }: IconWithLabelProps) => {
  return (
    <Container>
      <StyledIcon icon={iconName} />
      <Text>{text}</Text>
    </Container>
  );
};
