import {
    Heading,
    List,
    ListItem,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion';
import { theme } from '../../theme'
import Link from 'next/link';


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})


export default function Publications({ textColor }) {
    return (
      <ChakraBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Heading pt={8} fontFamily={theme.fonts.heading} borderBottomWidth={2} borderBottomColor={"#FA7B62"} color={textColor}>Publications</Heading>
        <List spacing={4} pt={2} fontFamily={theme.fonts.heading} fontSize={['xs', 'sm']} textColor={textColor}>
          <ListItem>
            <Link href={'https://doi.org/10.1101/2023.11.30.569391'} target='_blank'>
              <i>Cortical responses to looming sources are explained away by the auditory periphery</i>
            </Link>
            <br/>
            Sarah Benghanem, <b>Rudradeep Guha</b>, Estelle Pruvost-Robieux, Julie Lévi-Strauss, Coralie Joucla, Alain Cariou, Martine Gavaret, Jean-Julien Aucouturier <br/>
            bioRxiv 2023.11.30.569391 <br />
          </ListItem>
          <ListItem>
            <Link href={'https://doi.org/10.1101/2023.11.30.569381'} target='_blank'>
              <i>The implicit influence of pitch contours and emotional timbre on P300 components in an own-name oddball paradigm</i>
            </Link> 
            <br/>
            Estelle Pruvost-Robieux, Coralie Joucla, Sarah Benghanem, <b>Rudradeep Guha</b>, Marco Liuni, Martine Gavaret, Jean-Julien Aucouturier
            bioRxiv 2023.11.30.569381 <br />
          </ListItem>
        </List>
      </ChakraBox>
    )
  }