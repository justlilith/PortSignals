import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const css$1 = {
  code: "#presibar.svelte-lvocnw{background-color:black;display:flex;flex-direction:row;padding:1em}button.svelte-lvocnw{padding-left:2em;padding-right:2em}button.svelte-lvocnw,input.svelte-lvocnw{margin:0.5em;padding:0.5em;font-size:1.25em}input.svelte-lvocnw{flex-grow:100}",
  map: null
};
const Presibar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathSearch = "";
  $$result.css.add(css$1);
  return `<form id="presibar" class="svelte-lvocnw"><input class="svelte-lvocnw"${add_attribute("value", pathSearch, 0)}> <button type="submit" class="svelte-lvocnw" data-svelte-h="svelte-19lxbjj">Go</button> </form>`;
});
const css = {
  code: "#content.svelte-1go8g05{display:flex;flex-direction:column;height:100vh}#main.svelte-1go8g05{display:flex;flex-direction:column;flex-grow:100}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="content" class="svelte-1go8g05"><div id="main" class="svelte-1go8g05">${slots.default ? slots.default({}) : ``}</div> <div id="presibar">${validate_component(Presibar, "Presibar").$$render($$result, {}, {}, {})}</div> </div>`;
});
export {
  Layout as default
};
