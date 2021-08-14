import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Center,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useForm } from "react-hook-form";
import { MdSearch, MdCancel } from "react-icons/md";

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
  const bg = useColorModeValue("gray.50", "");
  const inputColor = useColorModeValue("black", "black");
  const inputBg = useColorModeValue("white", "gray.50");
  const labelHelper = useColorModeValue("gray.600", "gray.200");
  const borderColor = useColorModeValue(
    "gray.300",
    "rgba(255, 255, 255, 0.16)"
  );

  return (
    <Center width="100%" rounded="md" mx={1}>
      <Box
        as="form"
        maxWidth="1450px"
        width="100%"
        p={4}
        onSubmit={handleSubmit(onSubmit)}
        borderColor={borderColor}
        borderWidth={2}
        rounded="md"
        bg={bg}
        boxShadow="sm"
      >
        <FormControl id="playlistUrl">
          <FormLabel htmlFor="url">Youtube Playlist URL</FormLabel>
          <Flex>
            <Input
              type="text"
              name="url"
              bg={inputBg}
              color={inputColor}
              placeholder="URL or playlist ID"
              _placeholder={{ color: "gray.400" }}
              {...register("url")}
              borderRightRadius={0}
            />
            {errors.url && <p>Not a valid Youtube playlist URL</p>}
            <Flex>
              <IconButton
                icon={<MdSearch size={32} />}
                colorScheme="facebook"
                aira-label="Search Playlist"
                type="submit"
                borderLeftRadius={0}
                title="Search"
              />
              <IconButton
                ml={3}
                icon={<MdCancel size={30} />}
                colorScheme="red"
                type="reset"
                aira-label="Clear Fields"
                variant="solid"
                title="Reset"
              />
            </Flex>
          </Flex>

          <FormHelperText color={labelHelper}>
            Enter a playlist in search bar to begin
          </FormHelperText>
        </FormControl>
      </Box>
    </Center>
  );
}
