<script>
  import CardProject from "../ui/CardProjects.svelte"
  import projects from "$lib/data/projectHome.json"
</script>

<section>
  <div class="title-container">
    <h1 class="title title-font">
      <span>
      Projects
      </span>
      <span>
          <a href="/projects"
            class="button buttonModifications">
            All Projects
          </a>
    </span>
    </h1>
  </div>
  <div class="containerCards">
    {#each projects as project}
    <CardProject {...project} />
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
  @media (max-width: 860px){
    span{
      display:block;
    }
  }
</style>
