import {
  Box,
  Center,
  Divider,
  VStack,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { RiAppsFill } from "react-icons/ri";
import { FaAsterisk } from "react-icons/fa";
import {
  BsXDiamondFill,
  BsFileEarmarkMedicalFill,
  BsInfo,
  BsDiagram3Fill,
} from "react-icons/bs";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import data from "../../mock/especieDetail.json";

export function Details() {
  const { name } = useParams();

  return (
    <Box w={"100%"} h={"full"} position={"relative"}>
      <Header bg={"#319654"} />
      <HStack
        alignItems={"center"}
        justifyContent={"space-between"}
        marginTop={"40px"}
      >
        <Divider borderWidth={2} borderColor={"#319654"} />
        <Heading
          textTransform={"uppercase"}
          minW={"fit-content"}
          p={"0 18px"}
          fontSize={"24px"}
        >
          {name}
        </Heading>
        <Divider borderWidth={2} borderColor={"#319654"} />
      </HStack>
      <HStack mt={"40px"} gap={"100px"} p={"0 72px"} justifyContent={"center"}>
        <Tag icon={RiAppsFill} title="Classe" value="Insecta" />
        <Tag icon={FaAsterisk} title="Ordem" value="Insecta" />
        <Tag icon={BsDiagram3Fill} title="Família" value="Insecta" />
        <Tag icon={BsXDiamondFill} title="Gênero" value="Insecta" />
        <Tag icon={BsFileEarmarkMedicalFill} title="Espécie" value="Insecta" />
        <Tag icon={BsInfo} title="Nome popular" value="Insecta" />
      </HStack>
      <Center m={"40px 0"} p={"0 100px"}>
        <VStack alignItems={"flex-start"} gap={"8px"}>
          {data.paragraphs.map((paragraph) => (
            <Text textAlign={"justify"}>{paragraph}</Text>
          ))}

          <UnorderedList pl={"24px"}>
            {data.tips.map((tip) => (
              <ListItem>{tip}</ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </Center>
      <VStack alignItems={"flex-start"} pl={"72px"} mt={"40px"} mb={"40px"}>
        <HStack justifyContent={"space-between"} w={"100%"}>
          <Heading fontSize={"28px"}>Curiosidade:</Heading>
          <Divider borderColor={"#319654"} />
        </HStack>
        <Text>
          Se você gosta de pescar, pode criar suas próprias iscas em casa.
          Ensinamos aqui como fazer uma criação de larvas do Tenébrio molitor.
          As mesmas técnicas podem ser aplicadas para a maioria das larvas,
          alterando-se levemente a forma de criação. Por exemplo, para o
          bicho-da-laranja, basta colocar um pedaço de fruta ao ar livre por
          alguns dias para que as mosquinhas ponham os ovos, de onde sairão as
          larvas. Para manter uma criação é necessário um recipiente de plástico
          com uma cama de farelo de trigo e ração para pintinhos, com alguns
          centímetros de altura. Complemente com um ou dois pães. Como fonte de
          água, acrescente uma batata, legumes ou frutas, que devem ser
          substituídas a cada três dias. As larvas se alimentarão e viverão
          nesse recipiente mantido numa sala com temperatura ambiente, onde
          passarão a pupas e de pupas a adultos. Os adultos acasalarão e porão
          os ovos no substrato ou em um bocado de madeira deixado no fundo do
          recipiente. Toda cama deve ser substituída a cada 20 ou 25 dias, para
          manter as larvas sempre limpas e saudáveis.
        </Text>
      </VStack>
      <Footer />
    </Box>
  );
}
