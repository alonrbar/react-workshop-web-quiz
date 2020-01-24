import * as React from 'react';
import leven from 'leven';

export interface QuizProps {
    question: string;
    correctAnswer: string;
}

class QuizState {
    currentAnswer: string;
    correctness: number;
}

export class Quiz extends React.Component<QuizProps, QuizState> {

    constructor(props: QuizProps) {
        super(props);

        this.state = new QuizState();
    }

    public render() {
        return (
            <div>
                Question: {this.props.question} <br />
                Answer:&nbsp;
                <input
                    placeholder="Type your answer here..."
                    value={this.state.currentAnswer ?? ""}
                    onChange={this.handleAnswerChange}
                />

                <br />
                {this.renderCorrectnessMeter()}
            </div>
        );
    }

    private handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            currentAnswer: e.target.value
        });
    }

    private renderCorrectnessMeter() {
        if (!this.state.currentAnswer)
            return null;

        const levenDistance = leven(this.props.correctAnswer, this.state.currentAnswer ?? "");
        if (levenDistance === 0) {
            return (
                <span style={{ color: 'green' }}>Correct!</span>
            );
        }

        return `You are ${"very ".repeat(levenDistance)}wrong :(`;
    }
}