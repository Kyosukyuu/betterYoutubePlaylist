import ToggleTheme from "./ToggleTheme";
import UrlForm from "./UrlForm";
import { Center, useColorModeValue } from "@chakra-ui/react";

export default function Header() {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Center bg={bg} py={5} px={4} rounded="sm">
      <UrlForm />
      <ToggleTheme />
    </Center>
  );
}
