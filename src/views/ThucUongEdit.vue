<template>
    <div v-if="thucuong" class="page">
        <h4>Hiệu chỉnh thông tin Thức Uống</h4>
        <ThucUongForm :thucuong="thucuong" @submit:thucuong="updateThucUong" @delete:thucuong="deleteThucUong" />
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
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            thucuong: null,
            message: "",
        };
    },
    methods: {
        async getThucUong(id) {
            try {
                this.thucuong = await ThucUongService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateThucUong(data) {
            try {
                await ThucUongService.updatethucuong(this.contact._id, data);
                this.message = "Thức uống được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteThucUong() {
            if (confirm("Bạn muốn xóa thức uống này?")) {
                try {
                    await ThucUongService.deletethucuong(this.contact._id);
                    this.$router.push({ name: "Danh sách thức uống" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getThucUong(this.id);
        this.message = "";
    },
};
</script>