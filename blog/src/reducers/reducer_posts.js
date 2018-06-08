import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from '../actions/index';
import _ from 'lodash';

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POST:
			const post = action.payload.data;
			return {
				...state,
				[post.id] : post
			};
		default:
			return state;
	}
}