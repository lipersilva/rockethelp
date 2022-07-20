import { VStack, HStack, IconButton, useTheme, Text, Heading, FlatList, Center } from "native-base";
import { ChatTeardropText, SignOut } from "phosphor-react-native";
import Logo from '../assets/logo_secondary.svg'
import { Filter } from "../components/filter";
import { useState } from "react";
import { Order, OrderProps } from "../components/order";
import { Button } from "../components/button";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [statusSelected, setStatusSelected ] = useState<'open'|'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '1',
     patrimony: '12345',
      when: '18/07/2022 às 14:00',
      status: 'open'
    }
  ]);
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleNewOrder(){
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string){
    navigation.navigate('details', {orderId});
  }

  return(
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo/>
        <IconButton 
          icon={<SignOut size={26} color={colors.gray[300]}/> }
        />

      </HStack>
      <VStack flex={1} px={6}>
        <HStack w="full" mb={4} justifyContent="space-between" alignItems="center">
          <Heading color="gray.100">
            Meus Chamados
          </Heading>
          <Text color="gray.200">
            3
          </Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter 
            title="em andamento" 
            type="open" 
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter 
            title="finalizados" 
            type="closed"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} onPress={()=> handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false} // para que o scroll fique transparente
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />
        <Button 
          title="Nova Solicitação" 
          onPress={handleNewOrder}
        />
      </VStack>
    </VStack>
  );
}