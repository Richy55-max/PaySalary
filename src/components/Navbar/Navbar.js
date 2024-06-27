'use client';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import styles from '../../app/page.module.css';
import { NAV_ITEMS } from './data';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.scrollY;
    setScrollYPosition(newScrollYPosition);

    const navbar = document.querySelector('.navbar');

    if (navbar && newScrollYPosition >= 40) {
      navbar.setAttribute('id', 'sticky-position');
    } else {
      navbar.removeAttribute('id');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box>
      <Flex
        className={styles.container}
        minH={'80px'}
        py={{ base: 2 }}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={'#1f2130'}
            fontSize={'1rem'}
            fontWeight={'bold'}
          >
            Logo
          </Text>
          <Flex className={styles.desktopNav} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            variant={'link'}
            fontSize={'1rem'}
            fontWeight={500}
            href={'#'}
            color={'#1f2130'}
            _hover={{
              color: '#5466f9',
            }}
          >
            Sign In
          </Button>

          <Button
            className={styles.desktopNav}
            as={'a'}
            fontSize={'1rem'}
            fontWeight={600}
            color={'white'}
            backgroundColor={'#5466f9'}
            href={'#'}
            _hover={{
              bg: '#081fde',
            }}
          >
            Sign Up
          </Button>
        </Stack>

        <Box className={styles.mobileNavButton}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={8} h={8} /> : <HamburgerIcon w={8} h={8} />
            }
            variant={'unstyled'}
            aria-label={'Toggle Navigation'}
            color={'#1f2130'}
          />
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = '#1f2130';
  const linkHoverColor = '#5466f9';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'1rem'}
            fontWeight={500}
            color={linkColor}
            marginRight='10px'
            padding='10px 10px'
            borderRadius='5px'
            transition={'ease .3s'}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <MobileNavItem {...navItem} />
          <Divider />
        </Box>
      ))}
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Button
          as={'a'}
          fontSize={'1rem'}
          fontWeight={600}
          color={'white'}
          backgroundColor={'#5466f9'}
          href={'#'}
          _hover={{
            bg: '#081fde',
          }}
          width={'50%'}
        >
          Sign In
        </Button>
      </Box>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
