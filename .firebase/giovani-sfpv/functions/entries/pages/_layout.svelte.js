import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.s-nk9oxC_SO_F0{position:fixed;top:0;left:0;width:100vw}.navbar.s-nk9oxC_SO_F0{font-family:'Cormorant ', sans-serif;border-bottom:var(--border-default) solid #000;display:flex;justify-content:space-between;align-items:center;padding:0px var(--padding-default) ;background-color:#fff}.logo.s-nk9oxC_SO_F0{font-size:24px;color:var(--accent-color);display:flex;margin:10px 0px;align-items:center;width:100%;justify-content:space-between}@media(max-width: 700px){.navbar.s-nk9oxC_SO_F0{padding:0px var(--padding-mobile)}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="s-nk9oxC_SO_F0"><div class="navbar s-nk9oxC_SO_F0"><div class="title-font logo  s-nk9oxC_SO_F0"><a href="/">Giovani SFPV
      </a>
      </div>
    </div>
</nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.s-4Je7tohIF62F{border-top:var(--border-brutal);margin-top:20px}.infos.s-4Je7tohIF62F{padding:0px var(--padding-default);display:flex;flex-direction:row;justify-content:space-evenly}.info.s-4Je7tohIF62F{width:100%;padding:20px 0px;border-right:var(--border-brutal)}.end.s-4Je7tohIF62F{padding:10px var(--padding-default);border-right:none}.title.s-4Je7tohIF62F{margin-bottom:10px;margin-top:0px;font-weight:normal;font-size:24px}p.s-4Je7tohIF62F{margin:0px}.copyright.s-4Je7tohIF62F{border-top:var(--border-brutal);padding:10px var(--padding-default)}@media(max-width: 700px){.infos.s-4Je7tohIF62F{padding:0;display:flex;flex-direction:column;justify-content:space-evenly}.info.s-4Je7tohIF62F{width:100%;border-right:none;padding:10px var(--padding-mobile);border-bottom:var(--border-brutal)}.end.s-4Je7tohIF62F{padding:10px var(--padding-mobile);border-bottom:none}.copyright.s-4Je7tohIF62F{padding:10px var(--padding-mobile)}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css$1);
  return `<footer class="s-4Je7tohIF62F"><div class="infos s-4Je7tohIF62F"><div class="info s-4Je7tohIF62F"><h1 class="title title-font s-4Je7tohIF62F">Pages</h1>
      <p class="s-4Je7tohIF62F"><a href="/">Home</a></p>
      <p class="s-4Je7tohIF62F"><a href="/projects">Projects</a></p>
      <p class="s-4Je7tohIF62F"><a href="/blog">Blog</a></p></div>
    <div class="info end s-4Je7tohIF62F"><h1 class="title title-font s-4Je7tohIF62F">Contact</h1>
      <p class="s-4Je7tohIF62F"><a href="https://www.linkedin.com/in/giovani-sant-ana/">Linkedin</a></p>
      <p class="s-4Je7tohIF62F"><a href="https://github.com/Giovani-Pedroso">Github
      </a></p>
      <p class="s-4Je7tohIF62F">giovanisfpv@gmail.com
      </p></div></div>
  <div class="copyright s-4Je7tohIF62F">©Copyright Giovani SFPV  ${escape(year)}</div>
</footer>`;
});
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `:root{padding:0px;margin:0px;font-family:'Cormorant ', sans-serif;--primary-color:#000000;--secondary-color:#008;--accent-color:#aec6cf;--shadow-color:#2a2a2a;--border-size:1px;--shadow-brutal:6px 6px 0px var(--primary-color);--shadow-brutal-sm:3px 3px 0px var(--primary-color);--border-brutal:var(--border-size) solid var(--primary-color) ;--padding-default:40px;--padding-mobile:20px;--border-default:1px;--border-radius-def:6px}.title-font{font-weight:100;font-family:"Righteous", sans-serif}.button{padding:4px;display:flex;flex-direction:row;align-items:center;border:var(--border-default) solid #000;background-color:var(--accent-color);box-shadow:2px 2px 0px black;color:#000;width:30%;border-radius:var(--border-radius-def);margin-right:20px}.button:hover{box-shadow:3px 3px 0px black}.button:hover > .icon{}body{margin:0px}a{text-decoration:none;color:#000}a:hover{text-decoration:underline}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
