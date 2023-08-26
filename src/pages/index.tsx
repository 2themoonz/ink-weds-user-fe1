import tw from "twin.macro";
import styled from "styled-components";
import { MainLayout } from "@/layouts";
import { Todo } from "@/features";
import { Header } from "@/layouts";
import { Button } from "@nextui-org/react";

const Title = styled.div`
  ${tw`text-3xl font-bold underline`}
`;

export default function HomePage() {
  return (
    <>
      <MainLayout>
        {/* <Todo /> */}
        <Button color="primary">Click me</Button>
      </MainLayout>
    </>
  );
}
