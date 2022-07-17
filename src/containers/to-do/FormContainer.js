import React from 'react';
import Input from "../../components/input";
import todoHook from '../../hooks/toDoHook';

export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);

        const form = {
            name : "",
            desc : ""
        };

        this.state = { ...form, oldData: { ...form } };
    }

    static getDerivedStateFromProps(props, state) {
        // console.log(props, state);
        if (state.oldData.name !== props.data?.name || state.oldData.desc !== props.data?.desc) {
            const oldData = (props.data || {});

            return {
                ...state,
                ...oldData,
                oldData
            };
        }

        return null;
    }

    handleAdd(event) {
        event.preventDefault();
        event.stopPropagation();

        // console.log(todoHook())
        // todoHook.saveData({ name: this.state.name, desc: this.state.desc });

        this.setState({
            name : "",
            desc : ""
        });
    }

    changeInput(event) {
        console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleAdd.bind(this)}>
                <br/> <br/> <br/> <br/>
                <Input 
                    placeholder={"nhập title"}
                    name="name"
                    value={this.state.name}
                    onChange={this.changeInput.bind(this)}
                />
                <br/>
                <Input 
                    placeholder={"nhập mô tả"}
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeInput.bind(this)}
                />
                <button type="submit">Save</button>
            </form>
        )
    }
}
