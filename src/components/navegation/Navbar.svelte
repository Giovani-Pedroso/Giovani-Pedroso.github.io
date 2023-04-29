<script>
  const pages =[
    {name: "Home", link:"/"},
    {name: "Blog", link:"/blog"},
    {name: "Sites", link:"sites"},
    {name: "Apps", link:"/apps"},
    {name: "Embedded", link:"/"},
  ]
</script>

<nav>
  <div class="navbar">
    <div class="logo">
      <a href="/">
      Giovani SFPV
      </a>
      <div>

      </div>
    </div>
  <ul class="pages">
    {#each pages as page}
      <li class="page">
        <a href="{page.link}">{page.name}</a>
      </li>     
    {/each}
  </ul>
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
  .logo{
    font-size:24px;
  }
  ul{
    display:flex;
    flex-direction:row;
    list-style-type: none;
  }
  li{
    margin-left: 10px;
  }
</style>
