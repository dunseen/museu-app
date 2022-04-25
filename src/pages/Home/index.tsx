import { Box, Flex } from "@chakra-ui/react";

import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useContent } from "../../hooks/useContent";
import { BannerWithHeader } from "../../components/BannerWithHeader";

function Home() {
  const content = useContent();

  return (
    <Box width={"100%"} height="full" bg={"white"} position="relative">
      <BannerWithHeader />

      <Flex
        as={"section"}
        id="informative"
        w={"100%"}
        h={"fit-content"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        position={"relative"}
        wrap={"wrap"}
        gap={"50"}
        mb={"80px"}
        p={"80px 72px 0px 72px"}
      >
        {content.map((item) => (
          <Card
            key={item.title}
            iconURL={item.iconURL}
            imageAlt={item.imageAlt}
            content={item.content}
            title={item.title}
          />
        ))}
      </Flex>

      <Footer />
    </Box>
  );
}

export { Home };
