'use client'
import { 
  Text,
  Badge,
  IconButton,
  HStack,
  Link,
  chakra,
  shouldForwardProp,
  Wrap
} from '@chakra-ui/react';
import { SiGmail, SiOrcid } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';
import { SiGooglescholar } from 'react-icons/si';
import { motion, isValidMotionProp } from 'framer-motion';
import { theme } from '../../theme'


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})


export default function Main({ textColor }) {
    return (
      <ChakraBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Text pt={4} fontFamily={theme.fonts.heading} fontSize={'xl'} fontWeight={'bold'} color={textColor}>Rudradeep Guha</Text>
        <Text pt={8} fontFamily={theme.fonts.heading} fontSize={'md'} fontWeight={'bold'} color={textColor}>PhD Student, <br />Institut FEMTO-ST</Text>
  
        <Wrap pt={8} direction='row'>
          <Badge variant={'outline'} color={textColor}>social cognition</Badge>
          <Badge variant={'outline'} color={textColor}>temporal response functions</Badge>
          <Badge variant={'outline'} color={textColor}>interpersonal synchrony</Badge>
          <Badge variant={'outline'} color={textColor}>disorders of consciousness</Badge>
        </Wrap>
  
        <HStack pt={8}>
          <Link href="mailto:rudradeep4@gmail.com" isExternal>
            <IconButton
              variant='ghost'
              aria-label="Email" 
              icon={<SiGmail />} 
              size="lg" 
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              color={textColor}
            />
          </Link>
          <Link href="https://github.com/rudradeep4" isExternal>
            <IconButton 
              variant='ghost'
              aria-label="Github" 
              icon={<VscGithub />} 
              size="lg" 
              _hover={{textColor:"#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              color={textColor}
            />
          </Link>
          <Link href="https://orcid.org/0000-0002-0227-6401" isExternal>
            <IconButton
              variant='ghost'
              aria-label="Orcid" 
              icon={<SiOrcid />} 
              size="lg" 
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              color={textColor}
            />
          </Link>
          <Link href="https://scholar.google.com/citations?user=Zj_w2T8AAAAJ&hl=en&oi=ao" isExternal>
            <IconButton
              variant='ghost'
              aria-label="Google Scholar" 
              icon={<SiGooglescholar />} 
              size="lg" 
              _hover={{textColor: "#FA7B62"}}
              _active={{textColor:"#FA7B62"}}
              color={textColor}
            />
          </Link>
        </HStack>
      </ChakraBox>
    )
  }