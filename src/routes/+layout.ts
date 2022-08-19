import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }): Promise<{ tenant: string }> => {
	console.log('Called layout load');
	return data;
};
