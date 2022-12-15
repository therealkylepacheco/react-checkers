import LinkedIn from "@mui/icons-material/LinkedIn";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GitHub from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import { Container } from "./Footer.styles";
import useFooter from "./useFooter";

export const Footer = () => {
  const { handleCreator, handleGithub, handleLinkedin } = useFooter();

  return (
    <Container>
      <IconButton title="Check it out on GitHub" onClick={handleGithub}>
        <GitHub />
      </IconButton>
      <IconButton title="Add me on LinkedIn" onClick={handleLinkedin}>
        <LinkedIn />
      </IconButton>
      <IconButton title="Visit my website" onClick={handleCreator}>
        <AccountCircle />
      </IconButton>
    </Container>
  );
};
