import { useCallback } from "react";

const useFooter = () => {
  const githubLink =
    "https://github.com/therealkylepacheco/react-checkers/tree/main";
  const handleGithub = useCallback(
    () => window.open(githubLink, "_blank"),
    [githubLink]
  );

  const creatorLink = "https://therealkylepacheco.github.io/#/";
  const handleCreator = useCallback(
    () => window.open(creatorLink, "_blank"),
    [creatorLink]
  );

  const linkedinLink = "https://www.linkedin.com/in/kyle-pacheco";
  const handleLinkedin = useCallback(
    () => window.open(linkedinLink, "_blank"),
    [linkedinLink]
  );

  return {
    handleGithub,
    handleCreator,
    handleLinkedin,
  };
};

export default useFooter;
