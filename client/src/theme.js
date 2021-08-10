import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  // useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      // bg: mode("red.500", "blue.500")(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
