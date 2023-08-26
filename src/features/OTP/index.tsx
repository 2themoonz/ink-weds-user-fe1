import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface OTPProps {
  onClose: () => void;
}

const OTP = (props: OTPProps) => {
  const { onClose } = props;
  return (
    <>
      <ModalHeader className="flex flex-col gap-1 items-center">
        InkWeds
      </ModalHeader>
      <ModalBody>
        <Input type="number" label="OTP" placeholder="Enter your OTP" />
      </ModalBody>
      <ModalFooter className="flex flex-col gap-5">
        <Button onPress={onClose} className="w-full bg-default-900 text-white">
          OTP
        </Button>
      </ModalFooter>
    </>
  );
};

export default OTP;
