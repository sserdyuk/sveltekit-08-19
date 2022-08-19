/// <reference types="@sveltejs/kit" />
declare global {
	declare namespace App {
		interface Locals {
			tenant: string;
		}
		// interface Platform {}
		// interface PrivateEnv {}
		// interface PublicEnv {}
	}
}
