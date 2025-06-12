import React from 'react';
import { VStack, Box, Heading, Input, Text, Button, Link } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <Box
      p={6}
      borderRadius="lg"
      bg="white"
      shadow={3}
      mx={4}
      mt={10}
    >
      <VStack space={4}>
        <Heading color="#e84c88" fontSize="xl" fontWeight="bold" textAlign="center">
          Crie uma nova conta
        </Heading>

        {/* Nome */}
        <Box>
          <Text color="gray.700" mb={1}>Nome <Text color="red.500">*</Text></Text>
          <Input
            placeholder="Nome"
            variant="outline"
            borderColor="gray.300"
            _focus={{ borderColor: '#e84c88' }}
          />
        </Box>

        {/* E-mail */}
        <Box>
          <Text color="gray.700" mb={1}>E-mail <Text color="red.500">*</Text></Text>
          <Input
            placeholder="Seu email"
            variant="outline"
            keyboardType="email-address"
            borderColor="gray.300"
            _focus={{ borderColor: '#e84c88' }}
          />
        </Box>

        {/* Senha */}
        <Box>
          <Text color="gray.700" mb={1}>Senha <Text color="red.500">*</Text></Text>
          <Input
            placeholder="Sua senha"
            type="password"
            variant="outline"
            borderColor="gray.300"
            _focus={{ borderColor: '#e84c88' }}
          />
        </Box>

        {/* Confirme sua senha */}
        <Box>
          <Text color="gray.700" mb={1}>Confirme sua senha <Text color="red.500">*</Text></Text>
          <Input
            placeholder="Confirme sua senha"
            type="password"
            variant="outline"
            borderColor="gray.300"
            _focus={{ borderColor: '#e84c88' }}
          />
        </Box>

        {/* Botão */}
        <Button
          bg="#e84c88"
          _pressed={{ bg: "#c23a6b" }}
          mt={2}
        >
          Criar Conta
        </Button>

        {/* Link para Login */}
        <Text textAlign="center" mt={3}>
          Já tem uma conta?{' '}
          <Text
            color="#e84c88"
            fontWeight="bold"
            onPress={() => navigation.navigate('SignIn')}
          >
            Entrar
          </Text>
        </Text>
      </VStack>
    </Box>
  );
}
