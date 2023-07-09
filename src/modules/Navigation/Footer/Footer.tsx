import { SocialLinksData } from './data';
import { Content, FooterStyled, Img, Item, LegalText, Link, LinksList } from './styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyled>
      <Content>
        <LegalText> &copy; 2020-{year} Cleverland. Все права защищены.</LegalText>
        <LinksList>
          {SocialLinksData.map(({ id, href, icon }) => (
            <Item key={id}>
              <Link href={href}>
                <Img src={icon} alt='Social' />
              </Link>
            </Item>
          ))}
        </LinksList>
      </Content>
    </FooterStyled>
  );
};

export default Footer;
