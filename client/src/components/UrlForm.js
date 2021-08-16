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
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { MdSearch, MdCancel, MdContentPaste } from "react-icons/md";
import { useContext, useRef } from "react";
import { PlayingContext } from "../contexts/PlayingContext";

export default function UrlForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { setPlaylistID, setPlaying } = useContext(PlayingContext);
  const inputFormRef = useRef();

  const onSubmit = (data) => {
    setPlaylistID(parseURL(data.url));
  };

  const parseURL = (input) => {
    const baseURL = "https://www.youtube.com/playlist?list=";
    if (!input) return input;
    else if (input.includes(baseURL)) return input.split(baseURL)[1];
    return input;
  };

  const onReset = () => {
    reset();
    setPlaylistID("");
    setPlaying({ id: "", pos: -1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pasteTo = async () => {
    const pasteContent = await navigator.clipboard.readText();
    if (inputFormRef.current.value !== pasteContent) {
      inputFormRef.current.value = pasteContent;
    }
    setValue("url", pasteContent);
  };

  // STYLES
  const bg = useColorModeValue("gray.50", "transparent");
  const inputColor = useColorModeValue("black", "black");
  const inputBg = useColorModeValue("white", "gray.50");
  const labelHelper = useColorModeValue("gray.600", "gray.200");
  const borderColor = useColorModeValue("gray.300", "transparent");
  const formBoxShadow = useColorModeValue("sm", "");

  const pasteBg = useColorModeValue("yellow.600", "orange.100");
  const pasteColor = useColorModeValue("white", "gray.900");
  const pasteColorScheme = useColorModeValue("yellow", "yellow");

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
        boxShadow={formBoxShadow}
      >
        <FormControl id="playlistUrl">
          <FormLabel htmlFor="url">Youtube Playlist URL</FormLabel>
          <Flex position="relative" flexDirection="row-reverse">
            {" "}
            <Flex>
              <IconButton
                icon={<MdSearch size={32} />}
                colorScheme="facebook"
                aria-label="Search Playlist"
                type="submit"
                borderRadius={0}
                title="Search"
              />
              <IconButton
                icon={<MdContentPaste size={28} />}
                aria-label="Paste Playlist"
                type="button"
                borderLeftRadius={0}
                title="Paste"
                colorScheme={pasteColorScheme}
                bg={pasteBg}
                color={pasteColor}
                onClick={pasteTo}
              />
            </Flex>
            <Box width="100%" position="relative">
              <Input
                type="text"
                name="url"
                bg={inputBg}
                color={inputColor}
                placeholder="URL or playlist ID"
                _placeholder={{ color: "gray.400" }}
                {...register("url")}
                borderRightRadius={0}
                ref={inputFormRef}
                onPaste={pasteTo}
              />
              <IconButton
                icon={<MdCancel size={24} />}
                colorScheme="red"
                type="reset"
                aria-label="Clear Fields"
                variant="ghost"
                title="Reset"
                onClick={onReset}
                position="absolute"
                right="0"
                zIndex={1}
              />
            </Box>
            {errors.url && <p>Not a valid Youtube playlist URL</p>}
          </Flex>

          <FormHelperText color={labelHelper}>
            Enter a playlist in search bar to begin
          </FormHelperText>
        </FormControl>
      </Box>
    </Center>
  );
}
