<script>
  import Arrow from "$lib/icons/arrowRight.svelte"
  export let img;
  export let alt;
  export let title
  export let linkPost
  export let category
  export let description
</script>

<div class="card-container">
    <img src="{img}" {alt}/>
    <div class="text">
      <h2 class="title-font">{title}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
    </div>
    <div class="button-container">
          <a href="{`/blog/${linkPost}`}"
            >
            Read More<span class="arrow">
            <Arrow/>
            </span>
          </a>
    </div>

</div>

<style>

  .card-container{
    width:46%;
    margin-bottom:20px;
    border: var(--border-default) solid #000;
    border-radius:var(--border-radius-def);
    box-shadow: 4px 4px 0px var(--shadow-color);
  }
  .text{
    padding:10px 20px;
  }

  h2{
    margin:0px;
    font-weight:normal;
    font-size:40px;
  }
  h3{
    font-size:20px;
    margin:0px;
    font-weight:normal;
  }
  img{
    width:100%;
    border: var(--border-brutal);

    border-radius:var(--border-radius-def) var(--border-radius-def) 0px 0px;
    margin: 0px;
  }
  .arrow{
    display:flex;
    width:28px;
  }
  /* .buttonMod{
     width:100px;
     display:flex;
     justify-content:space-between;
     align-items: center;
     border:none;
     } */

  a{
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    /* text-align: center ; */
    border-left:var(--border-default) solid #000;
    padding:10px 20px;
  }
  .button-container{
    background-color: var(--accent-color);
    border-top: var(--border-default) solid #000;
    display:flex;
    margin-top:10px;
    justify-content: space-between;
    align-items:center;
    border-radius: 0px 0px var(--border-radius-def) var(--border-radius-def) ;;
  }
  @media (max-width: 860px){
    .card-container{
      width:100%;
      margin-bottom:20px;
    }
  }
</style>
