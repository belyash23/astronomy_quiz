export default {
  name: 'earth',
  title: 'Планета Земля',
  background: require('./background.jpg'),
  miniature: require('./background.jpg'),
  questions: [
    {
      question: 'Какая по счёту планета Земля от Солнца?',
      difficult: 1,
      answers: [
        {
          answer: '4',
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
      question: 'Какую форму имеет планета Земля?',
      difficult: 1,
      answers: [
        {
          answer: 'Форму шара',
          correct: false
        },
        {
          answer: 'Форму эллипса',
          correct: false
        },
        {
          answer: 'Форму сфероида',
          correct: true
        }
      ] 
    }, 
    {
      question: 'Назовите жидкую водную оболочку Земли',
      difficult: 1,
      answers: [
        {
          answer: 'Атмосфера',
          correct: false
        },
        {
          answer: 'Гидросфера',
          correct: true
        },
        {
          answer: 'Литосфера',
          correct: false
        }
      ] 
    }, 
    {
      question: 'Назовите газовую оболочку земли',
      difficult: 1,
      answers: [
        {
          answer: 'Атмосфера',
          correct: true
        },
        {
          answer: 'Гидросфера',
          correct: false
        },
        {
          answer: 'Литосфера',
          correct: false
        }
      ] 
    }, 
    {
      question: 'Из скольких процентов азота состоит атмосфера?',
      difficult: 1,
      answers: [
        {
          answer: '56%',
          correct: false
        },
        {
          answer: '83%',
          correct: false
        },
        {
          answer: '78%',
          correct: true
        }
      ] 
    }, 
    {
      question: 'Назовите приблизительно массу Земли',
      difficult: 2,
      answers: [
        {
          answer: '7 * 10<sup>20</sup> кг',
          correct: false
        },
        {
          answer: '4 * 10<sup>30</sup> кг',
          correct: false
        },
        {
          answer: '6 * 10<sup>24</sup> кг',
          correct: true
        }
      ] 
    }, 
    {
      question: 'Какой процесс возникает из – за наличия газов в атмосфере?',
      difficult: 2,
      answers: [
        {
          answer: 'Парниковый эффект',
          correct: true
        },
        {
          answer: 'Солнечный эффект',
          correct: false
        },
        {
          answer: 'Газовый эффект',
          correct: false
        }
      ] 
    }, 
    {
      question: 'Назовите среднюю годовую температуру Земли',
      difficult: 2,
      answers: [
        {
          answer: '15 °С',
          correct: true
        },
        {
          answer: '20 °С',
          correct: false
        },
        {
          answer: '10 °С',
          correct: false
        }
      ] 
    }, 
    {
      question: 'Назовите средний радиус Земли',
      difficult: 2,
      answers: [
        {
          answer: '6058 км',
          correct: false
        },
        {
          answer: '6378 км',
          correct: true
        },
        {
          answer: '6431 км',
          correct: false
        }
      ] 
    }, 
    {      
      question: 'Назовите среднюю плотность Земли',
      difficult: 2,
      answers: [
        {
          answer: '5200 кг/см<sup>3</sup>',
          correct: false
        },
        {
          answer: '5520 кг/см<sup>3</sup>',
          correct: true
        },
        {
          answer: '6120 кг/см<sup>3</sup>',
          correct: false
        }
      ] 
    }, 
    {      
      question: 'На сколько градусов была бы ниже температура Земли, если бы в атмосфере не было углекислого газа и водяных паров?',
      difficult: 3,
      answers: [
        {
          answer: 'На 10 °С',
          correct: false
        },
        {
          answer: 'На 100 °С',
          correct: false
        },
        {
          answer: 'На 40 °С',
          correct: true
        }
      ] 
    }, 
    {      
      question: 'Назовите толщину Земли под океаном',
      difficult: 3,
      answers: [
        {
          answer: '6 – 10 км',
          correct: true
        },
        {
          answer: '8 - 12 км',
          correct: false
        },
        {
          answer: '9 – 16 км',
          correct: false
        }
      ] 
    }, 
    {      
      question: 'В каком состоянии находится вещество во внутреннем ядре?',
      difficult: 3,
      answers: [
        {
          answer: 'В газообразном',
          correct: false
        },
        {
          answer: 'В жидком',
          correct: false
        },
        {
          answer: 'В твердом',
          correct: true
        }
      ] 
    }, 
    {
      question: 'Назовите процент углекислого газа в атмосфере',
      difficult: 3,
      answers: [
        {
          answer: '0,095 %',
          correct: false
        },
        {
          answer: '3,420 %',
          correct: false
        },
        {
          answer: '0,045 %',
          correct: true
        }
      ] 
    }, 
    {
      question: 'Где находится южный полюс Земли?',
      difficult: 3,
      answers: [
        {
          answer: 'На юге России',
          correct: false
        },
        {
          answer: 'На севере Исландии',
          correct: false
        },
        {
          answer: 'На севере Канады',
          correct: true
        },
      ] 
    } 
  ] 
}
