import { c as create_ssr_component, f as each, v as validate_component, m as missing_component } from "../../chunks/index.js";
import { C as CardProjects } from "../../chunks/CardProjects.js";
import { C as CardBlog } from "../../chunks/CardBlog.js";
const ButtonIcon_svelte_svelte_type_style_lang = "";
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
});
const Kaggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kaggle</title><path d="M.1025 7.3475c-.0681 0-.1022.0341-.1022.102v6.752c0 .0681.034.1022.1022.1022h.7049c.068 0 .1022-.034.1022-.1023v-1.481l.4187-.3985 1.5016 1.91c.041.0477.0884.0716.143.0716h.9091c.0476 0 .0748-.0135.0817-.0407.0135-.041.0066-.075-.0206-.1023l-1.9816-2.4618 1.9002-1.8384c.0204-.0205.0237-.051.01-.092-.0137-.0339-.0408-.051-.0816-.051h-.9398c-.0477 0-.0953.024-.143.0716L.9096 11.607V7.4496c0-.0679-.0342-.102-.1022-.102zm18.0417 0c-.068 0-.102.0341-.102.102v6.752c0 .0681.034.102.102.102h.705c.068 0 .102-.034.102-.102v-6.752c0-.068-.034-.102-.102-.102zM5.961 9.6254c-.5653 0-1.11.1806-1.6343.5415-.0545.0545-.0648.102-.0307.143l.3676.5208c.0272.0477.0717.0545.133.0204.3948-.2722.783-.4086 1.1644-.4086.2927 0 .5158.0886.669.2656.1532.1771.2197.3917.1992.6436-.6606.0681-1.1545.1495-1.4813.245-.8308.2383-1.2461.6913-1.2461 1.3586 0 .4222.1533.7695.4598 1.0419.3132.2654.6845.3982 1.1134.3982.4698 0 .8545-.1125 1.1542-.3372v.1432c0 .0682.0374.102.1123.102h.7048c.068 0 .102-.0338.102-.102V11.372c0-.6604-.2245-1.1406-.6739-1.4403-.3065-.2043-.6776-.3063-1.1134-.3063zm4.3225 0c-.6742 0-1.195.2622-1.5627.7865-.3133.4359-.4699.9671-.4699 1.5936 0 .6604.1634 1.2087.4903 1.6444.3744.4972.892.7455 1.5526.7455.5313 0 .9567-.1327 1.2768-.3982v.531c0 .858-.4122 1.287-1.236 1.287-.361 0-.732-.1907-1.1132-.572a.098.098 0 00-.0716-.0306c-.034 0-.0613.0102-.0817.0307l-.4802.48c-.0408.0613-.0375.1124.0103.1532.1361.1157.2554.2129.3576.2911.102.0783.1905.1413.2656.189.354.1975.7284.2961 1.1235.2961.6808 0 1.207-.1925 1.5781-.577.3711-.3848.5567-.9484.5567-1.6903V9.8196c0-.068-.034-.102-.102-.102h-.705c-.0682 0-.1021.034-.1021.102v.2043c-.3471-.2657-.7763-.3985-1.287-.3985zm4.8021 0c-.6742 0-1.195.2622-1.5627.7865-.3132.4359-.4699.9671-.4699 1.5936 0 .6604.1633 1.2087.4903 1.6444.3744.4972.892.7455 1.5526.7455.5311 0 .9566-.1327 1.2768-.3982v.531c0 .858-.4122 1.287-1.236 1.287-.361 0-.732-.1907-1.1133-.572a.098.098 0 00-.0716-.0306c-.034 0-.0612.0102-.0816.0307l-.48.48c-.0409.0613-.0376.1124.01.1532.1363.1157.2555.2129.3576.2911.1021.0783.1906.1413.2657.189.354.1975.7285.2961 1.1237.2961.6808 0 1.2068-.1925 1.5781-.577.371-.3848.5565-.9484.5565-1.6903V9.8196c0-.068-.034-.102-.102-.102h-.7049c-.0682 0-.1022.034-.1022.102v.2043c-.3474-.2657-.7763-.3985-1.287-.3985zm6.7457 0c-.6537 0-1.185.211-1.5936.6332-.4427.4632-.664 1.0283-.664 1.6956 0 .7083.225 1.2905.6743 1.7467.463.463 1.042.6945 1.7366.6945.6467 0 1.2154-.1838 1.7057-.5515.0545-.041.0545-.0884 0-.143l-.4802-.4903c-.041-.0409-.0919-.0409-.1533 0-.2998.2112-.6368.3167-1.0112.3167-.4222 0-.7729-.119-1.052-.3576-.2452-.2248-.3882-.5038-.429-.8375h3.3197c.0679 0 .1022-.0341.1022-.1023l.01-.2244c.0341-.6878-.1668-1.26-.6025-1.7162-.4224-.4426-.9432-.664-1.5627-.664zm-.0206.7865c.3268 0 .6062.1056.8377.3166.2452.211.371.4734.378.7865h-2.4618c.0613-.3269.2077-.5925.4392-.7968.2313-.2042.5004-.3063.8069-.3063zm-11.4249.102c.6196 0 1.0146.2181 1.1848.6538v1.6854c-.1702.4358-.5755.6538-1.2155.6538-.3133 0-.5687-.0986-.7661-.2963-.2656-.2518-.3983-.6538-.3983-1.2053 0-.9941.3984-1.4914 1.1951-1.4914zm4.802 0c.6196 0 1.0148.2181 1.1851.6538h-.0002v1.6854c-.1703.4358-.5755.6538-1.2155.6538-.3132 0-.5686-.0986-.7661-.2963-.2655-.2518-.3983-.6538-.3983-1.2053 0-.9941.3983-1.4914 1.195-1.4914zm-8.3586 1.6547v1.0215c-.286.286-.6675.412-1.1441.3779-.1703-.0135-.32-.0663-.4493-.1582-.1294-.0919-.2045-.2129-.2249-.3627-.0341-.2657.1158-.47.4495-.6129.2452-.1088.7013-.1974 1.3688-.2656z"></path></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
});
const Firebase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firebase</title><path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"></path></svg>`;
});
const Gnuemacs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GNU Emacs</title><path d="M12,24C5.448,24,0.118,18.617,0.118,12S5.448,0,12,0c6.552,0,11.882,5.383,11.882,12S18.552,24,12,24z M12,0.661 C5.813,0.661,0.779,5.748,0.779,12S5.813,23.339,12,23.339c6.187,0,11.221-5.086,11.221-11.339S18.187,0.661,12,0.661z M8.03,20.197 c0,0,0.978,0.069,2.236-0.042c0.51-0.045,2.444-0.235,3.891-0.552c0,0,1.764-0.377,2.707-0.725c0.987-0.364,1.524-0.673,1.766-1.11 c-0.011-0.09,0.074-0.408-0.381-0.599c-1.164-0.488-2.514-0.4-5.185-0.457c-2.962-0.102-3.948-0.598-4.472-0.997 c-0.503-0.405-0.25-1.526,1.907-2.513c1.086-0.526,5.345-1.496,5.345-1.496c-1.434-0.709-4.109-1.955-4.659-2.224 c-0.482-0.236-1.254-0.591-1.421-1.021c-0.19-0.413,0.448-0.768,0.804-0.87c1.147-0.331,2.766-0.536,4.24-0.56 c0.741-0.012,0.861-0.059,0.861-0.059c1.022-0.17,1.695-0.869,1.414-1.976c-0.252-1.13-1.579-1.795-2.84-1.565 c-1.188,0.217-4.05,1.048-4.05,1.048c3.539-0.031,4.131,0.028,4.395,0.398c0.156,0.218-0.071,0.518-1.015,0.672 c-1.027,0.168-3.163,0.37-3.163,0.37c-2.049,0.122-3.492,0.13-3.925,1.046C6.202,7.564,6.787,8.094,7.043,8.425 c1.082,1.204,2.646,1.853,3.652,2.331c0.379,0.18,1.49,0.52,1.49,0.52c-3.265-0.18-5.619,0.823-7.001,1.977 c-1.562,1.445-0.871,3.168,2.33,4.228c1.891,0.626,2.828,0.921,5.648,0.667c1.661-0.09,1.923-0.036,1.939,0.1 c0.023,0.192-1.845,0.669-2.355,0.816C11.448,19.438,8.047,20.193,8.03,20.197z"></path></svg>`;
});
const Nodedotjs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path></svg>`;
});
const React = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg>`;
});
const Svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Svelte</title><path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"></path></svg>`;
});
const Tailwindcss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>`;
});
const Typescript = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path></svg>`;
});
const Python = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path></svg>`;
});
const Pandas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>pandas</title><path d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z"></path></svg>`;
});
const Tecnologies_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".icon.s-1Ht0lr9bOd22{fill:#000;display:flex;width:32px}.tecnologies.s-1Ht0lr9bOd22{display:flex;flex-wrap:wrap;justify-content:space-between;background-color:var(--accent-color);padding:10px var(--padding-default);border-bottom:var(--border-default) solid #000;border-top:var(--border-default) solid #000}@media(max-width: 700px){.tecnologies.s-1Ht0lr9bOd22{padding:10px var(--padding-mobile)}.icon.s-1Ht0lr9bOd22{width:22px}}",
  map: null
};
const Tecnologies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const techs = [Svelte, React, Typescript, Nodedotjs, Firebase, Tailwindcss, Python, Pandas, Gnuemacs];
  $$result.css.add(css$3);
  return `<div class="tecnologies s-1Ht0lr9bOd22">${each(techs, (tech) => {
    return `<div class="icon s-1Ht0lr9bOd22">${validate_component(tech || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
  </div>`;
  })}
</div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".hero.s-LZUOf0k-6n0O{display:flex;flex-direction:column;justify-content:space-between;height:100vh}.specs.s-LZUOf0k-6n0O{color:var(--accent-color);-webkit-text-stroke-width:2px;-webkit-text-stroke-color:#000}.topics.s-LZUOf0k-6n0O{margin:0px;font-size:70px}.presentation.s-LZUOf0k-6n0O{display:flex;align-items:center;justify-content:space-between;padding:0px var(--padding-default) ;height:100%}.text.s-LZUOf0k-6n0O{max-width:50%;text-align:justify}.icon.s-LZUOf0k-6n0O{display:flex;fill:#000;width:32px;margin-right:20px}.buttons-container.s-LZUOf0k-6n0O{display:flex;flex-direction:row}@media(max-width: 860px){.presentation.s-LZUOf0k-6n0O{flex-direction:column;padding:0px var(--padding-mobile);margin-top:40px;align-items:flex-start;justify-content:space-evenly}.topics.s-LZUOf0k-6n0O{font-size:44px\n    }.text.s-LZUOf0k-6n0O{width:100%;max-width:100%}.icon.s-LZUOf0k-6n0O{display:none}.button.s-LZUOf0k-6n0O{font-size:18px}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="hero s-LZUOf0k-6n0O"><div class="presentation s-LZUOf0k-6n0O"><div class="specs s-LZUOf0k-6n0O"><p class="topics title-font s-LZUOf0k-6n0O">Web Design</p>
      <p class="topics title-font s-LZUOf0k-6n0O">Mobile Developer</p>
      <p class="topics title-font s-LZUOf0k-6n0O">Data Analyst</p></div>
    <div class="text s-LZUOf0k-6n0O"><p>Hi my name is Giovani, I&#39;m a developer based in Brazil, I have experience with embedded programming, mobile and web development and data analysis      </p>
      <div class="buttons-container s-LZUOf0k-6n0O"><a href="https://github.com/Giovani-Pedroso" target="_blank" class="button s-LZUOf0k-6n0O"><div class="icon s-LZUOf0k-6n0O">${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</div>
          Github
          </a>
          <a href="https://www.linkedin.com/in/giovani-sant-ana/" target="_blank" class="button s-LZUOf0k-6n0O"><div class="icon s-LZUOf0k-6n0O">${validate_component(Linkedin, "Linkedin").$$render($$result, {}, {}, {})}</div>
          Linkedin
          </a>
          <a href="https://www.kaggle.com/giovanipedroso" target="_blank" class="button s-LZUOf0k-6n0O"><div class="icon s-LZUOf0k-6n0O">${validate_component(Kaggle, "Kaggle").$$render($$result, {}, {}, {})}</div>
          Kaggle
          </a></div></div></div>
  ${validate_component(Tecnologies, "Tecnologies").$$render($$result, {}, {}, {})}
</header>`;
});
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
    description: "A website made for a psychological clinic, the website was made with Next.js, tailwind Css and it has A/B tests integrated to evaluate the design performance",
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
    description: "A simple app made with the goal to manage the inventory of a business, the app is capable of search a product by reading the bar code, take pictures of the products ",
    title: "Controle de estoque simples"
  },
  {
    img: "/images/sites/titanic.webp",
    alt: "image the ship Titanic",
    description: "Machine Learn Model with the Goal to Predict Who Will Survive the Shipwreck of the Titanic, to Train the Model It Was Used the Library Sklearn",
    links: [
      {
        name: "Kaggle",
        link: "https://www.kaggle.com/code/giovanipedroso/titanic"
      }
    ],
    title: "Titanic Kaggle Competition"
  },
  {
    img: "/images/sites/space-titanic.webp",
    title: "Space Titanic Kaggle",
    alt: "image of a Space Titanic ship",
    description: "This is a reimagination of the Titanic model but now in the space, besides the futuristic approach this models has more data that the previous one, that makes it more challenging",
    links: [
      {
        name: "Kaggle",
        link: "https://www.kaggle.com/code/giovanipedroso/space-titanic"
      }
    ]
  },
  {
    img: "/images/sites/techday.webp",
    alt: "image of a website",
    description: "My entry in the Carrefour tech day competition, the site was made with React, with a CRUD workflow and authentication implemented, the project ended in the top 10",
    title: "Carrefour Tech Day",
    links: [
      {
        name: "Github",
        link: "https://github.com/Giovani-Pedroso/Monitor-Covid"
      }
    ]
  },
  {
    img: "/images/sites/covid.webp",
    alt: "image of a website",
    description: "A website created to track down the spread of the COVID-19 in the world, because of changes in the Heroku policies of use, the site is not working as intended",
    links: [
      {
        name: "Github",
        link: "https://github.com/Giovani-Pedroso/Monitor-Covid"
      }
    ],
    title: "Monitor Covid"
  }
];
const Projects_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.s-czWaGQfRgcAH{margin:0px}.containerCards.s-czWaGQfRgcAH{display:flex;flex-wrap:wrap;justify-content:space-between;padding:0px var(--padding-default)}.title.s-czWaGQfRgcAH{font-size:40px;margin-top:40px ;margin-bottom:10px}.title-container.s-czWaGQfRgcAH{padding:0px 40px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:20px}.buttonModifications.s-czWaGQfRgcAH{display:inline;font-size:28px}h1.s-czWaGQfRgcAH{font-size:48px;font-weight:normal;margin:10px 0px}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="s-czWaGQfRgcAH"><div class="title-container s-czWaGQfRgcAH"><h1 class="title title-font s-czWaGQfRgcAH"><span>Projects
      </span>
      <span><a href="/projects" class="button buttonModifications s-czWaGQfRgcAH">All Projects
          </a></span></h1></div>
  <div class="containerCards s-czWaGQfRgcAH">${each(projects, (project) => {
    return `${validate_component(CardProjects, "CardProject").$$render($$result, Object.assign({}, project), {}, {})}`;
  })}</div>
