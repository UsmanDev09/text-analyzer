import './index.scss'

const TextArea : React.FC<{handleText: any }> = ( { handleText } ) => {
  return <textarea onChange={(e) => handleText(e)} className="text-area" placeholder="Paste your text here..." autoFocus/>
}

export default TextArea
