import { c as create_ssr_component, b as validate_store, d as subscribe } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.s-tUVNIwl-k3x4{padding-top:40px;min-height:100vh}.loading-container.s-tUVNIwl-k3x4{font-size:42px;padding-top:40px}article.s-tUVNIwl-k3x4{padding:0px  ;width:60%;margin:0px auto}h1{font-weight:500;font-size:42px;font-family:"Times New Roman", Times, serif}h2{font-weight:500;font-size:38px;font-family:"Times New Roman", Times, serif}h3{font-weight:500;font-size:30px;font-family:"Times New Roman", Times, serif}h4{font-weight:500;font-size:30px;font-family:"Times New Roman", Times, serif}h5{font-weight:500;font-size:30px;font-family:"Times New Roman", Times, serif}pre{margin:0px 10px;padding:20px;overflow:scroll;border:var(--border-brutal)}@media(max-width: 860px){article.s-tUVNIwl-k3x4{width:96%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.articleTitle;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="s-tUVNIwl-k3x4"><article class="s-tUVNIwl-k3x4">${`<div class="loading-container title-font s-tUVNIwl-k3x4">Loading...
      </div>`}</article>
</main>`;
});
export {
  Page as default
};
