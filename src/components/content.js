import Main from "./main"
import Research from "./research"
import Education from "./education"
import Publications from "./publications"


export default function Content({ content, textColor }) {
    if (content === '') {
      return <Main textColor={textColor} />
    }
    if (content === 'research') {
      return <Research textColor={textColor} />
    }
    if (content === 'education') {
      return <Education textColor={textColor} />
    }
    if (content === 'publications') {
      return <Publications textColor={textColor} />
    }
  }