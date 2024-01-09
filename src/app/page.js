'use client'
import Image from 'next/image'
import { 
  Box,
  Grid,
  Button,
  useColorMode,
  useColorModeValue,
  Flex,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { theme } from '../../theme'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Content from '@/components/content'


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('#F7F6F2', '#1A1A1A')

  const [content, showContent] = useState('')

  return (
    <Grid h='100%' w='100%' bg={bg}>
      <Box w={['350px', '700px']} py={[8, 16]} position={'absolute'} left={'50%'} transform="translate(-50%, 0)">
        <Flex>
          <Image
            src="/me2_test.svg"
            alt="main picture"
            width={300}
            height={300}
            priority
          />

          <Spacer />

          <VStack align={'end'}>
            <Button
              variant='ghost'
              aria-label="Dark Mode Switch" 
              size="lg" 
              fontFamily={theme.fonts.heading}
              onClick={toggleColorMode}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={colorMode === "light" ? "#000000" : "#FA7B62"}
            >
              dark-mode [ {colorMode === "light" ? <CloseIcon boxSize={2} /> : <CheckIcon boxSize={2} />} ]
            </Button>

            <Button
              variant='ghost'
              aria-label="home" 
              size="lg" 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === '' ? "#FA7B62" : colorMode === "light" ? "#000000" : "#FFFFFF"}
              mt={8}
            >
              home
            </Button>

            <Button
              variant='ghost'
              aria-label="research" 
              size="lg" 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('research')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === 'research' ? "#FA7B62" : colorMode === "light" ? "#000000" : "#FFFFFF"}
            >
              research
            </Button>

            <Button
              variant='ghost'
              aria-label="education" 
              size="lg" 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('education')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === 'education' ? "#FA7B62" : colorMode === "light" ? "#000000" : "#FFFFFF"}
            >
              education
            </Button>

            <Button
              variant='ghost'
              aria-label="publications" 
              size="lg" 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('publications')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === 'publications' ? "#FA7B62" : colorMode === "light" ? "#000000" : "#FFFFFF"}
            >
              publications
            </Button>
          </VStack>
        </Flex>

        <AnimatePresence initial={false}>
          <Content content={content}/>
        </AnimatePresence>
      </Box>
    </Grid>
  )
}
