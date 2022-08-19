import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('Called handle');
	// In real life we're doing something like this:
	// event.locals.config = (await configByHostname(event.url.hostname)) as ApiParams;
	event.locals.tenant = event.url.hostname;
	return await resolve(event);
};
