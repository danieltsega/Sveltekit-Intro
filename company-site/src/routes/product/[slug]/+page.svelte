<script>
    export let data;
</script>

<div class="px-28 flex flex-col gap-4">
    <h1 class="text-4xl font-bold">Product Detail</h1>
    <div class="w-32 h-32 rounded-md bg-gray-400"></div>
    <h2 class="text-lg font-semibold uppercase">{data.product.name}</h2>
    <p class="text-lg uppercase font-semibold">Price: <span class="font-bold">$</span><span class="font-bold">{data.product.price}</span></p>
    <p class="text-lg font-medium text-gray-500">{data.product.description}</p>
    <button class="bg-pink-500 text-white font-semibold w-1/4 text-lg py-2 px-4 rounded-sm border-none hover:border-2 hover:border-pink-200 hover:bg-pink-600">BUY NOW</button>
</div>
