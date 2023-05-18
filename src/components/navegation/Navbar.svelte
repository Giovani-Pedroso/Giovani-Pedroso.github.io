<script>
  import Menu from "$lib/icons/menu.svelte"
  import Close from "$lib/icons/close.svelte"
  let isOpen = false

  const pages =[
    
    {name: "Home", link:"/"},
    {name: "Blog", link:"/blog"},
    {name: "Projects", link:"/projects"},
  ]
  function handleOpen(){
    isOpen = !isOpen
  }
</script>

<nav>
  <div class="navbar">
    <div class="title-font logo ">
      <a href="/">
      Giovani SFPV
      </a>
      <!-- <button on:click="{handleOpen}"
           title="Menu navbar"
           class="icon" >
           {#if isOpen}
           <Close/>
           {:else}
           <Menu/> 
           {/if}
           </button> -->
    </div>
    <!-- <ul class="pages">
         {#each pages as page}
         <li class="page">
         <a href="{page.link}">{page.name}</a>
         </li>     
         {/each}
         </ul> -->
  </div>
</nav>

<style>
  nav{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
  }
  .navbar{
    font-family: 'Cormorant ', sans-serif;
    border-bottom: var(--border-default) solid #000;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px var(--padding-default) ;
    background-color:#fff;
  }
  .icon{
    display:flex;
    fill: #000;
    width: 32px;
  }

  button{
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .logo{
    font-size:24px;
    color: var(--accent-color);
    display:flex;
    margin: 10px 0px;
    align-items:center;
    width:100%;
    justify-content:space-between;
  }
  ul{
    display:flex;
    flex-direction:row;
    list-style-type: none;
  }
  li{
    margin-left: 10px;
  }
  
  
  @media (max-width: 700px){
    .navbar{

      padding:0px var(--padding-mobile);
    }
    ul{
      display:none;
    }
  }
</style>
