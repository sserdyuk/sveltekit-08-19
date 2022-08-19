import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = (event): { tenant: string } => {
	console.log('Called layout server load');
	return { tenant: event.locals.tenant };
};
