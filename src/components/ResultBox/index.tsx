import './index.scss'

const ResultBox: React.FC<{wordsLength: number, charactersLength: number, sentencesCount: number, paragraphsCount: number}> = ({wordsLength, charactersLength, sentencesCount, paragraphsCount} ) => {
  const resultBar = [
    {
      title: 'Words',
      value: wordsLength,
    },
    {
      title: 'Characters',
      value: charactersLength,
    },
    {
      title: 'Sentences',
      value: sentencesCount,
    },
    {
      title: 'Paragraphs ',
      value: paragraphsCount,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
