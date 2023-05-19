<script>
  import Navbar from "../components/navegation/Navbar.svelte"
  import Footer from "../components/navegation/Footer.svelte"
  import "@fontsource/cormorant";
  import "@fontsource/righteous";
</script>

<svelte:head>
  <meta name="description" content="Personal site of the developer Giovani SantAna Ferreira Pedroso Vaz">
</svelte:head>

<Navbar/>
<slot/>
<Footer/>

<style>
 :global(:root){
    padding:0px;
    margin:0px;
    font-family: 'Cormorant ', sans-serif;
   --primary-color:#000000;
   --secondary-color:#008;
   --accent-color:#aec6cf;
   --shadow-color:#2a2a2a;
   --border-size:1px;
   --shadow-brutal: 6px 6px 0px var(--primary-color);
   --shadow-brutal-sm: 3px 3px 0px var(--primary-color);
   /* --shadow-brutal: 6px 6px 0px var(--primary-color); */
   --border-brutal: var(--border-size) solid var(--primary-color) ;
   --padding-default: 40px;
   --padding-mobile: 20px;
   --border-default: 1px;
   --border-radius-def: 6px;
  }
 :global(.title-font){
   font-weight: 100;
   /* font-family: "Times New Roman", Times, serif; */
   font-family: "Righteous", sans-serif;
  }
  
  :global(.button){
    padding:4px;
    display:flex;
    flex-direction:row;
    align-items:center;
    /* justify-content:center; */
    border: var(--border-default) solid #000;
    background-color:var(--accent-color);
    box-shadow: 2px 2px 0px black;
    color:#000;
    width:30%;
    border-radius: var(--border-radius-def);
    margin-right:20px;
  }
  :global(.button:hover){
    box-shadow: 3px 3px 0px black;
    /* background-color:#000;
       color:var(--accent-color); */
  }
  :global(.button:hover > .icon){
    /* fill: var(--accent-color); */
  }
  :global(body){
    margin:0px;
  }
  :global(a){
    text-decoration:none;
    color:#000;
  }
  :global(a:hover){
    text-decoration: underline;
  }
</style>
