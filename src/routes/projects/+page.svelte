<script>
  import projects from "$lib/data/projectsAll.json"
  import CardProject from "/src/components/ui/CardProjects.svelte"
</script>

<main >
  <div class="title-container">
  <h1 class="title title-font" >Projects</h1>
  </div>
  <div class="containerCards">
    {#each projects as project}
    <CardProject {...project} />
    {/each}
  </div>
  
  
</main>

<style>
  main{
    padding-top: 40px;
    min-height:100vh;
  }
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
    margin-top: 40px ;
    margin-bottom: 10px;
  }
  .title-container{
    padding: 0px 40px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    margin-bottom:20px;
  }
  .buttonModifications{
    display:inline;
    font-size:28px; 
  }
  h1{
    font-size:48px; 
    font-weight:normal; 
    margin: 10px 0px;
  }
</style>

