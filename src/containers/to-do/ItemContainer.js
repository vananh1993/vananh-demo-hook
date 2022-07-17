import update from 'immutability-helper';
import { Component } from 'react';
import {categories} from '../../config/utils';
import Item from '../../components/to-do/Item';



export default class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories: categories.map((item) => ({ ...item, checked: false })),
            EditIndex : null,
            editData: null
        };

    }

    handleDelete (index) {
        const { categories: newCategories } = this.state;
        newCategories.splice(index, 1);

        this.setState({ categories: newCategories });
    }

    handleFormSubmitted (formData) {
        const { categories: newCategories } = this.state;
        if(this.state.EditIndex == null) {
            newCategories.push(formData);
            
        } else {
            newCategories[this.state.EditIndex] = formData;

        }
        this.setState({
            categories: newCategories,
            EditIndex: null
        })

    }

    handleEdit(index) {
        this.setState({ 
            editData: { ...this.state.categories[index] },
            EditIndex: index
        });
    }
    handleDone(index) {
        this.setState({ categories: update(this.state.categories, {[index]: {checked: {$set: true}}}) });
    }

    render () {
        return (
            <div>
                {this.state.categories.map((cate,index) => (
                    <div key={index} className={cate.checked ? 'checked' : ''}>
                        <Item 
                            title={cate.name}
                            desc={cate.desc}
                            onDelete={() => this.handleDelete(index)}
                            onEdit={() => this.handleEdit(index) }
                            onDone={() => this.handleDone(index)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}
