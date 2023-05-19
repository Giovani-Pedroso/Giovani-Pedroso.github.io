import { c as create_ssr_component, g as add_attribute, e as escape, v as validate_component } from "./index.js";
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>`;
});
const CardBlog_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card-container.s-gkHRCA57uMqS{width:46%;margin-bottom:20px;border:var(--border-default) solid #000;border-radius:var(--border-radius-def);box-shadow:4px 4px 0px var(--shadow-color)}.text.s-gkHRCA57uMqS{padding:10px 20px}h2.s-gkHRCA57uMqS{margin:0px;font-weight:normal;font-size:40px}h3.s-gkHRCA57uMqS{font-size:20px;margin:0px;font-weight:normal}img.s-gkHRCA57uMqS{width:100%;border:var(--border-brutal);border-radius:var(--border-radius-def) var(--border-radius-def) 0px 0px;margin:0px}.arrow.s-gkHRCA57uMqS{display:flex;width:28px}a.s-gkHRCA57uMqS{width:100%;display:flex;align-items:center;justify-content:space-between;border-left:var(--border-default) solid #000;padding:10px 20px}.button-container.s-gkHRCA57uMqS{background-color:var(--accent-color);border-top:var(--border-default) solid #000;display:flex;margin-top:10px;justify-content:space-between;align-items:center;border-radius:0px 0px var(--border-radius-def) var(--border-radius-def) ;;}@media(max-width: 860px){.card-container.s-gkHRCA57uMqS{width:100%;margin-bottom:20px}}",
  map: null
};
const CardBlog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { alt } = $$props;
  let { title } = $$props;
  let { linkPost } = $$props;
  let { category } = $$props;
  let { description } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.linkPost === void 0 && $$bindings.linkPost && linkPost !== void 0)
    $$bindings.linkPost(linkPost);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `<div class="card-container s-gkHRCA57uMqS"><img${add_attribute("src", img, 0)}${add_attribute("alt", alt, 0)} class="s-gkHRCA57uMqS">
    <div class="text s-gkHRCA57uMqS"><h2 class="title-font s-gkHRCA57uMqS">${escape(title)}</h2>
      <h3 class="s-gkHRCA57uMqS">${escape(category)}</h3>
      <p>${escape(description)}</p></div>
    <div class="button-container s-gkHRCA57uMqS"><a${add_attribute("href", `/blog/${linkPost}`, 0)} class="s-gkHRCA57uMqS">Read More<span class="arrow s-gkHRCA57uMqS">${validate_component(ArrowRight, "Arrow").$$render($$result, {}, {}, {})}</span></a></div>

</div>`;
});
export {
  CardBlog as C
};
