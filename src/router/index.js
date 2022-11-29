import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import ThucUongBook from "@/views/ThucUongBook.vue";
const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true
    },
    {
        path: "/contacts",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/thucuong",
        name: "danhsachthucuong",
        component: ThucUongBook,
    },
    {
        path: "/thucuong/:id",
        name: "thucuong.edit",
        component: () => import("@/views/ThucUongEdit.vue"),
        props: true
    },
    {
        path: "/themthucuong",
        name: "thucuong.add",
        component: () => import("@/views/ThucUongAdd.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;