<script>
  import CardSite from "../ui/CardSite.svelte"
  import Test from "$lib/images/cleidesantana.png"
  const sites = [
    {
      img:"/src/lib/images/sites/cleidesantana.png",
      linkSite:"https://cleidesantana.com.br",
      titleSite:"Cleide Psicologia",
      technologies:["NextJs","Tailwind", "TS"]
    },
    {
      img:"/src/lib/images/sites/techday.png",
      titleSite:"Techday - Carrefour, Dio",
      linkRepo:"https://github.com/Giovani-Pedroso/techday",
      technologies:["NextJs","Firebase","Tailwind", "JS"]
    },
    {
      img:"/src/lib/images/sites/covid.png",
      linkRepo:"https://github.com/Giovani-Pedroso/Monitor-Covid",
      titleSite:"Monitor Covid",
      technologies:["React", "JS"]
    },
  ]
</script>

<section>
  <div class="title-container">
  <h1 class="title">Sites - <span><a href="/sites">see all</a></span></h1>
  </div>
  <div class="containerCards">
    {#each sites as site}
    <CardSite {...site} />
    {/each}
  </div>
</section>

<style>
  section{
    margin:0px;
  }
  .containerCards{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px var(--padding-default);
  }
  .title{
   font-size:40px; 
    margin: 10px 0px;
  }
  .title-container{
    font-family: 'Cormorant ', sans-serif;
    padding: 0px 40px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:20px;
  }
  h1{
    font-weight:normal;
    font-family: 'Cormorant ', sans-serif;
  }
  a{
    color:#00f;
  }
</style>
