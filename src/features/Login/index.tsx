/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface LoginProps {
  onClose: () => void;
  switchToSignUp: () => void;
}

const Login = (props: LoginProps) => {
  const { onClose, switchToSignUp } = props;
  return (
    <>
      <ModalHeader className="flex flex-col gap-1 items-center">
        InkWeds
      </ModalHeader>
      <ModalBody>
        <Input type="email" label="Email" placeholder="Enter your email" />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </ModalBody>
      <ModalFooter className="flex flex-col gap-5">
        <Button
          onPress={onClose}
          // color="success"
          // dark mode: bg-white text-black
          // light mode: bg-zinc-80 text-white
          className="w-full dark:bg-white dark:text-black light:bg-zinc-80 light:text-white"
          style={
            {
              // backgroundColor: "#18181B",
            }
          }
        >
          Login
        </Button>

        <div className="text-zinc-500">
          Don't have an account,{" "}
          <span
            className="text-zinc-900 cursor-pointer"
            onClick={switchToSignUp}
          >
            Sign up now
          </span>
        </div>
      </ModalFooter>
    </>
  );
};

export default Login;
