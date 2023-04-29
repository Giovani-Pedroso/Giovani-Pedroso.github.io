<script>
  export let img;
  export let title
  export let linkPost
  export let category
  export let description
</script>

<div class="card-container">
  <a href="{`/blog/${linkPost}`}">
  <img src="{img}"/>
  <h2>{title}</h2>
  <h3>{category}</h3>
  <p>{description}</p>
  </a>
</div>

<style>
  .card-container{
    width:44%;
  }
  h2{
    margin:0px;
    font-weight:normal;
    font-size:40px;
  }
  h3{
    font-size:28px;
    margin:0px;
    font-weight:normal;
  }
  img{
    width:100%;
    border: var(--border-brutal);
    margin: 0px;
  }
</style>
