<script>
  export let typeButton="primary";
  export let borderSize="md";
  /* export const type="terciary" */
</script>

<button class="{typeButton} {borderSize}">
  <slot/>
</button>

<style>
  button{
    cursor: pointer;
    border: var(--border-brutal) ;
    padding:4px;
    display:inline;
 text-transform: uppercase;
    box-shadow: var(--shadow-brutal);
  }
  .md{
    box-shadow: var(--shadow-brutal);
  }
  .sm{
    width:100px;
    box-shadow: var(--shadow-brutal-sm);
  }
  .primary{
    background-color: var(--accent-color);
  }
  .secondary{
    background-color: var(--primary-color);
    color: #fff;
  }
  .terciary{
    background-color: var(--secondary-color);
  }

</style>
