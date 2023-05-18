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
    <div class="specs">
      <p class="topics title-font">Web Design</p>
      <p class="topics title-font">Mobile Developer</p>
      <p class="topics title-font">Data Analyst</p>
    </div>
    <div class="text">
      <p >
Hi my name is Giovani, I'm a developer based in Brazil, I have experience with embedded programming, mobile and web development and data analysis      </p>
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
          <a href="https://www.kaggle.com/giovanipedroso"
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
  .specs{
    color:var(--accent-color);
    -webkit-text-stroke-width: 2px; 
    -webkit-text-stroke-color: #000; 
  }
  .topics{
    margin:0px;
    font-size:70px;
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
    fill: #000;
    width: 32px;
    margin-right:20px;
  }
  .buttons-container{
    display:flex;
    flex-direction:row;
  }
  @media (max-width: 860px){
    .presentation{
      flex-direction:column;
      padding:0px var(--padding-mobile);
      margin-top:40px;
      align-items:flex-start;
      justify-content: space-evenly;
    }
    .topics{
      font-size:44px
    }
    .text{
      width:100%;
    max-width:100%;
    }
    .icon{
      display:none;
    }
    .button{

      font-size:18px;
    }
  }
</style>
