<script>
  /* import Icon from 'svelte-icon' */
  import Arduino from "$lib/icons/arduino.svelte"
  import Css from "$lib/icons/css3.svelte"
  import Espressif from "$lib/icons/espressif.svelte"
  import Firebase from "$lib/icons/firebase.svelte"
  import Emacs from "$lib/icons/gnuemacs.svelte"
  import Html from "$lib/icons/html5.svelte"
  import Jest from "$lib/icons/jest.svelte"
  import NextJs from "$lib/icons/nextdotjs.svelte"
  import Node from "$lib/icons/nodedotjs.svelte"
  import React from "$lib/icons/react.svelte"
  import Stm from "$lib/icons/stmicroelectronics.svelte"
  import Svelte from "$lib/icons/svelte.svelte"
  import Tailwind from "$lib/icons/tailwindcss.svelte"
  import TS from "$lib/icons/typescript.svelte"
  import Python from "$lib/icons/python.svelte"
  import Pandas from "$lib/icons/pandas.svelte"

  const techs=[
    Svelte,
    React,
    TS,
    Node,
    Firebase,
    Tailwind,
    Python,
    Pandas,
    Emacs,
  ]
</script>

<div class="tecnologies">
  {#each techs as tech}
  <div class="icon" >
    <svelte:component this="{tech}" />
  </div>
  {/each}
</div>

<style>
  .icon{
    fill: #000;
    display:flex;
    width: 32px;

  }
  .tecnologies{
    display:flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px var(--padding-default);
    border-bottom: var(--border-default) solid #000;
    border-top: var(--border-default) solid #000;
  }
</style>
