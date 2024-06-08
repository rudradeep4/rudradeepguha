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
            I study the perception of contingency or synchrony in dyadic interactions and the brain mechanisms or cues humans use to make judgements about said interactions. <br /> <br />
            The social and communicative ability of humans develops relatively early and is quite robust (see Trevarthen's TV experiment and its many variations) 
            but little is known about the underlying mechanisms. While it is interesting to investigate even in healthy participants, 
            it's even more so when one considers the implications it could have on our understanding of how to treat and/or care for 
            people with ASD, social anxiety and other disorders which impact social ability. <br /> <br />

            The work is very multidisciplinary and data-driven and utilizes methods from social psychology, cognitive neuroscience, computational modeling and others. 
        </Text>
      </ChakraBox>
    )
  }