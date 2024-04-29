<script>
    import '../app.css';
    import NavBar from "../components/NavBar.svelte"
    import Footer from "../components/Footer.svelte"
</script>

<main>
    <NavBar/>
    <slot />
    <Footer/>
</main>