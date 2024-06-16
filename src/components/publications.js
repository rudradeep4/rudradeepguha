import {
    Heading,
    List,
    ListItem,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion';
import { theme } from '../../theme'


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
        <List spacing={4} pt={2} fontFamily={theme.fonts.body} fontSize={['sm', 'md']} textColor={textColor}>
          <ListItem as={'a'} href='https://doi.org/10.1016/j.cortex.2024.05.018'>
            Benghanem, S., <b>Guha, R.</b>, Pruvost-Robieux, E., Levi-Strauss, J., Joucla, C., Cariou, A., ... & Aucouturier, J. J. (2024). Cortical responses to looming sources are explained away by the auditory periphery. Cortex.
          </ListItem>
        </List>
      </ChakraBox>
    )
  }