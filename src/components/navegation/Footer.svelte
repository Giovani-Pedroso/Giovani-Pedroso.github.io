<script>
  const year = new Date().getFullYear()
</script>
<footer >
  <div class="infos">
    <div class="info">
      <h1 class="title">Pages</h1>
      <p><a href="/">Home</a></p>
      <p><a href="/blog">Blog</a></p>
      <p><a href="/sites">Sites</a></p>
      <p><a href="/apps">Apps</a></p>
    </div>
    <div class="info end">
      <h1 class="title">Contact</h1>
      <p><a href="https://www.linkedin.com/in/giovani-sant-ana/">Linkedin</a></p>
      <p><a href="https://github.com/Giovani-Pedroso">
        Github
      </a></p>
      <p>
        giovanisfpv@gmail.com
      </p>
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
    padding: 10px 0px;
    border-right: var(--border-brutal); 
  }
  .end{
    padding: 10px var(--padding-default);
    border-right: none; 
  }
  .title{
    margin-bottom: 10px;
    font-weight: normal;
    font-size: 24px;
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
</style>
