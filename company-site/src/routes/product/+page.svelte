<script>
    export let data;
</script>

<h1>Our Products Page</h1>

<ul>
    {#each data.details as { slug, name } }
        <li><a href="/product/{slug}">{name}</a></li>        
    {/each}
</ul>