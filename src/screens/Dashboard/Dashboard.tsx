import React, { useCallback, useEffect, useState } from "react"
import {
  Box,
  Heading,
  Spinner,
  Text,
  Button,
  HStack,
  FlatList,
  VStack,
  Divider,
  useToast,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
// import { AppServices } from "../services/app-services"
// import { HistoryPayload } from "../models"

export default function Dashboard() {
  const navigation = useNavigation()
  const toast = useToast()

  const [history, setHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // const getHistoryData = useCallback(async () => {
  //   setIsLoading(true)
  //   try {
  //     const response = await AppServices.getHistory()
  //     setHistory(response.data.history)
  //   } catch (error) {
  //     console.error("Erro ao buscar histórico:", error)
  //     toast.show({
  //       title: "Erro ao carregar histórico",
  //       placement: "top",
  //       bgColor: "red.500",
  //     })
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   getHistoryData()
  // }, [getHistoryData])

  const renderItem = ({ item }: any) => (
    <Box px={4} py={3} bg="white" borderRadius="md" shadow={1} mb={3}>
      <VStack space={1}>
        <Text fontWeight="bold" color="gray.800">
          Data: {item.date}
        </Text>
        <Text color="gray.600">Resultado: {item.result}</Text>
        <Text color="gray.500" fontSize="xs">
          ID: {item.id}
        </Text>
      </VStack>
    </Box>
  )

  return (
    <Box flex={1} bg="#f9f9f9" px={5} py={6}>
      <HStack justifyContent="space-between" alignItems="center" mb={4}>
        <Heading size="md" color="#333">
          Histórico de Predições
        </Heading>
        <Button
          bg="#e84c88"
          _pressed={{ bg: "#c23a6b" }}
          onPress={() => navigation.navigate("NewPrediction")}
        >
          Nova Predição
        </Button>
      </HStack>

      {/* {isLoading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Spinner size="lg" color="#e84c88" />
        </Box>
      ) : history.length > 0 ? (
        <FlatList
          data={history}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text textAlign="center" color="gray.600" mt={20}>
          Não há histórico de predições.
        </Text>
      )} */}
    </Box>
  )
}
