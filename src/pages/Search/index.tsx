import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import CardFilter from "../../components/FilterOption";

import { Input } from "../../components/Input";
import SpecieCard from "../../components/SpecieCard";

import orderList from "../../mock/ordem.json";
import classList from "../../mock/classe.json";
import familyList from "../../mock/family.json";
import genderList from "../../mock/gender.json";
import morfologiaList from "../../mock/morfologia.json";
import cardList from "../../mock/cardList.json";

import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export function Search() {
  return (
    <Box w={"100%"} h={"full"} position={"relative"}>
      <Header bg={"#319654"} />
      <VStack
        id="search"
        as="section"
        w={"100%"}
        h={"fit-content"}
        maxW={"1440px"}
        m={"0 auto"}
        alignItems={"center"}
        p={"40px 72px"}
      >
        <Heading fontSize={24}>Tipos de busca</Heading>
        <VStack border={`1px solid #ccc`} p={"16px"}>
          <Input placeholder="Busca livre" />
          <HStack
            w={"100%"}
            h={"100%"}
            p={"40px 0"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            wrap={"wrap"}
            gap={"24px"}
          >
            <CardFilter title="Classificação" h={"324px"}>
              <Select placeholder="Classe" optionList={classList} />
              <Select placeholder="Ordem" optionList={orderList} />
              <Select placeholder="Gênero" optionList={genderList} />
              <Select placeholder="Família" optionList={familyList} />
            </CardFilter>

            <VStack style={{ margin: 0 }} gap={"24px"}>
              <CardFilter title="Descrição Biológica">
                <Select placeholder="Metamorfose" optionList={orderList} />
                <Select placeholder="Fase" optionList={orderList} />
              </CardFilter>
              <CardFilter title="Descrição Ecológica">
                <Select placeholder="Habitat" optionList={orderList} />
                <Select placeholder="Comportamento" optionList={orderList} />
              </CardFilter>
            </VStack>

            <CardFilter title="Descrição Morfológica" style={{ margin: 0 }}>
              <Select placeholder="Morfologia" optionList={morfologiaList} />
              <Select placeholder="Todos" optionList={orderList} />
            </CardFilter>
          </HStack>
          <Button w={"320px"}>Buscar</Button>
        </VStack>
      </VStack>

      <Box
        id="list-result"
        w={"100%"}
        maxW={"1440px"}
        p={"40px 72px"}
        m={"0 auto"}
      >
        <Wrap mb={"40px"} borderBottom={"2px solid #319654"}>
          <Heading fontSize={"28px"} fontWeight={"normal"}>
            Resultado
          </Heading>
        </Wrap>

        <SimpleGrid
          columns={4}
          spacing={10}
          placeContent={"center"}
          placeItems={"center"}
        >
          {cardList.map((card) => (
            <SpecieCard
              id={card.id}
              key={card.id}
              name={card.name}
              imageLink={card.imageLink}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}
