<script setup lang="ts">
import footers from "~/api/footer.json";
type SocialIcons = {
    name: string;
    url: string;
    image: string;
};

const socials: SocialIcons[] = [
    { name: "twitter", url: "https://www.twitter.com", image: "https://ucarecdn.com/e8474caf-d9ab-4c55-a402-375b535c8de6/" },
    { name: "linkedln", url: "https://www.linkedln.com", image: "https://ucarecdn.com/f7e9cded-0117-4d7d-97d3-7c0bb1241b5c/" },
    { name: "facebook", url: "https://www.facebook.com", image: "https://ucarecdn.com/dafc39ec-e59d-4885-9ca5-d6c8c7880f9a/" },
    { name: "github", url: "https://www.github.com", image: "https://ucarecdn.com/c2c1dc4d-5e30-40e1-a454-f0fdbdf361e4/" },
    { name: "angellist", url: "https://www.angellist.com", image: "https://ucarecdn.com/9b0da6cc-a4eb-4ece-89e8-501797afc73a/" },
    { name: "dribbble", url: "https://www.dribbble.com", image: "https://ucarecdn.com/cac0515c-82cb-4c31-94fc-1e8b335ab77d/" },
];
</script>

<template>
    <div class="px-6 pt-14 pb-10 md:px-24 md:pt-16 md:pb-12 bg-gray-800">
        <div class="flex flex-col gap-y-6 md:flex-row items-start justify-between">
            <div class="w-full md:w-1/3 md:pe-24 space-y-8">
                <img src="~/assets/images/Logo-light.png" alt="logo-light" />
                <p class="font-normal text-base text-gray-200">
                    Design amazing digital experiences that create more happy in the world.
                </p>
            </div>
            <div class="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 md:gap-y-0 md:gap-x-3">
                <div v-for="(footer, index) in footers" :key="index" class="">
                    <h5 class="text-sm font-semibold text-gray-300 pb-4">{{ footer.name }}</h5>
                    <ul class="space-y-2">
                        <li
                            v-for="item in footer.items"
                            class="flex items-center gap-x-2 text-base font-semibold text-gray-200 hover:text-gray-300"
                        >
                            <NuxtLink to="/">{{ item.name }}</NuxtLink>
                            <div
                                v-show="item.new"
                                class="w-max py-[2px] px-2 rounded-full bg-white/10 text-xs text-white font-medium border border-white/30"
                            >
                                New
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            class="mt-16 pt-8 border-t border-gray-500 flex flex-col md:flex-row items-center justify-between gap-y-3 md:gap-y-0"
        >
            <p class="order-2 md:order-1 font-normal text-base text-gray-500">
                © 2077 Morpheme UI. All rights reserved.
            </p>
            <ul class="order-1 md:order-2 flex gap-x-3 md:gap-x-6">
                <li v-for="(social, index) in socials" :key="`social-${index}`">
                    <a :href="social.url" class="group"
                        ><img :src="social.image" :alt="social.name" class="group-hover:brightness-75"
                    /></a>
                </li>
            </ul>
        </div>
    </div>
</template>
