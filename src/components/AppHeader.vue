<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý quán Coffee</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Nhân Viên
                    <i class="fas fa-address-book"></i>
                </router-link>
                <router-link :to="{ name: 'danhsachthucuong' }" class="nav-link">
                    Coffee
                    <i class="fa-solid fa-mug-saucer"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>