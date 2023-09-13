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
    <div class="px-6 pt-14 pb-10 md:px-24 md:pt-16 md:pb-12 bg-gray-800 space-y-16">
        <div class="space-y-10">
            <div class="space-y-4">
                <h1 class="font-semibold text-3xl text-white text-center">Let's get started on something great</h1>
                <p class="font-base text-xl text-gray-200 text-center">
                    Join over 4,000+ startups already growing with Morpheme.
                </p>
            </div>
            <div class="flex items-center justify-center gap-x-3">
                <Button label="Contact us" color="white" />
                <Button label="Get started" color="primary" />
            </div>
        </div>
        <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 md:gap-y-0 md:gap-x-3">
            <div v-for="(footer, index) in footers" :key="index" class="">
                <h5 class="text-sm font-semibold text-gray-300 pb-4">{{ footer.name }}</h5>
                <ul class="space-y-2">
                    <li v-for="item in footer.items" class="flex items-center gap-x-2 text-base font-semibold text-gray-200">
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
        <div class="pt-8 border-t border-gray-500 flex flex-col md:flex-row items-center justify-between gap-y-3 md:gap-y-0">
            <img src="~/assets/images/Logo-light.png" alt="logo" />
            <p class="order-2 md:order-1 font-normal text-base text-gray-500">
                © 2077 Morpheme UI. All rights reserved. page
            </p>
        </div>
    </div>
</template>
