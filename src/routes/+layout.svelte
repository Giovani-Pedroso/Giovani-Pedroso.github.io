<script>
  import Navbar from "../components/navegation/Navbar.svelte"
  import Footer from "../components/navegation/Footer.svelte"
  import "@fontsource/cormorant";
</script>

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
   --accent-color:#00f;
   --border-size:1px;
   --shadow-brutal: 6px 6px 0px var(--primary-color);
   --shadow-brutal-sm: 3px 3px 0px var(--primary-color);
   /* --shadow-brutal: 6px 6px 0px var(--primary-color); */
   --border-brutal: var(--border-size) solid var(--primary-color) ;
   --padding-default: 40px;
   --padding-mobile: 20px;
   --border-default: 1px;
  }
 :global(.title-font){
font-weight: 200;
    font-family: "Times New Roman", Times, serif;
  }
  
  :global(.button){
    padding:4px;
    display:flex;
    flex-direction:row;
    align-items:center;
    border: var(--border-default) solid #000;
    background-color:#fff;
    color:#000;
    width:30%;
    margin-right:20px;
  }
  :global(.button:hover){
    background-color:#000;
    color:#fff;
  }

  :global(.button:hover > .icon){
    fill: #fff;
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
