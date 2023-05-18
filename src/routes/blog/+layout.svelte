<svelte:head>
  <title>Blog</title>
</svelte:head>

<slot/>

<style>
   :global(main){
    padding-top: 40px;
    min-height:100vh;
  }
   :global(article){
    padding:0px  ;
    width:60%;
    margin: 0px auto;
  }
  :global(h1){
    font-weight: 500;
    font-size:42px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h2){
    font-weight: 500;
    font-size:38px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h3){
    font-weight: 500;
    font-size:30px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h4){
    font-weight: 500;
    font-size:30px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(h5){
    font-weight: 500;
    font-size:30px;
    font-family: "Times New Roman", Times, serif;
  }
  :global(pre){
    margin: 0px 10px;
    padding: 20px;
    overflow: scroll;
    border: var(--border-brutal);
  }
  @media (max-width: 860px){
    :global(article){
      width:96%;
    }
  }
</style>
