import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  Center,
  Box,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useForm } from "react-hook-form";

export default function UrlForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // STYLES
  const bg = useColorModeValue("blue.100", "gray.600");
  const inputColor = useColorModeValue("black", "black");

  return (
    <Center>
      <Box
        as="form"
        maxWidth="1250px"
        width="100%"
        p={4}
        mx={4}
        rounded="sm"
        boxShadow="md"
        bg={bg}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl id="playlistUrl">
          <FormLabel htmlFor="url">Youtube Playlist URL</FormLabel>
          <Flex>
            <Input
              type="text"
              name="url"
              bg="white"
              color={inputColor}
              placeholder="URL or playlist ID"
              _placeholder={{ color: "gray.400" }}
              {...register("url")}
            />
            {errors.url && <p>Not a valid Youtube playlist URL</p>}
            <Flex ml={10}>
              <Button
                mx={1}
                colorScheme="linkedin"
                aira-label="Search Playlist"
                type="submit"
              >
                Play it!
              </Button>
              <Button
                ml={1}
                colorScheme="red"
                type="reset"
                aira-label="Clear Fields"
              >
                Reset
              </Button>
            </Flex>
          </Flex>

          <FormHelperText>
            Enter a playlist in search bar to begin
          </FormHelperText>
        </FormControl>
      </Box>
    </Center>
  );
}
