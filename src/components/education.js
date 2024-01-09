import {
    Heading,
    List,
    ListItem,
    HStack,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { motion, isValidMotionProp } from 'framer-motion';
import { theme } from '../../theme'


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})


export default function Education() {
    return (
      <ChakraBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Heading pt={8} fontFamily={theme.fonts.heading} borderBottomWidth={2} borderBottomColor={"#FA7B62"}>Education</Heading>
        <List spacing={4} pt={2} fontFamily={theme.fonts.heading} fontSize={'sm'}>
          <HStack spacing={8}>
            <MdCheckBoxOutlineBlank />
            <ListItem>PhD <br/>Institut FEMTO-ST <br/>Besançon, France</ListItem>
          </HStack>
          <HStack spacing={8}>
            <MdCheckBox />
            <ListItem>M.Sc. in Cognitive Science <br/>National Research University Higher School of Economics <br/>Moscow, Russia</ListItem>
          </HStack>
          <HStack spacing={8}>
            <MdCheckBox />
            <ListItem>B.Sc. in Computer Science <br/>Ashoka University <br/>New Delhi, India</ListItem>
          </HStack>
        </List>
      </ChakraBox>
  )
}