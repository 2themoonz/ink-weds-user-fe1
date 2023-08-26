import {
  Logo,
  Right,
  UserIconWrapper,
  Container,
  WriteNow,
  Wrapper,
} from "./styles";
import { UserIcon } from "@/icons";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>InkWeds</Logo>
        <Right>
          <WriteNow>Write Now!</WriteNow>
          <UserIconWrapper>
            <UserIcon />
          </UserIconWrapper>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
