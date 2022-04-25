import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

import backgroundImage from "../assets/home.jpg";

export function BannerWithHeader() {
  return (
    <Box
      as="section"
      height={"80vh"}
      backgroundImage={backgroundImage}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
    >
      <Header />
    </Box>
  );
}
