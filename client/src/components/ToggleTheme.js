import { useColorMode } from "@chakra-ui/color-mode";
import { Button, IconButton } from "@chakra-ui/react";
import { MdBrightness3, MdWbSunny } from "react-icons/md";

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleThemeMode = () => toggleColorMode();

  return (
    <IconButton
      icon={
        colorMode === "light" ? (
          <MdWbSunny size={26} color="black" />
        ) : (
          <MdBrightness3 size={26} color="white" />
        )
      }
      aria-label="Toggle Site Theme"
      variant="solid"
      onClick={toggleThemeMode}
    >
      Toggle
    </IconButton>
  );
}
