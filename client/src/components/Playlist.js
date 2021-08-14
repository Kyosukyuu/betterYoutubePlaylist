import {
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Skeleton,
} from "@chakra-ui/react";
import PlaylistItem from "./PlaylistItem";
import { useContext } from "react";
import { PlayingContext } from "../contexts/PlayingContext";
import { AnimateSharedLayout } from "framer-motion";
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function Playlist() {
  const { status, allVideos, setAllVideos } = useContext(PlayingContext);

  // STYLES
  const bg = useColorModeValue("white", "gray.700");

  return (
    <Center p={4} mt={6} bg={bg} flexDirection="column" rounded="sm">
      <AnimateSharedLayout>
        <Skeleton isLoaded={status === "success" ? true : false} width="100%">
          <Table
            variant="simple"
            bg={bg}
            p={3}
            size={["sm", "lg"]}
            sx={{ borderCollapse: "separate", borderSpacing: "10px 5px" }}
          >
            <Thead>
              <Tr>
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
    </Center>
  );
}
