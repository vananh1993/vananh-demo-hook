import React, { useReducer, useCallback } from "react";

const initialState = {
	categories: [],
	editIndex: null
};

const actions = {
	ADD: 'add'
}

const reducer = (state, action) => {
	switch (action.type) {
		case actions.ADD:
			state.categories.push(action.payload);
			return {
				...state,
				categories: state.categories
			};

		default:
			return { ...state };
	}
};

export default function Hook () {
	const [state, dispatch] = useReducer(reducer, initialState);

	return {
		saveData: function (formData) {
			dispatch({ type: actions.ADD, payload: formData });
		}
	}
}
