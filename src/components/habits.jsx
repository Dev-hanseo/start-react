import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits:[
            { id: 1, name: 'Reading', count: 0},
            { id: 2, name: 'Running', count: 0},
            { id: 3, name: 'Coding', count:0},
            
        ],
    };

    
    handleIncrement = (habit)=>{
        // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함.
        // this.setState({count: this.state.count + 1});
        console.log(`handleIncrement ${habit.name}`);
    }

    handleDecrement = (habit)=>{
        console.log(`handleDecrement ${habit.name}`);
        // const count = this.state.count - 1;
        // this.setState({count: count < 0 ? 0 : count});
    }

    handleDelete = (habit)=>{
        console.log(`handleDelete ${habit.name}`);
    };

    render() {
        return (
        <ul>
            {this.state.habits.map(habit => (
                    <Habit 
                    key={habit.id} 
                    habit={habit} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))}
        </ul>
        );
    }
}

export default Habits;