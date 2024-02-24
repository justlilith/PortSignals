

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.-hzME0OF.js","_app/immutable/chunks/scheduler.YAOc3RFa.js","_app/immutable/chunks/index.Fk5t6nj_.js","_app/immutable/chunks/entry.YyvtpBaQ.js"];
export const stylesheets = [];
export const fonts = [];
