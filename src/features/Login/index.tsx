/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "@/redux/actions";

interface LoginProps {
  onClose: () => void;
  switchToSignUp: () => void;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});

const Login = (props: LoginProps) => {
  const { onClose, switchToSignUp } = props;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    onClose();
    try {
      dispatch(
        login({
          email: data.email,
          password: data.password,
        })
      );
      // await Auth.signIn(data.email, data.password);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1 items-center">
        InkWeds
      </ModalHeader>
      <ModalBody>
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          validationState={errors.email ? "invalid" : "valid"}
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          variant="bordered"
          validationState={errors.password ? "invalid" : "valid"}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
      </ModalBody>
      <ModalFooter className="flex flex-col gap-5">
        <Button
          onClick={handleSubmit(onSubmit)}
          className="w-full dark:bg-white dark:text-black light:bg-zinc-80 light:text-white"
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
