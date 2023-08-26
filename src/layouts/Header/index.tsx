import { Login, OTP, SignUp } from "@/features";
import { UserIcon } from "@/icons";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "@/components";
import {
  Container,
  Logo,
  Right,
  UserIconWrapper,
  Wrapper,
  WriteNow,
} from "./styles";

const AUTH_STAGES = {
  LOGIN: "LOGIN",
  SIGN_UP: "SIGN_UP",
  OTP: "OTP",
};

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [stage, setStage] = useState(AUTH_STAGES.LOGIN);

  const switchToSignUp = () => {
    setStage(AUTH_STAGES.SIGN_UP);
  };

  const switchToLogin = () => {
    setStage(AUTH_STAGES.LOGIN);
  };

  const switchToOTP = () => {
    setStage(AUTH_STAGES.OTP);
  };

  const handleClose = ({ onClose }: any) => {
    setStage(AUTH_STAGES.LOGIN);
    onClose();
  };

  return (
    <Container>
      <Wrapper>
        <Logo>InkWeds</Logo>
        <ThemeSwitcher />
        <Right>
          <WriteNow>Write Now!</WriteNow>
          <UserIconWrapper onClick={onOpen}>
            <UserIcon />
          </UserIconWrapper>
        </Right>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                {stage === AUTH_STAGES.LOGIN && (
                  <Login
                    onClose={() =>
                      handleClose({
                        onClose,
                      })
                    }
                    switchToSignUp={switchToSignUp}
                  />
                )}
                {stage === AUTH_STAGES.SIGN_UP && (
                  <SignUp
                    onClose={() =>
                      handleClose({
                        onClose,
                      })
                    }
                    switchToLogin={switchToLogin}
                    switchToOTP={switchToOTP}
                  />
                )}
                {stage === AUTH_STAGES.OTP && (
                  <OTP
                    onClose={() =>
                      handleClose({
                        onClose,
                      })
                    }
                  />
                )}
              </>
            )}
          </ModalContent>
        </Modal>
      </Wrapper>
    </Container>
  );
};

export default Header;
