import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface SignUpProps {
  onClose: () => void;
  switchToLogin: () => void;
  switchToOTP: () => void;
}

const SignUp = (props: SignUpProps) => {
  const { onClose, switchToLogin, switchToOTP } = props;
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
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Enter your password again"
        />
      </ModalBody>
      <ModalFooter className="flex flex-col gap-5">
        <Button
          onPress={onClose}
          onClick={switchToOTP}
          className="w-full bg-default-900 text-white"
        >
          Sign Up
        </Button>

        <div className="text-default-500">
          Already have an account,{" "}
          <span
            className="text-default-900 cursor-pointer"
            onClick={switchToLogin}
          >
            Log in now
          </span>
        </div>
      </ModalFooter>
    </>
  );
};

export default SignUp;
