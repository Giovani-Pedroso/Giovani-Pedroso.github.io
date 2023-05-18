<script>
  //Iconst
  /* import Css from "$lib/icons/css3.svelte"
   * import Firebase from "$lib/icons/firebase.svelte"
   * import Html from "$lib/icons/html5.svelte"
   * import Jest from "$lib/icons/jest.svelte"
   * import JS from "$lib/icons/javascript.svelte"
   * import NextJs from "$lib/icons/nextdotjs.svelte"
   * import Node from "$lib/icons/nodedotjs.svelte"
   * import React from "$lib/icons/react.svelte"
   * import Svelte from "$lib/icons/svelte.svelte"
   * import Tailwind from "$lib/icons/tailwindcss.svelte"
   * import TS from "$lib/icons/typescript.svelte" */

  //Props
  export let title ;
  export let description ;
  export let links;
  export let alt;
  export let img ;
  
</script>

<div class="card-container">
  <img src="{img}" alt="{alt}">
  <div class="text">
    <h2 class="title-font">{title}</h2>
    <p>{description}</p>
  </div>
    <div class="button-container title-font">
      {#each links as link}
        <a class="" target="_blank" href="{link.link}">{link.name}</a>
      {/each}
    </div>
</div>

<style>
  .card-container{
    width:30%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    margin-bottom:40px;
    border: var(--border-default) solid #000;
    border-radius: var(--border-radius-def);
    box-shadow: 6px 6px 0px var(--shadow-color);
  }
  .text{
    width:90%;
    margin:0px auto;
    margin-top:10px;
  }
  /* .techs{
     display:flex;
     width:100%;
     flex-direction:row;
     }
     .icon{
     fill: #000;
     width: 16px;
     margin-right:10px;
     } */
  img{
    width:100%;
    margin: 0px;
    border-bottom: var(--border-default) solid #000;
    border-radius:var(--border-radius-def) var(--border-radius-def) 0px 0px;
  }
  h2{
    font-weight:normal;
    font-size:24px;
    margin: 0px 0px;
    margin-bottom: 4px;
  }
  a{
    width:100%;
    text-align: center ;
    border-left:var(--border-default) solid #000;
    padding: 10px 10px;
  }
  .button-container{
    background-color: var(--accent-color);
    border-top: var(--border-default) solid #000;
    display:flex;
    margin-top:10px;
    justify-content: space-between;
    align-items:center;
    border-radius: 0px 0px var(--border-radius-def) var(--border-radius-def) ;;
  }
  .button-container a:first-child{
    border-left-width:0px;
  }
  @media (max-width: 1000px){
    .card-container{
      width:40%;
    }
  }
  @media (max-width: 860px){
    .card-container{
      width:100%;
    }
  }
</style>
