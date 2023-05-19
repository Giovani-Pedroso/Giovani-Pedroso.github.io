import { c as create_ssr_component, f as each, v as validate_component } from "../../../chunks/index.js";
import { C as CardProjects } from "../../../chunks/CardProjects.js";
const projects = [
  {
    img: "/images/sites/cleidesantana.webp",
    alt: "image of a website of a psychological clinic",
    links: [
      {
        name: "Site",
        link: "https://cleidesantana.com.br"
      }
    ],
    description: "Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus",
    title: "Cleide Psicologia"
  },
  {
    img: "/images/sites/App.webp",
    alt: "image of an app for manage the storage of a store",
    links: [
      {
        name: "Google",
        link: "https://play.google.com/store/apps/details?id=com.giovanisfpv.controledeestoquesimples&pli=1"
      }
    ],
    description: "Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus",
    title: "Controle de estoque simples"
  },
  {
    img: "/images/sites/space-titanic.webp",
    title: "Space Titanic Kaggle",
    alt: "image of a Space Titanic ship",
    description: "Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus",
    links: [
      {
        name: "Kaggle",
        link: "https://www.kaggle.com/code/giovanipedroso/space-titanic"
      }
    ]
  },
  {
    img: "/images/sites/titanic.webp",
    alt: "image the ship Titanic",
    description: "Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus",
    links: [
      {
        name: "Kaggle",
        link: "https://www.kaggle.com/code/giovanipedroso/titanic"
      }
    ],
    title: "Titanic Kaggle Competition"
  },
  {
    img: "/images/sites/techday.webp",
    alt: "image of a website",
    description: "Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus",
    title: "Carrefour Tech Day",
    links: [
      {
        name: "Repo",
        link: "https://github.com/Giovani-Pedroso/Monitor-Covid"
      }
    ]
  },
  {
    img: "/images/sites/covid.webp",
    alt: "image of a website",
    description: "Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus,Donec pretium posuere tellus",
    links: [
      {
        name: "Repo",
        link: "https://github.com/Giovani-Pedroso/Monitor-Covid"
      },
      {
        name: "Test",
        link: "https://github.com/Giovani-Pedroso/Monitor-Covid"
      },
      {
        name: "Test 2",
        link: "https://github.com/Giovani-Pedroso/Monitor-Covid"
      }
    ],
    title: "Monitor Covid"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.s-CwfIb8medXwy{padding-top:40px;min-height:100vh}.containerCards.s-CwfIb8medXwy{display:flex;flex-wrap:wrap;justify-content:space-between;padding:0px var(--padding-default)}.title.s-CwfIb8medXwy{font-size:40px;margin-top:40px ;margin-bottom:10px}.title-container.s-CwfIb8medXwy{padding:0px 40px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:20px}h1.s-CwfIb8medXwy{font-size:48px;font-weight:normal;margin:10px 0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="s-CwfIb8medXwy"><div class="title-container s-CwfIb8medXwy"><h1 class="title title-font s-CwfIb8medXwy">Projects</h1></div>
  <div class="containerCards s-CwfIb8medXwy">${each(projects, (project) => {
    return `${validate_component(CardProjects, "CardProject").$$render($$result, Object.assign({}, project), {}, {})}`;
  })}</div>
  
  
</main>`;
});
export {
  Page as default
};
