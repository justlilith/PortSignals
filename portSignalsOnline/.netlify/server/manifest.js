export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.hPiEk9Wc.js","app":"_app/immutable/entry/app.-jhKPv90.js","imports":["_app/immutable/entry/start.hPiEk9Wc.js","_app/immutable/chunks/entry.YyvtpBaQ.js","_app/immutable/chunks/scheduler.YAOc3RFa.js","_app/immutable/entry/app.-jhKPv90.js","_app/immutable/chunks/scheduler.YAOc3RFa.js","_app/immutable/chunks/index.Fk5t6nj_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
