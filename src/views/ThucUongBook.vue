<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch t-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Danh sách thức uống
                <i class="fa-solid fa-mug-saucer"></i>
            </h4>
            <ContactList v-if="filteredThucUongCount > 0" :thucuong="filteredThucUong"
                t-model:activeIndex="activeIndex" />
            <p v-else>Không có thức uống nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshListthucuong()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                <button class="btn btn-sm btn-success" @click="goToAddThucUong">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllThucUong">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeThucUong">
                <h4>
                    Chi tiết thức uống
                    <i class="fa-solid fa-mug-saucer"></i>
                </h4>
                <ThucUongCard :thucuong="activeThucUong" />
                <router-link :to="{
                    name: 'thucuong.edit',
                    params: { id: activeThucUong._id },
                }">
                    <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>




import ThucUongCard from "@/components/ThucUongCard.vue";
import ThucUongList from "@/components/ThucUongList.vue";
import ThucUongService from "@/services/thucuong.service";
import InputSearch from "@/components/InputSearch.vue";


export default {
    components: {
        ThucUongCard,
        InputSearch,
        ThucUongList,

    },
    data() {
        return {
            thucuong: [],
            activeIndex: -1,
            searchText: "",
        };
    },

    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {

        thucuongStrings() {
            return this.thucuong.map((thucuong) => {
                const { name, gia } = thucuong;
                return [name, gia].join("");
            });
        },


        filteredThucUong() {
            if (!this.searchText) return this.thucuong;
            return this.thucuong.filter((_thucuong, index) =>
                this.thucuongStrings[index].includes(this.searchText)
            );
        },

        activeThucUong() {
            if (this.activeIndex < 0) return null;
            return this.filteredThucUong[this.activeIndex];
        },

        filteredThucUongCount() {
            return this.filteredThucUong.length;
        },

    },
    methods: {
        async retrieveThucUong() {
            try {
                this.thucuong = await ThucUongService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveThucUong();
            this.activeIndex = -1;
        },

        async removeAllThucUong() {
            if (confirm("Bạn muốn xóa tất cả thức uống?")) {
                try {
                    await ThucUongService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddThucUong() {
            this.$router.push({ name: "thucuong.add" });
        },

    },
    mounted() {
        this.refreshList();

    },
};
</script>
<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>







