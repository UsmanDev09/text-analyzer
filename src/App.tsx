import { ChangeEvent, useState } from 'react' 
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

import './App.scss'

const App = () => {
  const [, setText] = useState<string>('');  
  const [charactersLength, setCharactersLength] = useState<number>(0);  
  const [wordsLength, setWordsLength] = useState<number>(0);  
  const [sentencesCount, setSentencesCount] =useState<number>(0);
  const [paragraphsCount, setParagraphsCount] = useState<number>(0);
  const [avgReadingTime, setAvgReadingTime] = useState<number>(0);

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let { value } = e.target;

    setText(value);
    setCharactersLength(value.length);
    setWordsLength(value.split(' ').length);
    setSentencesCount(value.split(/[.!?]/).length - 1)
    setParagraphsCount(value.split(/[/n]/).length - 1);
    setAvgReadingTime((value.split(' ').length)/225);     
  }



  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox 
            wordsLength={wordsLength} 
            charactersLength={charactersLength} 
            sentencesCount={sentencesCount} 
            paragraphsCount={paragraphsCount}
          />
          <TextArea handleText={handleText}/>
          <BottomResultBox avgReadingTime={avgReadingTime} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
