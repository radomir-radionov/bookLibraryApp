import { ChevronRightIcon, Container, IconBox, LinkStyled } from './styles';

type TFormFooter = {
  text: string;
  link: string;
  linkText: string;
};

const FormFooter = ({ text, link, linkText }: TFormFooter) => {
  return (
    <Container>
      {text}
      <LinkStyled to={link}>
        {linkText}
        <IconBox>
          <ChevronRightIcon />
        </IconBox>
      </LinkStyled>
    </Container>
  );
};

export default FormFooter;
