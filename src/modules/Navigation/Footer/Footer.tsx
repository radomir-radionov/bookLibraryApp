import { SocialLinksData } from './data';
import { Container, FooterStyled, Img, Item, LegalText, Link, LinksList } from './styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyled>
      <Container>
        <LegalText> &copy; 2020-{year} Cleverland. Все права защищены.</LegalText>
        <LinksList>
          {SocialLinksData.map(({ id, href, icon }) => {
            return (
              <Item key={id}>
                <Link href={href}>
                  <Img src={icon} alt='Social' />
                </Link>
              </Item>
            );
          })}
        </LinksList>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
