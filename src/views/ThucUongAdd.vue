<template>
    <div v-if="thucuong" class="page">
        <h4>Thêm Thức Uống</h4>
        <ThucUongForm :thucuong="thucuong" @submit:thucuong="createThucUong" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ThucUongForm from "@/components/ThucUongForm.vue";
import ThucUongService from "@/services/thucuong.service";
export default {
    components: {
        ThucUongForm,
    },

    data() {
        return {
            thucuong: {},
            message: "",
        };
    },
    methods: {

        async createThucUong(data) {
            try {
                await ThucUongService.createthucuong(data);
                this.message = "Thức uống đã được thêm thành công.";
            } catch (error) {
                console.log(error);
            }
        },

    },

};
</script>