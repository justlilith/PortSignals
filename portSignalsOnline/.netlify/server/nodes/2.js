

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.HWsPV8He.js","_app/immutable/chunks/scheduler.YAOc3RFa.js","_app/immutable/chunks/index.Fk5t6nj_.js"];
export const stylesheets = [];
export const fonts = [];
