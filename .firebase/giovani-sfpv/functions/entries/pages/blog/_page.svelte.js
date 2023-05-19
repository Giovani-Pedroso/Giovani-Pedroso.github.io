import { c as create_ssr_component, f as each, v as validate_component } from "../../../chunks/index.js";
import { C as CardBlog } from "../../../chunks/CardBlog.js";
const posts = [
  {
    img: "/images/blog/emacs.png",
    alt: "Image of the software Emacs",
    title: "My Emacs configuration",
    linkPost: "my-emacs",
    category: "Programation",
    description: "My init.org file that I use to configure my emacs for programming: front end, back-end, and embedded systems such as the stm32 and esp-idf"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.s-KR0rVqYEqu45{padding-top:40px;min-height:100vh}.containerCards.s-KR0rVqYEqu45{display:flex;flex-wrap:wrap;justify-content:space-between;padding:0px var(--padding-default)}.title.s-KR0rVqYEqu45{font-size:40px;margin-top:40px ;margin-bottom:10px}.title-container.s-KR0rVqYEqu45{padding:0px 40px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:20px}h1.s-KR0rVqYEqu45{font-size:48px;font-weight:normal;margin:10px 0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="s-KR0rVqYEqu45"><div class="title-container s-KR0rVqYEqu45"><h1 class="title title-font s-KR0rVqYEqu45">Projects</h1></div>
  <div class="containerCards s-KR0rVqYEqu45">${each(posts, (post) => {
    return `${validate_component(CardBlog, "CardProject").$$render($$result, Object.assign({}, post), {}, {})}`;
  })}</div>
  
  
</main>`;
});
export {
  Page as default
};
