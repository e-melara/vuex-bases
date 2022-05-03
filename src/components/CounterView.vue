<template>
	<h1>Counter - Vuex</h1>
	<h1>Access access: {{ count }}</h1>
	<hr />
	<button @click="increment">+1</button>
	<button @click="incrementBy">+5</button>
	<button @click="incrementAsync" :disabled="isLoading">Random</button>
	<hr />
	<h2>Direct getters:{{ squareCount }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
	computed: {
		...mapState('counter', ['count', 'isLoading']),
		...mapGetters('counter', ['squareCount']),
	},
	methods: {
		increment() {
			this.$store.commit('counter/increment');
		},
		incrementBy() {
			this.$store.commit('counter/incrementBy', 5);
		},
		...mapActions('counter', ['incrementAsync']),
	},
};
</script>
