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


    </div>
</template>