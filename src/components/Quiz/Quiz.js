import React, { Component } from 'react';
import './Quiz.css';
import QuestionBlock from '../QuestionBlock/QuestionBlock';
import FinishedLayout from '../FinishedLayout/FinishedLayout';

class Quiz extends Component {
    state = {
        finished: false,
        currentQuestion: 0,
        answerState: null,
        result: 0,
        questions: [
            {
                title: 'Solve : 24 + 4 ÷ 4',
                correctAnswer: 1,
                id: 1,
                answers: [
                    { text: 25, id: 1 },
                    { text: 6, id: 2 },
                    { text: 28, id: 3 },
                    { text: 7, id: 4 },
                ]

            },
            {
                title: 'Solve : 24 + 4 ÷ 4 - (8 + 1)',
                correctAnswer: 3,
                id: 2,
                answers: [
                    { text: 11, id: 1 },
                    { text: 22, id: 2 },
                    { text: 18, id: 3 },
                    { text: 44, id: 4 },
                ]

            },
            {
                title: 'Solve : sqrt(196)',
                correctAnswer: 4,
                id: 3,
                answers: [
                    { text: 11, id: 1 },
                    { text: 12, id: 2 },
                    { text: 13, id: 3 },
                    { text: 14, id: 4 },
                ]
            },
            {
                title: 'Simplify : 3 + 6 x (5 + 4) ÷ 3 - 7',
                correctAnswer: 2,
                id: 4,
                answers: [
                    { text: 11, id: 1 },
                    { text: 14, id: 2 },
                    { text: 16, id: 3 },
                    { text: 15, id: 4 },
                ]

            },
            {
                title: 'What is the general equation of a straight line?',
                correctAnswer: 2,
                id: 5,
                answers: [
                    { text: ' y x y = x + 2', id: 1 },
                    { text: ' y = mx + c', id: 2 },
                    { text: ' y = 1', id: 3 },
                    { text: ' y = 0', id: 4 },
                ]

            },
            {
                title: 'Solve: 5!',
                correctAnswer: 4,
                id: 6,
                answers: [
                    { text: 15, id: 1 },
                    { text: 25, id: 2 },
                    { text: 100, id: 3 },
                    { text: 120, id: 4 },
                ]
            },
            {
                title: 'Solve : log(100)',
                correctAnswer: 2,
                id: 7,
                answers: [
                    { text: 1, id: 1 },
                    { text: 2, id: 2 },
                    { text: 10, id: 3 },
                    { text: 100, id: 4 },
                ]
            },
            {
                title: 'The sum of the triangle interior angles is ... ',
                correctAnswer: 3,
                id: 8,
                answers: [
                    { text: 90, id: 1 },
                    { text: 360, id: 2 },
                    { text: 180, id: 3 },
                    { text: 240, id: 4 },
                ]

            },
            {
                title: 'What is the general equation of a straight line?',
                correctAnswer: 2,
                id: 9,
                answers: [
                    { text: ' y x y = x + 2', id: 1 },
                    { text: ' y = mx + c', id: 2 },
                    { text: ' y = 1', id: 3 },
                    { text: ' y = 0', id: 4 },
                ]

            },
            {
                title: 'What is 1004 divided by 2?',
                correctAnswer: 2,
                id: 10,
                answers: [
                    { text: 52, id: 1 },
                    { text: 502, id: 2 },
                    { text: 520, id: 3 },
                    { text: 5002, id: 4 },
                ]
            }
        ]
    }
    onAnswerClick = (answerId) => {
        const activeQuestion = this.state.questions[this.state.currentQuestion];
        console.log(answerId);

        if (activeQuestion.correctAnswer === answerId) {
            this.setState({
                answerState: { [answerId]: 'true' },
                result: this.state.result + 1
            })
        } else {
            this.setState({
                answerState: { [answerId]: 'false' }
            })
        }

        const timeout = window.setTimeout(() => {
            if (this.isGameFinished()) {
                this.setState({
                    finished: !this.state.finished
                })
            }
            else {
                this.setState({
                    currentQuestion: this.state.currentQuestion + 1,
                    answerState: null
                })
            }
            window.clearTimeout(timeout)
        }, 1300)


    }

    isGameFinished() {
        return this.state.currentQuestion + 1 === this.state.questions.length
    }

    onRetry = () => {
        this.setState({
            finished: false,
            currentQuestion: 0,
            answerState: null,
            result: 0,
        })
    }
    render() {
        return (
            <div className='quiz'>
                <div className='quiz-title'>Math Quiz</div>
                {this.state.finished ?
                    <FinishedLayout
                        result={this.state.result}
                        onRetry={this.onRetry} />

                    : <QuestionBlock
                        title={this.state.questions[this.state.currentQuestion].title}
                        id={this.state.questions[this.state.currentQuestion].id}
                        answers={this.state.questions[this.state.currentQuestion].answers}
                        totalLength={this.state.questions.length}
                        onAnswerClick={this.onAnswerClick}
                        currentQuestion={this.state.currentQuestion + 1}
                        answerState={this.state.answerState}
                    />
                }
            </div>
        );
    }
}

export default Quiz;