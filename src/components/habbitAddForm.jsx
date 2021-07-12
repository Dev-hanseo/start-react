import React, { memo } from 'react';

const HabbitAddForm = memo(props => {
    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input 
            ref={inputRef} 
            type="text" 
            className="add-input" 
            placeholder="habit" />
            <button className="add-button">add button</button>
        </form>
    );
});

export default HabbitAddForm;