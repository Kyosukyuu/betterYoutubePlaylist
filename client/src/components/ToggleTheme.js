import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { IconButton } from "@chakra-ui/react";
import { MdBrightness3, MdWbSunny } from "react-icons/md";

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleThemeMode = () => toggleColorMode();

  const bg = useColorModeValue("white", "gray.600");

  return (
    <IconButton
      icon={
        colorMode === "light" ? (
          <MdBrightness3 size={26} color="black" />
        ) : (
          <MdWbSunny size={26} color="white" />
        )
      }
      aria-label="Toggle Site Theme"
      variant="solid"
      onClick={toggleThemeMode}
      bg={bg}
    >
      Toggle
    </IconButton>
  );
}
