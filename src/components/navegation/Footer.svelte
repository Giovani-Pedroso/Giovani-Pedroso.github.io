<script>
  const year = new Date().getFullYear()
</script>
<footer >
  <div class="infos">
    <div class="info">
      <div class="x">
      <h1 class="title title-font">Pages</h1>
      <p><a href="/">Home</a></p>
      <p><a href="/projects">Projects</a></p>
      <p><a href="/blog">Blog</a></p>
      </div>
    </div>
    <div class="info end">
      <div class="x">
      <h1 class="title title-font">Contact</h1>
      <p><a href="https://www.linkedin.com/in/giovani-sant-ana/">Linkedin</a></p>
      <p><a href="https://github.com/Giovani-Pedroso">
        Github
      </a></p>
      <p>
        giovanisfpv@gmail.com
      </p>
    </div>
    </div>
  </div>
  <div class="copyright">
    ©Copyright Giovani SFPV  {year}
  </div>
</footer>

<style>
  footer{
   border-top: var(--border-brutal); 
    margin-top:20px;
  }
  .infos{
    padding: 0px var(--padding-default);
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
  }
  .info{
    width:100%;
    padding: 20px 0px;
    border-right: var(--border-brutal); 
  }
  .end{
    padding: 10px var(--padding-default);
    border-right: none; 
  }
  a{
    display:block;
    /*padding: 5px 0px;*/
    margin: 8px 0px;
    font-size: 20px;
  }
  p{
    font-size: 20px;
  }
  .title{
    margin-bottom: 10px;
    margin-top: 0px;

    font-weight: normal;
    font-size: 26px;
  }
  ul{
    list-style-type: none;
  }
  p{
    margin:0px;
  }
  .copyright{
    border-top: var(--border-brutal); 
    padding: 10px var(--padding-default);
  }
  @media (max-width: 700px){
    .infos{
      padding:0;
      display:flex;
      flex-direction:column;
      justify-content: space-evenly;
    }
    .x{
      padding-left: var(--padding-mobile);
    }
    .info{
      max-width:100vw;
      border-right: none; 
      padding-top: 10px;
      border-bottom: var(--border-brutal); 
      /* width:100%;
         border-right: none; 
         padding: 10px var(--padding-mobile);
         border-bottom: var(--border-brutal);  */
    }
    .end{
      padding: 0px;
      padding-top: 10px;
      padding-botom: 10px;
      /* padding: 10px var(--padding-mobile);
         border-bottom: none;  */
         border-bottom: none;  
    }
    .copyright{
      margin-top: 10px;
      padding: 10px var(--padding-mobile);
    }
  }
  
</style>
