<template>
    <div id="app">
        <div class="bg-light">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">
                                    Home
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/games" class="nav-link">
                                    View all Games
                                </router-link>
                            </li>
                            <li class="nav-item" v-if="user">
                                <router-link to="/my-games" class="nav-link">
                                    Checked Out Games
                                </router-link>
                            </li>
                            <li class="nav-item" v-if="user">
                                <router-link to="/request-game" class="nav-link">
                                    Request Game
                                </router-link>
                            </li>
                            <li class="nav-item" v-if="user && user.role === 'admin'">
                                <router-link to="/add-game" class="nav-link">
                                    Add Game
                                </router-link>
                            </li>
                        </ul>
                        <a v-if="user" class="nav-link link-no-style p-0" href="/" @click="logout">Logout</a>
                        <a v-if="user && user.role === 'admin'" class="nav-link link-no-style p-0 ml-2 pl-1" href="#">Admin</a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'home',
        async created() {
            try {
                let response = await axios.get('/api/users');
                this.$root.$data.user = response.data.user;
            } catch (error) {
                this.$root.$data.user = null;
            }
        },
        computed: {
            user() {
                return this.$root.$data.user;
            }
        },
        methods: {
            async logout() {
                try {
                    await axios.delete("/api/users");
                    this.$root.$data.user = null;
                } catch (error) {
                    this.$root.$data.user = null;
                }
            },
        }
    }
</script>

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .link-no-style {
        color: black;
    }
    .link-no-style:hover {
        color: dimgray;
    }
</style>
