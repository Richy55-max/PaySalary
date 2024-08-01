'use client';

import React, { useState } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { default as data } from './data.json';

const Feature = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  const imageStyle = {
    borderRadius: '12px',
    height: '100%',
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      gap={10}
      width={'100%'}
    >
      <VStack alignItems={'flex-start'} w={'50%'} gap={2}>
        {data.map((item, index) => (
          <Box
            key={item.id}
            className={
              selectedItem === item.id ||(selectedItem === null && index === 0)
                ? 'feature-content-box'
                : ''
            }
            padding={'1rem 24px'}
            borderRadius={'xl'}
            cursor={'pointer'}
            onClick={() => handleClick(item.id)}
          >
            <Heading
              fontFamily={'Inter'}
              fontWeight={500}
              fontSize={{ base: '22px', sm: '22px', md: '22px' }}
              lineHeight={'28px'}
              position={'relative'}
              color='#1f1f30'
            >
              {item.title}
            </Heading>
            <Text
              as={'h2'}
              fontSize='1rem'
              fontFamily={'Inter'}
              fontWeight={'400'}
              lineHeight={'22px'}
              color={'#41415a'}
              marginTop='10px !important'
            >
              {item.description}
            </Text>
          </Box>
        ))}
      </VStack>

      <Box position={'relative'}>
        <div style={{ height: '100%', aspectRatio: '1/1' }}>
          {' '}
          <Image
            src={'https://bit.ly/2Z4KKcF'}
            alt={'features-image'}
            height={100}
            width={500}
            loading='lazy'
            priority={false}
            style={imageStyle}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Feature;
