import * as React from 'react';
import { Quiz } from './Quiz';

export class App extends React.Component {
    public render() {
        return (
            <div>
                <h1>Welcome to my Quiz application!</h1>
                <Quiz 
                    question="How are you today?"
                    correctAnswer="Awesome!!!"
                />
            </div>
        );
    }
}