import ToggleTheme from "./ToggleTheme";
import UrlForm from "./UrlForm";
import { Center, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCenter = motion(Center);

const variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Header() {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <MotionCenter
      bg={bg}
      py={5}
      px={4}
      rounded="sm"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <UrlForm />
      <ToggleTheme />
    </MotionCenter>
  );
}
