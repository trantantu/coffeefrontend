<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Quản lý quán coffee</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'contactbook' }" class="nav-link">
                    Coffee
                    <i class="fa-solid fa-mug-saucer"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>