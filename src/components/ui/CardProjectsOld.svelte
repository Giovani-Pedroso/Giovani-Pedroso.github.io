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
  export let titleSite ;
  export let linkSite ;
  export let linkRepo ;
  export let img ;
  export let technologies = [];

  let components = technologies.map((tech)=>{
    switch(tech){
      case "Css":
        return Css
      case "Firebase":
        return Firebase
      case "Html":
        return Html
      case "Jest":
        return Html
      case "JS":
        return JS
      case "Html":
        return Html
      case "NextJs":
        return NextJs
      case "Node":
        return Node
      case "React":
        return React
      case "Svelte":
        return Svelte
      case "Tailwind":
        return Tailwind
      case "TS":
        return TS
    }
  })
  
</script>

<div class="card-container">
  <img src="{img}">
  <h2>{titleSite}</h2>
  <!-- Icons technologies -->
  <div class="techs">
    {#each components as tech} 
      <div class="icon" >
        <svelte:component this="{tech}"/>
      </div>
    {/each}
  </div>
  <div class="button-container">
    {#if linkSite}
      <a class="button" target="_blank" href="{linkSite}">Site</a>
    {/if}
    {#if linkRepo}
      <a  class="button" target="_blank"  href="{linkRepo}">Repo</a>
    {/if}
  </div>
</div>

<style>
  .card-container{
    width:30%;
    margin-bottom:20px;
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
    width:100%;
    border: var(--border-default) solid #000;
    margin: 0px;
  }
  h2{
    font-weight:normal;
    font-size:24px;
    margin: 0px 0px;
    margin-bottom: 4px;
  }
  .button-container{
    margin-top:10px;
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
