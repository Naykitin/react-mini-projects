import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ tryAgain, correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={tryAgain}>Попробовать снова</button>
    </div>
  );
}

function Game({ step, onClickVariant }) {

  const progress = Math.round((step / questions.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <h1>{questions[step].title}</h1>
      <ul>
        {
          questions[step].variants.map((item, index) => <li key={index} onClick={() => onClickVariant(index)}>{item}</li>)  
        }
      </ul>
    </>
  );
}

function Quiz() {

  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const onClickVariant = (index) => {
    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  }

  const tryAgain = () => {
    setStep(0);
    setCorrect(0);
  }

  return (
    <div>
      <div className="quizApp">
        {
          step !== questions.length ? (
            <Game step={step} onClickVariant={onClickVariant}/>
          ) : (
            <Result tryAgain={tryAgain} correct={correct} />
          )
        }
      </div>
    </div>
    
  );
}

export default Quiz;
