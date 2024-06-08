import {
    Heading,
    List,
    ListItem,
    Text,
    chakra,
    shouldForwardProp,
    Flex,
    Spacer
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
        <List spacing={8} pt={2} fontFamily={theme.fonts.body} fontSize={['sm', 'md']} textColor={textColor}>
          <ListItem>
            <Flex>
              <ListItem>PhD <br/>Institut FEMTO-ST <br/>Besançon, France</ListItem>
              <Spacer />
              <Text>2022 - </Text>
            </Flex>
          </ListItem>

          <ListItem>
            <Flex>
              <ListItem>M.Sc. in Cognitive Science <br/>National Research University Higher School of Economics <br/>Moscow, Russia</ListItem>
              <Spacer />
              <Text>2018 - 2020</Text>
            </Flex>          
          </ListItem>

          <ListItem>
            <Flex>
            <ListItem>B.Sc. in Computer Science <br/>Ashoka University <br/>New Delhi, India</ListItem>
            <Spacer />
            <Text>2015 - 2018</Text>
            </Flex>
          </ListItem>
        </List>
      </ChakraBox>
  )
}