<script>
    export let data;
</script>


<div class="flex flex-col items-center justify-center gap-5 text-center w-full py-8">

    <h1 class="text-4xl font-bold">Our Products</h1>

<ul class="flex flex-col gap-4">
    {#each data.details as { slug, name } }
        <div class="p-4 rounded-md shadow-md flex justify-start bg-white">
            <li><a href="/product/{slug}">{name}</a></li> 
        </div>       
    {/each}
</ul>

</div>
