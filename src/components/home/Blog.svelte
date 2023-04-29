<script>
  import CardBlog from "../ui/CardBlog.svelte"
  const posts=[
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
    {
      img:"/src/lib/images/blog/emacs.png",
      title:"title",
      category:"test",
      description:"Just a test post"
    },
  ]
</script>

<section>
  <h1 class="title">Blog - <span><a href="/sites">see all posts</a></span></h1>
  <div class="cards-container">
   {#each posts as post} 
     <CardBlog {...post}/>
   {/each}
  </div>
</section>

<style>
  section{
    margin:0px;
    padding: 0px var(--padding-default);
    
  }
  h1{
    font-size:40px; 
    font-weight:normal; 
    margin: 10px 0px;

  }
  .cards-container{
    justify-content: space-between;
    flex-wrap: wrap;
    display:flex;
  }
  /* .title{
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
     } */
  
</style>
