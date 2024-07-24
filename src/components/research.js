import {
    Heading,
    Text,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { theme } from '../../theme'


const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})


export default function Research({ textColor }) {
    return (
      <ChakraBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Heading pt={8} fontFamily={theme.fonts.heading} borderBottomWidth={2} borderBottomColor={"#FA7B62"} color={textColor}>Research</Heading>
        <Text pt={2} fontFamily={theme.fonts.body} fontSize={['sm', 'md']} color={textColor}>
          My research lies, broadly speaking, in the field of social cognition. 
          I'm studying the perception of social contingency in interactions between agents and the mechanisms humans use to process this contingent behavior.
        </Text>
        <Text pt={2} fontFamily={theme.fonts.body} fontSize={['sm', 'md']} color={textColor}>
          This ability develops early in infancy and in adulthood, facilitates high-level social behavior like joint attention, turn taking in conversation and theory of mind.
          Moreover, it could potentially provide interesting insights into the processing of social cues in people with ASD, social anxiety and other disorders which impact social ability.
        </Text>
      </ChakraBox>
    )
  }