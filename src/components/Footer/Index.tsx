import {
  Column,
  Copyright,
  CopyrightText,
  Divider,
  FooterWrapper,
  LinkArea,
  List,
  ListItem,
  ListTitle,
} from './styles';

function Footer() {
  const actuallyYear = new Date().getFullYear()
  return (
    <>
      <Divider />
      <FooterWrapper>
        <LinkArea>
          <Column>
            <ListTitle>Features</ListTitle>
            <List>
              <ListItem>Application Tour</ListItem>
              <ListItem>Pricing Tables</ListItem>
              <ListItem>Jobs & Careers</ListItem>
              <ListItem>About & Developers</ListItem>
            </List>
          </Column>

          <Column>
            <ListTitle>Application</ListTitle>
            <List>
              <ListItem>Application Tour</ListItem>
              <ListItem>Pricing Tables</ListItem>
              <ListItem>Jobs & Careers</ListItem>
              <ListItem>About & Developers</ListItem>
            </List>
          </Column>

          <Column>
            <ListTitle>Knife Theme</ListTitle>
            <List>
              <ListItem>Application Tour</ListItem>
              <ListItem>Pricing Tables</ListItem>
              <ListItem>Jobs & Careers</ListItem>
              <ListItem>About & Developers</ListItem>
            </List>
          </Column>
        </LinkArea>
        <Copyright>
          <CopyrightText>
            © Copyright {actuallyYear} — All rights reserved — JVM by Kallarari
          </CopyrightText>
        </Copyright>
      </FooterWrapper>
    </>
  );
}

export default Footer;
