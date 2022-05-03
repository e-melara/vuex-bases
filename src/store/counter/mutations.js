export function increment(state) {
	state.count++;
	state.lastMutation = 'increment';
}

export function incrementBy(state, payload) {
	state.count += payload;
	state.lastRandomInt = payload;
	state.lastMutation = 'incrementBy';
}

export function setLoading(state, payload) {
	state.isLoading = payload;
}
