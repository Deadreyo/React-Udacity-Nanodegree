import { useEffect } from "react";
import { useState } from "react";

export default function MathGame() {

    const [numCorrect, setNumCorrect] = useState(0);
    const [numQuestions, setNumQuestions] = useState(0);
    const [value1, setValue1] = useState(Math.floor(Math.random() * 100));
    const [value2, setValue2] = useState(Math.floor(Math.random() * 100));
    const [value3, setValue3] = useState(Math.floor(Math.random() * 100));
    const [proposedAnswer, setProposedAnswer] = useState(Math.floor(Math.random() * 3) + value1 + value2 + value3);

    useEffect( () => {
        setValue1(Math.floor(Math.random() * 100));
        setValue2(Math.floor(Math.random() * 100));
        setValue3(Math.floor(Math.random() * 100));
        setProposedAnswer(Math.floor(Math.random() * 3) + value1 + value2 + value3);
    }, [numQuestions])

    const handleCorrectAns = () => {
        setNumCorrect(numCorrect + 1);
        setNumQuestions(numQuestions + 1);
    }
    const handleIncorrectAns = () => {
        setNumQuestions(numQuestions + 1);
    }

    const handleAnswer = (button) => {
        if(button === "true" && proposedAnswer === value1 + value2 + value3) {
            handleCorrectAns();
        } else if(button === "false" && proposedAnswer !== value1 + value2 + value3) {
            handleCorrectAns();
        } else {
            handleIncorrectAns();
        }
    }


    return (
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => handleAnswer("true")}>True</button>
          <button onClick={() => handleAnswer("false")}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
    )
}