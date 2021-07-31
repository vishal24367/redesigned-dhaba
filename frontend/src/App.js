import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import SignUpLoginModal from './SignUpLoginModal';

function App() {
  const [open, setOpen] = useState(false);

  const handleModal = (value) => {
    setOpen(value);
  }
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Button onClick={(e)=>{setOpen(true)}}>SignUp</Button>
          <VStack spacing={8}>
            {open && <SignUpLoginModal modal={open} handleModal={handleModal}/>}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
