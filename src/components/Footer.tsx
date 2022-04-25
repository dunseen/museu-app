import { Flex, Text, Link, ListItem, List } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footer() {
  return (
    <Flex
      as={"footer"}
      h={"90px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"0 72px"}
      bg={"#319654"}
      color={"white"}
      sx={{
        "@media screen and (max-width: 400px)": {
          justifyContent: "center",
          flexDirection: "column",
          gap: "16px",
        },
      }}
    >
      <Text>© 2022 Museu Inseto UFRA.</Text>

      <List
        display={"flex"}
        alignItems={"center"}
        gap={"24px"}
        listStyleType={"none"}
      >
        <ListItem>
          <Link
            href="https://pt-br.facebook.com/UFRAOficial/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsFacebook size={"25"} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.instagram.com/ufraoficial/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsInstagram size={"25"} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://twitter.com/UfraOficial?s=20&t=ycti-n6SFrQY7x5sXd8ipg"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsTwitter size={"25"} />
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
