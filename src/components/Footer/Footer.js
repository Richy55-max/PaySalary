'use client';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import styles from '../../app/page.module.css';

const Logo = () => {
  return (
    <Text fontWeight={'extrabold'} fontSize={'3xl'} mb={2} color={'#5466f9'}>
      Logo
    </Text>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={'#fff'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease-out'}
      _hover={{
        bg: '#5466f9',
        color: '#fff',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const currentYear = new Date();
  const year = currentYear.getFullYear();

  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      className={styles.container}
      // background={'#f8fafb'}
      background={'#f5f6ff'}
    >
      <Flex
        justifyContent={{ sm: 'center', md: 'space-between' }}
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
        padding={'50px 0'}
      >
        <Stack spacing={6} maxW={'370px'}>
          <Box>
            <Logo color={useColorModeValue('gray.700', 'white')} />
            <Text mt={10} color={'rgba(121, 128, 138, 1)'}>
              Facilitez l'accès aux services financiers pour les employés qui
              n'ont pas de compte bancaire traditionnel.
            </Text>
          </Box>
        </Stack>

        <HStack align={'flex-start'} className='footer-label'>
          <Link href={'#'}>Features</Link>
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>Testimonials</Link>
          <Link href={'#'}>Faq</Link>
          <Link href={'#'}>Support</Link>
        </HStack>
      </Flex>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
          color={'rgba(121, 128, 138, 1)'}
        >
          <Text> {'© ' + year} Easy salary. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
