import {
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Skeleton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import PlaylistItem from "./PlaylistItem";
import { useContext } from "react";
import { PlayingContext } from "../contexts/PlayingContext";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import svg from "../assets/undraw_not_found_60pq.svg";

const MotionCenter = motion(Center);
const MotionImage = motion(Image);

const variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.025,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
    },
  },
};

const variantsImage = {
  initial: { opacity: 0, scale: 0.835 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35 },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.25 },
  },
};

export default function Playlist() {
  const { status, allVideos } = useContext(PlayingContext);

  // STYLES
  const bg = useColorModeValue("white", "gray.700");

  return (
    <AnimatePresence exitBeforeEnter>
      {allVideos && allVideos.items && (
        <MotionCenter
          p={4}
          mt={6}
          bg={bg}
          flexDirection="column"
          rounded="sm"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key="playlistContainer"
        >
          <AnimateSharedLayout>
            <Skeleton
              isLoaded={status === "success" ? true : false}
              width="100%"
            >
              <Table
                variant="simple"
                bg={bg}
                px={3}
                py={2}
                size={["sm", "lg"]}
                sx={{ borderCollapse: "separate", borderSpacing: "10px 15px" }}
              >
                <Thead>
                  <Tr verticalAlign="top">
                    <Th fontStyle="italic">#</Th>
                    <Th>TITLE</Th>
                    <Th>CHANNEL</Th>
                    <Th isNumeric>CREATED ON</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {allVideos &&
                    allVideos.items &&
                    allVideos.items.map((vid, i) => (
                      <PlaylistItem
                        key={vid.contentDetails.videoId}
                        vid={vid}
                        index={i}
                      />
                    ))}
                </Tbody>
              </Table>
            </Skeleton>
          </AnimateSharedLayout>
        </MotionCenter>
      )}
      {!allVideos.items && (
        <MotionImage
          src={svg}
          w="375px"
          mx="auto"
          mt={7}
          variants={variantsImage}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      )}
    </AnimatePresence>
  );
}
