<script>
  //Iconst
  import Css from "$lib/icons/css3.svelte"
  import Firebase from "$lib/icons/firebase.svelte"
  import Html from "$lib/icons/html5.svelte"
  import Jest from "$lib/icons/jest.svelte"
  import JS from "$lib/icons/javascript.svelte"
  import NextJs from "$lib/icons/nextdotjs.svelte"
  import Node from "$lib/icons/nodedotjs.svelte"
  import React from "$lib/icons/react.svelte"
  import Svelte from "$lib/icons/svelte.svelte"
  import Tailwind from "$lib/icons/tailwindcss.svelte"
  import TS from "$lib/icons/typescript.svelte"

  //Components
  import ButtonBrutal from "../ui/Button.svelte"

  //Props
  export let title ;
  export let description ;
  export let linkSite ;
  export let linkRepo ;
  export let linkBlog;
  export let img ;
  
</script>

<div class="card-container">
  <img src="{img}">
  <div class="text">
    <h2>{title}</h2>
    <p>{description}</p>
    <div class="button-container">
      {#if linkSite}
        <a class="button buttomMod" target="_blank" href="{linkSite}">Site</a>
      {/if}
      {#if linkRepo}
        <a  class="button buttomMod" target="_blank"  href="{linkRepo}">Repo</a>
      {/if}
      {#if linkBlog}
        <a  class="button buttomMod end" target="_blank"  href="{linkBlog}">Blog</a>
      {/if}
    </div>
  </div>
</div>

<style>
  .card-container{
    width:30%;
    margin-bottom:40px;
    padding-bottom:10px;
    border: var(--border-default) solid #000;
  }
  .text{
    width:90%;
    /* background-color:red; */
    margin:0px auto;
  }
  .techs{
    display:flex;
    width:100%;
    flex-direction:row;
  }
  .icon{
    fill: #000;
    width: 16px;
    margin-right:10px;
  }
  img{
    border-bottom: var(--border-default) solid #000;
    width:100%;
    margin: 0px;
  }
  h2{
    font-weight:normal;
    font-size:24px;
    margin: 0px 0px;
    margin-bottom: 4px;
  }
  .button-container{
    display:flex;
    margin-top:10px;
  }
  .buttomMod{
    width:30%
  }
  .end{
    margin-right:0px;
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
