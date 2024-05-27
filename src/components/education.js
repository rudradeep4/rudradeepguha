import {
    Heading,
    List,
    ListItem,
    HStack,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react'
import { GoDotFill } from "react-icons/go";
import { motion, isValidMotionProp } from 'framer-motion';
import { theme } from '../../theme'


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})


export default function Education({ textColor }) {
    return (
      <ChakraBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Heading pt={8} fontFamily={theme.fonts.heading} borderBottomWidth={2} borderBottomColor={"#FA7B62"} color={textColor}>Education</Heading>
        <List spacing={4} pt={2} fontFamily={theme.fonts.heading} fontSize={['xs', 'sm']} textColor={textColor}>
          <HStack spacing={8}>
            <GoDotFill />
            <ListItem>PhD <br/>Institut FEMTO-ST <br/>Besançon, France</ListItem>
          </HStack>
          <HStack spacing={8}>
            <GoDotFill />
            <ListItem>M.Sc. in Cognitive Science <br/>National Research University Higher School of Economics <br/>Moscow, Russia</ListItem>
          </HStack>
          <HStack spacing={8}>
            <GoDotFill />
            <ListItem>B.Sc. in Computer Science <br/>Ashoka University <br/>New Delhi, India</ListItem>
          </HStack>
        </List>
      </ChakraBox>
  )
}