import { c as create_ssr_component, g as add_attribute, e as escape, f as each } from "./index.js";
const CardProjects_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card-container.s-2xRarq7A-rli.s-2xRarq7A-rli{width:30%;display:flex;flex-direction:column;justify-content:space-between;margin-bottom:40px;border:var(--border-default) solid #000;border-radius:var(--border-radius-def);box-shadow:6px 6px 0px var(--shadow-color)}.text.s-2xRarq7A-rli.s-2xRarq7A-rli{width:90%;margin:0px auto;margin-top:10px}img.s-2xRarq7A-rli.s-2xRarq7A-rli{width:100%;margin:0px;border-bottom:var(--border-default) solid #000;border-radius:var(--border-radius-def) var(--border-radius-def) 0px 0px}h2.s-2xRarq7A-rli.s-2xRarq7A-rli{font-weight:normal;font-size:24px;margin:0px 0px;margin-bottom:4px}a.s-2xRarq7A-rli.s-2xRarq7A-rli{width:100%;text-align:center ;border-left:var(--border-default) solid #000;padding:10px 10px}.button-container.s-2xRarq7A-rli.s-2xRarq7A-rli{background-color:var(--accent-color);border-top:var(--border-default) solid #000;display:flex;margin-top:10px;justify-content:space-between;align-items:center;border-radius:0px 0px var(--border-radius-def) var(--border-radius-def) ;;}.button-container.s-2xRarq7A-rli a.s-2xRarq7A-rli:first-child{border-left-width:0px}@media(max-width: 1000px){.card-container.s-2xRarq7A-rli.s-2xRarq7A-rli{width:40%}}@media(max-width: 860px){.card-container.s-2xRarq7A-rli.s-2xRarq7A-rli{width:100%}}",
  map: null
};
const CardProjects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { links } = $$props;
  let { alt } = $$props;
  let { img } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  $$result.css.add(css);
  return `<div class="card-container s-2xRarq7A-rli"><img${add_attribute("src", img, 0)}${add_attribute("alt", alt, 0)} class="s-2xRarq7A-rli">
  <div class="text s-2xRarq7A-rli"><h2 class="title-font s-2xRarq7A-rli">${escape(title)}</h2>
    <p>${escape(description)}</p></div>
    <div class="button-container title-font s-2xRarq7A-rli">${each(links, (link) => {
    return `<a class=" s-2xRarq7A-rli" target="_blank"${add_attribute("href", link.link, 0)}>${escape(link.name)}</a>`;
  })}</div>
</div>`;
});
export {
  CardProjects as C
};
