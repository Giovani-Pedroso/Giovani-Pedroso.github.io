import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main{padding-top:40px;min-height:100vh}article{padding:0px  ;width:60%;margin:0px auto}h1{font-weight:500;font-size:42px;font-family:"Times New Roman", Times, serif}h2{font-weight:500;font-size:38px;font-family:"Times New Roman", Times, serif}h3{font-weight:500;font-size:30px;font-family:"Times New Roman", Times, serif}h4{font-weight:500;font-size:30px;font-family:"Times New Roman", Times, serif}h5{font-weight:500;font-size:30px;font-family:"Times New Roman", Times, serif}pre{margin:0px 10px;padding:20px;overflow:scroll;border:var(--border-brutal)}@media(max-width: 860px){article{width:96%}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-10h7psl_START -->${$$result.title = `<title>Blog</title>`, ""}<!-- HEAD_svelte-10h7psl_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
