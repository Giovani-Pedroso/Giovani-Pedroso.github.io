<script>
  import me from '$lib/images/me.png';
  import ButtonIcon from "../ui/ButtonIcon.svelte"
  import Github from "$lib/icons/github.svelte"
  import Kaggle from "$lib/icons/kaggle.svelte"
  import Linkedin from "$lib/icons/linkedin.svelte"
  import Tecnologies from "../home/Tecnologies.svelte"
</script>

<header class="hero">
  <div class="presentation">
    <div>
      <p class="topics">Web Design</p>
      <p class="topics">Mobile Developer</p>
      <p class="topics">Data Analyst</p>
    </div>
    <div class="text">
      <p >
       Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit.
      </p>
      <div class="buttons-container">
        <a href="https://github.com/Giovani-Pedroso"
          target="_blank"
          class="button">
          <div class="icon" >
            <Github/>
          </div>
          Github
          </a>
          <a href="https://www.linkedin.com/in/giovani-sant-ana/"
            target="_blank"
            class="button">
          <div class="icon" >
            <Linkedin/>
          </div>
          Linkedin
          </a>
          <a href="https://www.linkedin.com/in/giovani-sant-ana/"
            target="_blank"
            class="button">
          <div class="icon" >
            <Kaggle/>
          </div>
          Kaggle
          </a>
      </div>
    </div>
  </div>
  <Tecnologies/>
</header>

<style>
  .hero{
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    height:100vh;
  }
  .topics{
    margin:0px;
    font-size:60px;
    /* color: var(--accent-color); */
    /* color: var(--secondary-color); */
  }
  .presentation{
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:0px var(--padding-default) ;
    height:100%;
  }
  .text{
    max-width:50%;
    text-align: justify;
  }
  .icon{
    display:flex;
    fill: #fff;
    width: 32px;
    margin-right:20px;
  }
  .buttons-container{
    display:flex;
    flex-direction:row;
  }
  .button{
    padding:4px;
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#000;
    color:#fff;
    border: var(--border-default) solid #000;

    width:30%;
    /* width:200px; */
    margin-right:20px;
  }
</style>
