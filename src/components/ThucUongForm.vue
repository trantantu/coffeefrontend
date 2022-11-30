<template>
    <Form @submit="submitThucUong" :validation-schema="thucuongFormSchema">
        <div class="form-group">
            <label for="name">Tên</label>
            <Field name="name" type="text" class="form-control" t-model="thucuongLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="gia">Giá</label>
            <Field name="gia" type="gia" class="form-control" t-model="thucuongLocal.gia" />
            <ErrorMessage name="gia" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input name="favorite" type="checkbox" class="form-check-input" v-model="thucuongLocal.favorite" />
            <label for="favorite" class="form-check-label">
                <strong>Thức uống được yêu thích</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="thucuongLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteThucUong">
                Xóa
            </button>
        </div>
    </Form>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:thucuong", "delete:thucuong"],
    props: {
        thucuong: { type: Object, required: true }
    },
    data() {
        const thucuongFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .max(50, "Giá tối đa 50 ký tự."),
        });
        return {

            thucuongLocal: this.thucuong,
            thucuongFormSchema,
        };
    },
    methods: {
        submitThucUong() {
            this.$emit("submit:thucuong", this.thucuongLocal);
        },
        deleteThucUong() {
            this.$emit("delete:thucuong", this.thucuongLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>