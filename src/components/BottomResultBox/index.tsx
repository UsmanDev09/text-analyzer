import './index.scss'

const BottomResultBox: React.FC<{avgReadingTime: number }> = ({ avgReadingTime }) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: avgReadingTime,
    },
    {
      title: 'Longest word:',
      value: '-',
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
