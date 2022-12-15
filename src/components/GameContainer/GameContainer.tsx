import { Container } from "./GameContainer.styles";

export type GameContainerProps = {
  children: React.ReactNode;
};

export const GameContainer = (props: GameContainerProps) => {
  const { children } = { ...props };

  return <Container>{children}</Container>;
};
