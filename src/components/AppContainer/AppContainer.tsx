import { Container } from "./AppContainer.styles";

export type AppContainerProps = {
  children: React.ReactNode;
};

export const AppContainer = (props: AppContainerProps) => {
  const { children } = props;

  return <Container>{children}</Container>;
};
