import React from 'react';
import './QuestionBlock.css';
import AnswerList from '../AnswerList/AnswerList';


const QuestionBlock = (props) => (
    <div className='question-block'>
        <div className='question-title'>
            {props.id}. {props.title}
        </div>
        <div className='current-question'>
            <span>{`${props.currentQuestion} of ${props.totalLength}`}</span>
        </div>
        <AnswerList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            answerState={props.answerState}
        />
    </div>
)

export default QuestionBlock;