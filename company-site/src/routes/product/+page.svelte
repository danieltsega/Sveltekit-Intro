<script>
    export let data;
</script>


<div class="flex flex-col items-center justify-center gap-5 text-center w-full py-8">

    <h1 class="text-4xl font-bold">Our Products</h1>

<ul class="flex flex-col gap-4">
    {#each data.details as { slug, name } }
        <div class="p-4 rounded-md shadow-md flex justify-start bg-white items-center gap-2 border hover:border-green-300 hover:ease-in-out hover:border-2">
            <div class="w-8 h-8 bg-gray-400 rounded-md"></div>
            <li><a class="text-lg font-semibold uppercase" href="/product/{slug}">{name}</a></li> 
        </div>       
    {/each}
</ul>

</div>
