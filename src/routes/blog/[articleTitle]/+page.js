/* import { toc, html } from "$lib/blog/My-emacs-configuration.md";
 * import { page } from "$app/stores";
 *
 * export const load = async (loadEvent) => { */
/* const articleTitle = await page.params.articleTitle;
 * const url = `/src/lib/blog/${articleTitle}.md`;
 * console.log(url);
 * return { data: "olar", html }; */
/* }; */
/* export const load = async (loadEvent) => {

 *   //Went fetch use this method it has some optimizations
 *   //to the svelte
 *   const { fetch } = loadEvent;
 *   const articleTitle = $page.params.articleTitle;
 *   const url = `/src/lib/blog/${articleTitle}.md`;
 *   let Thing = await import(url);
 *
 *   return {
 *     title,
 *     products,
 *     notification,
 *   };
 * };
 *
 * //Define the page as A Server Side Rendered
 * export const ssr = true;
 * //Define the page as A Client Side Rendered
 * export const csr = true; */
