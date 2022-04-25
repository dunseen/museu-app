import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

import { Text, VStack, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
interface SpecieCardProps {
  name: string;
  id: string;
  imageLink: string;
}

const SpecieCard: React.FC<SpecieCardProps> = ({ name, imageLink }) => {
  const navigate = useNavigate();

  return (
    <VStack
      bgImage={`url("${imageLink}")`}
      bgSize={"cover"}
      bgPosition={"center"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"24px"}
      h={290}
      w={"100%"}
      color={"white"}
      _hover={{
        cursor: "pointer",
      }}
      boxShadow={
        " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
      }
      onClick={() => navigate(`/busca/detalhes/${name}`)}
    >
      <Text
        fontWeight={"bold"}
        textShadow={"0.5px 0px #000"}
        textTransform={"uppercase"}
        fontSize={"28px"}
      >
        {name}
      </Text>

      <HStack
        alignItems={"center"}
        gap={"4px"}
        fontSize={"14px"}
        textAlign={"left"}
        w={"100%"}
      >
        <Text fontWeight={500} fontSize={16}>
          SAIBA MAIS
        </Text>
        <BsArrowRightCircle size={20} />
      </HStack>
    </VStack>
  );
};

export default SpecieCard;
