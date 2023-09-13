<template>
    <div class="w-[720px] flex border border-gray-200 p-2 rounded-xl bg-white">
        <div class="w-72 rounded-md overflow-hidden bg-gray-200">
            <img src="~/assets/images/bottle.png" alt="bottle" class="mx-auto" width="155" height="162" />
        </div>
        <div class="w-full p-3 flex flex-col justify-between">
            <div class="flex items-center justify-between">
                <div>
                    <h4 class="font-base text-base text-gray-900">UX Review presentations</h4>
                    <p class="font-base text-xs text-gray-400">Color Name</p>
                </div>
                <h3 class="font-semibold text-xl text-gray-900 text-right">RP.36.000</h3>
            </div>
            <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg text-gray-700">Qty : 1</h3>
                <button class="flex items-center gap-x-2 group">
                    <img
                        src="~/assets/icons/trash.svg"
                        alt="remove"
                        class="group-hover:scale-105 transition ease-linear duration-100"
                    />
                    <span class="font-semibold text-sm text-red-700 group-hover:font-bold transition ease-linear duration-100"
                        >Remove</span
                    >
                </button>
            </div>
        </div>
    </div>
</template>
