export default {
  name: 'earth',
  title: 'Планета Земля',
  background: require('./background.jpeg'),
  miniature: require('./background.jpeg'),
  questions: [
    {
      question: '1+2=',
      difficult: 1,
      answers: [
        {
          answer: '1',
          correct: false
        },
        {
          answer: '2',
          correct: false
        },
        {
          answer: '3',
          correct: true
        }
      ]
    },
    {
      question: 'текст вопроса',
      difficult: 1,
      answers: [
        {
          answer: 'ответ 1',
          correct: false
        }
      ]
    }
  ]
}
