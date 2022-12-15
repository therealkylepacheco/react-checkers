import { Container, Title } from "./Header.styles";

export type HeaderProps = {
  title: string;
};

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
