<script setup lang="ts">
import { useProductStore } from "~/store/product.store";
import { useCartStore } from "~/store/cart.store";
const productStore = useProductStore();
const cartStore = useCartStore();
const { id } = useRoute().params;
const loading = ref(false);
const qty = ref(1);

const colors = ref([
    {
        color: "orange",
        status: true,
        available: true,
    },
    {
        color: "green",
        status: false,
        available: true,
    },
    {
        color: "blue",
        status: false,
        available: false,
    },
]);
const sizes = ref([
    {
        label: "s",
        status: false,
        available: true,
    },
    {
        label: "m",
        status: false,
        available: false,
    },
    {
        label: "l",
        status: false,
        available: true,
    },
    {
        label: "xl",
        status: true,
        available: true,
    },
]);

const incrementQty = (): void => {
    qty.value++;
};
const decrementQty = (): void => {
    qty.value--;
};

const colorHandler = (color: any) => {
    colors.value.map((item) => {
        item.status = false;
    });
    color.status = true;
};

const sizeHandler = (size: any) => {
    sizes.value.map((item) => {
        item.status = false;
    });
    size.status = true;
};

onMounted(() => {
    productStore.getProductDetail(Number(id));
    loading.value = true;
});
</script>

<template>
    <div class="pb-24">
        <div class="pt-10 px-6 md:px-24 md:pt-36 md:pb-[72px] bg-gradient-to-b from-secondary">
            <div class="flex items-center justify-between">
                <Button @click="$router.back()" label="Back" icon="arrow-left" color="white" size="sm" />
                <h1
                    class="text-center text-3xl md:text-[40px] md:leading-[56px] md:tracking-[-0.8px] font-semibold text-gray-900 mb-6"
                >
                    Product Detail
                </h1>
                <Button @click="cartStore.addItem(Number(id), qty)" label="Add to cart" icon="cart" color="primary" size="sm" />
            </div>
        </div>
        <div class="px-6 md:px-24 grid grid-cols-2">
            <ProductThumbGallery v-if="Object.keys(productStore.product).length !== 0" :images="productStore.product.images" />
            <ProductThumbGallerySkeleton v-else />
            <div class="space-y-8">
                <div v-if="Object.keys(productStore.product).length !== 0">
                    <h2 class="font-semibold text-3xl text-gray-900">{{ productStore.product.title }}</h2>
                    <h3 class="font-semibold text-2xl text-primary">${{ productStore.product.price }}</h3>
                </div>
                <div v-else>
                    <div class="w-3/4 h-9 bg-gray-200 animate-pulse rounded-full mb-1"></div>
                    <div class="w-1/3 h-8 bg-gray-200 animate-pulse rounded-full"></div>
                </div>
                <ProductSelectorSection title="color">
                    <ColorOption
                        v-if="Object.keys(productStore.product).length !== 0"
                        v-for="color in colors"
                        @click="colorHandler(color)"
                        :color="color.color"
                        :active="color.status"
                        :available="color.available"
                        :key="color.color"
                    />
                    <div
                        v-else
                        v-for="index in 3"
                        :key="index"
                        class="bg-gray-50 border-2 border-transparent h-14 rounded-lg flex items-center gap-x-4 ps-2 pe-4 py-2"
                    >
                        <span :class="`w-10 h-10 rounded-full bg-gray-300 animate-pulse`"></span>
                        <span class="w-24 h-7 bg-gray-300 animate-pulse rounded-full"></span>
                    </div>
                </ProductSelectorSection>
                <ProductSelectorSection title="size">
                    <SizeOption
                        v-if="Object.keys(productStore.product).length !== 0"
                        @click="sizeHandler(size)"
                        v-for="size in sizes"
                        :active="size.status"
                        :available="size.available"
                        :label="size.label"
                        :key="size.label"
                    />
                    <div
                        v-else
                        v-for="index in 4"
                        :key="index"
                        class="bg-gray-50 border-2 border-transparent w-14 h-14 rounded-lg flex items-center justify-center"
                    >
                        <span class="w-7 h-6 bg-gray-300 animate-pulse rounded-full"></span>
                    </div>
                </ProductSelectorSection>
                <ProductSelectorSection title="Quantity">
                    <CounterButton @click="decrementQty" :active="qty > 1 ? true : false" state="minus" />
                    <CounterInputNumber :modelValue="qty" />
                    <CounterButton
                        @click="incrementQty"
                        :active="qty >= productStore.product.stock ? false : true"
                        state="plus"
                    />
                </ProductSelectorSection>
                <ProductDescriptionAccordion>
                    {{ productStore.product.description }}
                </ProductDescriptionAccordion>
            </div>
        </div>
    </div>
</template>
