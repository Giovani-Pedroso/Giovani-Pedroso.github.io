<script>
  export let size="sm"
</script>

<button class="{size}">
 <slot/> 
</button>

<style>
  button{
    background-color: var(--accent-color);
    padding: 16px;
    border: var(--border-brutal) ;
  }
  .md{
    box-shadow: var(--shadow-brutal);
  }
  .sm{
    width:100px;
    box-shadow: var(--shadow-brutal-sm);
  }
  
</style>
