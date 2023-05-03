<script>
  import Arrow from "$lib/icons/arrowRight.svelte"
  export let img;
  export let title
  export let linkPost
  export let category
  export let description
</script>

<div class="card-container">
  <!-- <a  href="{`/blog/${linkPost}`}"> -->
    <img src="{img}"/>
    <div class="text">
      <h2 class="title-font">{title}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
          <a href="{`/blog/${linkPost}`}"
            class=" buttonMod">
            Read <span class="arrow">
            <Arrow/>
            </span>
          </a>
  </div>

</div>

<style>

  .card-container{
    width:46%;
    margin-bottom:20px;
    /* width:100%; */
    /* display:flex;
       padding: 20px 0px;
       border-bottom: var(--border-brutal); */
  }
  .text{
    max-width: 100%;
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
    margin: 0px;
  }
  .arrow{
    display:flex;
    width:28px;
  }
  .buttonMod{
    width:100px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border:none;
  }
  @media (max-width: 860px){

    .card-container{
      width:100%;
      margin-bottom:20px;
    /* width:100%; */
    /* display:flex;
       padding: 20px 0px;
       border-bottom: var(--border-brutal); */
  }
  }
</style>
