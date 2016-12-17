import ActionTypes from '../constants/constants.js';
import appDispatcher from '../dispatcher/appDispatcher.js';
import {EventEmitter} from 'events';
import assign from 'object-assign';
var CHANGE_EVENT = 'change';

var _todos = [];

function create(text) {
	// Hand waving here -- not showing how this interacts with XHR or persistent
	// server-side storage.
	// Using the current timestamp + random number in place of a real id.
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_todos.push({
		id: id,
		message: text
	});
}

var AppStore = assign({}, EventEmitter.prototype, {

	/**
	 * Tests whether all the remaining TODO items are marked as completed.
	 * @return {boolean}
	 */
	// areAllComplete: function() {
	// 	for (var id in _todos) {
	// 		if (!_todos[id].complete) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// },

	/**
	 * Get the entire collection of TODOs.
	 * @return {object}
	 */
	getAll: function() {
		return _todos;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	/**
	 * @param {function} callback
	 */
	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

// // Register callback to handle all updates
appDispatcher.register(function(action) {
	var text;

	switch(action.actionType) {
		case ActionTypes.ADD_TODO:
			text = action.text.trim();
			if (text !== '') {
				create(text);
				AppStore.emitChange();
			}
			break;

// 		case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
// 			if (TodoStore.areAllComplete()) {
// 				updateAll({complete: false});
// 			} else {
// 				updateAll({complete: true});
// 			}
// 			TodoStore.emitChange();
// 			break;

// 		case TodoConstants.TODO_UNDO_COMPLETE:
// 			update(action.id, {complete: false});
// 			TodoStore.emitChange();
// 			break;

// 		case TodoConstants.TODO_COMPLETE:
// 			update(action.id, {complete: true});
// 			TodoStore.emitChange();
// 			break;

// 		case TodoConstants.TODO_UPDATE_TEXT:
// 			text = action.text.trim();
// 			if (text !== '') {
// 				update(action.id, {text: text});
// 				TodoStore.emitChange();
// 			}
// 			break;

// 		case TodoConstants.TODO_DESTROY:
// 			destroy(action.id);
// 			TodoStore.emitChange();
// 			break;

// 		case TodoConstants.TODO_DESTROY_COMPLETED:
// 			destroyCompleted();
// 			TodoStore.emitChange();
// 			break;

		default:
			console.log('default');
			break;
// 			// no op
	}
});

export default AppStore;