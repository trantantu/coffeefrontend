<script>
export default {
    props: {
        thucuong: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ thucuong.name }}
        </div>

        <div class="p-1">
            <strong>Giá:</strong>
            {{ thucuong.gia }}
        </div>
        <div class="p-1">
            <strong>Thức uống được yêu thích:&nbsp;</strong>
            <i v-if="thucuong.favorite" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>

    </div>
</template>