</section>`;
});
const posts = [
  {
    img: "/images/blog/emacs.png",
    title: "My Emacs configuration",
    linkPost: "my-emacs",
    category: "Programation",
    description: "The init.org file that I use to configure my emacs for programming: front end, back-end, and embedded systems such as the stm32 and esp-idf"
  }
];
const Blog_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.s-5EV4Meg7ImmJ{padding:0px var(--padding-default)}h1.s-5EV4Meg7ImmJ{font-size:48px;font-weight:normal;margin:10px 0px}span.s-5EV4Meg7ImmJ{}.buttonModifications.s-5EV4Meg7ImmJ{display:inline;font-size:28px}.cards-container.s-5EV4Meg7ImmJ{justify-content:space-between;flex-wrap:wrap;display:flex}.title.s-5EV4Meg7ImmJ{margin:40px 0px }",
  map: null
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="s-5EV4Meg7ImmJ"><h1 class="title title-font s-5EV4Meg7ImmJ">Blog
    <span class="s-5EV4Meg7ImmJ"><a href="/blog" class="button buttonModifications s-5EV4Meg7ImmJ">All posts
          </a></span></h1>
  <div class="cards-container s-5EV4Meg7ImmJ">${each(posts, (post) => {
    return `${validate_component(CardBlog, "CardBlog").$$render($$result, Object.assign({}, post), {}, {})}`;
  })}</div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-16lvsut_START -->${$$result.title = `<title>Giovani SFPV</title>`, ""}<!-- HEAD_svelte-16lvsut_END -->`, ""}
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
${validate_component(Blog, "Blog").$$render($$result, {}, {}, {})}
${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
