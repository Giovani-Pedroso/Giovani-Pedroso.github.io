<script>
  import CardBlog from "../ui/CardBlog.svelte"
  const posts=[
    {
      img:"/src/lib/images/blog/emacs.png",
      title:"My Emacs configuration",
      category:"Programation",
      description:"My init.org file that I use to configure my emacs for programming: front end, back-end, and embedded systems such as the stm32 and esp-idf"
    },
    {
      img:"/src/lib/images/blog/emacs.png",
      title:"title",
      category:"test",
      description:"Just a test post"
    },
    {
      img:"/src/lib/images/blog/emacs.png",
      title:"title",
      category:"test",
      description:"Just a test post"
    },
  ]
</script>

<section>
  <h1 class="title title-font">Blog
    <span>
          <a href="/blog"
            class="button buttonModifications">
            All posts
          </a>
    </span>
  </h1>
  <div class="cards-container">
   {#each posts as post} 
     <CardBlog {...post}/>
   {/each}
  </div>
</section>

<style>
  section{
    padding: 0px var(--padding-default);
    
  }
  h1{
    font-size:48px; 
    font-weight:normal; 
    margin: 10px 0px;

  }
  span{
    /* display:inline; */
  }
  .buttonModifications{
    display:inline;
    font-size:28px; 
  }
  .cards-container{
    justify-content: space-between;
    flex-wrap: wrap;
    display:flex;
  }
  .title{
    margin:40px 0px ;
  }
  
</style>
