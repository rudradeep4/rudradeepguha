'use client'
import { 
  Box,
  Grid,
  Button,
  Flex,
  Spacer,
  VStack,
  Image
} from '@chakra-ui/react'
import { theme } from '../../theme'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Content from '@/components/content'


export default function Home() {

  const [colorMode, setColorMode] = useState(true)
  const [content, showContent] = useState('')

  return (
    <Grid minH='100vh' bg={colorMode ? '#F7F6F2' : '#1A1A1A'}>
      <Box w={['100%', '700px']} px={[4, 0]} py={8} position={'absolute'} left={'50%'} transform="translate(-50%, 0)">
        <Flex>
          <Image
            src="/me2_test.svg"
            alt="main picture"
            width={[200, 300]}
            height={[200, 300]}
            priority
          />

          <Spacer />

          <VStack align={'end'}>
            <Button
              variant='ghost'
              aria-label="Dark Mode Switch" 
              size={["sm", "lg"]} 
              fontFamily={theme.fonts.heading}
              onClick={() => setColorMode(!colorMode)}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={colorMode ? '#1A1A1A' : '#F7F6F2'}
            >
              dark-mode [ {colorMode ? <CloseIcon boxSize={2} /> : <CheckIcon boxSize={2} />} ]
            </Button>

            <Button
              variant='ghost'
              aria-label="home" 
              size={["sm", "lg"]} 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === '' ? "#FA7B62" : colorMode ? '#1A1A1A' : '#F7F6F2'}
              mt={[4, 8]}
            >
              home
            </Button>

            <Button
              variant='ghost'
              aria-label="research" 
              size={["sm", "lg"]} 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('research')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === 'research' ? "#FA7B62" : colorMode ? '#1A1A1A' : '#F7F6F2'}
            >
              research
            </Button>

            <Button
              variant='ghost'
              aria-label="education" 
              size={["sm", "lg"]} 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('education')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === 'education' ? "#FA7B62" : colorMode ? '#1A1A1A' : '#F7F6F2'}
            >
              education
            </Button>

            <Button
              variant='ghost'
              aria-label="publications" 
              size={["sm", "lg"]} 
              fontFamily={theme.fonts.heading}
              onClick={() => showContent('publications')}
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              textColor={content === 'publications' ? "#FA7B62" : colorMode ? '#1A1A1A' : '#F7F6F2'}
            >
              publications
            </Button>
          </VStack>
        </Flex>

        <AnimatePresence initial={false}>
          <Content content={content} textColor={colorMode ? '#1A1A1A' : '#F7F6F2'}/>
        </AnimatePresence>
      </Box>
    </Grid>
  )
}
