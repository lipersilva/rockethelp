import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import { Heading, VStack, Icon, useTheme } from "native-base";
import { Envelope, Key } from 'phosphor-react-native'
import Logo from "../assets/logo_primary.svg"
import { Input } from "../components/input";
import { Button } from "../components/button";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors } = useTheme();

  function handleSignIn() {
    if(!email || !password) {
      return Alert.alert('Entrar', 'Informe e=mail e senha');
    }
    // auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log("Logged in!");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo width={200} height={200} />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input 
        placeholder="E-mail" 
        mb={4} 
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
        onChangeText={setEmail}
      />
      <Input 
        placeholder="Senha"
        mb={8} 
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry // hide password 
        onChangeText={setPassword} 
      />
      <Button title="Entrar" w="full"/>
      
    </VStack>
  );
}