import { SocialLinksData } from './data';
import { FooterStyled, Img, Item, LegalText, Link, LinksList } from './styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyled>
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
    </FooterStyled>
  );
};

export default Footer;
