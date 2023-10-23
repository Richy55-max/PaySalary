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
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import styles from '../../app/page.module.css';
import { NAV_ITEMS } from './data';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        className={styles.container}
        // bg={useColorModeValue("white", "gray.800")}
        // color={"#fff"}
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
            fontSize={'16px'}
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
            className={styles.desktopNav}
            as={'a'}
            fontSize={'16px'}
            fontWeight={600}
            color={'white'}
            backgroundColor={'#5466f9'}
            href={'#'}
            _hover={{
              bg: '#081fde',
            }}
          >
            Sign In
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
  const linkHoverColor = useColorModeValue('#1f2130', '#1f2130');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'16px'}
            fontWeight={500}
            color={linkColor}
            marginRight='10px'
            padding='10px 10px'
            borderRadius='5px'
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
              background: '#f5f6ff',
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
          fontSize={'16px'}
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
