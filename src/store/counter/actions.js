import { getRandomInt } from '@/helpers';

export const incrementAsync = async ({ commit }) => {
	commit('setLoading', true);
	const randomInt = await getRandomInt();
	commit('incrementBy', randomInt);
	commit('setLoading', false);
};
