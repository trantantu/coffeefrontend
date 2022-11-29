<script>
export default {
    props: {
        thucuong: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(thucuong, index) in thucuong" :key="thucuong._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ thucuong.name }}
        </li>
    </ul>
</template>