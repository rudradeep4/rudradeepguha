import Main from "./main"
import Research from "./research"
import Education from "./education"
import Publications from "./publications"


export default function Content({ content }) {
    if (content === '') {
      return <Main />
    }
    if (content === 'research') {
      return <Research />
    }
    if (content === 'education') {
      return <Education />
    }
    if (content === 'publications') {
      return <Publications />
    }
  }