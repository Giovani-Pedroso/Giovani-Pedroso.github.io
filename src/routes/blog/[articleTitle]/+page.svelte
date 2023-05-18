<script>
  /* import { toc, html } from '$lib/blog/My-emacs-configuration.md' */
  import { onMount } from 'svelte';
  import {page} from "$app/stores"
  import { goto } from '$app/navigation';
  const articleTitle = $page.params.articleTitle
  const t = "My-emacs-configuration"
  let articleHtml;
  
  onMount(async ()=>{

    const url = `/src/lib/blog/${articleTitle}.md`
      try{
        let Thing = await import(url);
        /* let Thing = await import('$lib/blog/My-emacs-configuration.md'); */
        articleHtml = Thing.html
        /* console.log("import",articleHtml) */
      }
    catch(err){
      console.log("error message: ",err)
      /* goto('/') */
    }
  })
  
</script>

<main>
  <article>
    {#if articleHtml}
      {@html articleHtml}
    {:else}
      <div class="loading-container title-font">
        Loading...
      </div>
    {/if}
  </article>
</main>

<style>
  main{
    padding-top: 40px;
    min-height:100vh;
  }
  .loading-container{
    font-size:42px;
    padding-top: 40px;
  }
  article{
    padding:0px  ;
    width:60%;
    margin: 0px auto;
  }
  :global(h1){
    font-weight: 500;
    font-size:42px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h2){
    font-weight: 500;
    font-size:38px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h3){
    font-weight: 500;
    font-size:30px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h4){
    font-weight: 500;
    font-size:30px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h5){
    font-weight: 500;
    font-size:30px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(pre){
    margin: 0px 10px;
    padding: 20px;
    overflow: scroll;
    border: var(--border-brutal);
  }
  @media (max-width: 860px){

    article{
      width:96%;
    }
  }

  
</style>
