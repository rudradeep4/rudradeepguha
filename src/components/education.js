import {
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    chakra,
    shouldForwardProp,
    HStack,
    Divider,
} from '@chakra-ui/react'
import { MdCircle } from "react-icons/md";
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
        <List spacing={8} pt={2} fontFamily={theme.fonts.body} fontSize={['sm', 'md']} textColor={textColor}>
          <ListItem>
            <HStack>
              <ListIcon as={MdCircle} size={'xs'} />
              <Text>PhD (2022 - )<br/>Institut FEMTO-ST <br/>Besançon, France</Text>
            </HStack>
          </ListItem>

          <ListItem>
            <HStack>
              <ListIcon as={MdCircle} size={'xs'} />
              <Text>M.Sc. in Cognitive Science (2018 - 2020)<br/>National Research University Higher School of Economics <br/>Moscow, Russia</Text>
            </HStack>
          </ListItem>

          <ListItem>
            <HStack>
              <ListIcon as={MdCircle} size={'xs'} />
              <Text>B.Sc. in Computer Science (2015 - 2018)<br/>Ashoka University <br/>New Delhi, India</Text>
            </HStack>
          </ListItem>
        </List>
      </ChakraBox>
  )
}