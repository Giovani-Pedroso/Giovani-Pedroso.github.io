import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1en3a0b_START -->${$$result.title = `<title>Projects</title>`, ""}<!-- HEAD_svelte-1en3a0b_END -->`, ""}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
