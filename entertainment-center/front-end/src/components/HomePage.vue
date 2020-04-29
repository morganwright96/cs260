<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4 text-center">Game Center</h1>
            <p class="text-center">This site displays the board games that are availiable to play</p>
        </div>
        <div class="album">
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h5>View all Games</h5>
                            <p>You can view all the games that we have available to check out and use</p>
                        </div>
                        <router-link to="/games" class="btn btn-primary">
                            View Games
                        </router-link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h5>Checked Out Games</h5>
                            <p>You can see the games you currently have checked out</p>
                        </div>
                        <router-link to="/my-games" class="btn btn-primary">
                            See My Games
                        </router-link>
                    </div>
                </div>
                <div class="col-md-4" v-if="user && user.role === 'admin'">
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h5>Add New Game</h5>
                            <p>Add a game for users to checkout and use</p>
                        </div>
                        <router-link to="/add-game" class="btn btn-primary">
                            Add New Game
                        </router-link>
                    </div>
                </div>
                <div class="col-md-4" v-else>
                    <div class="card mb-4 box-shadow">
                        <div class="card-body">
                            <h5>Request Game</h5>
                            <p>Request the purchase of a game to be added to the game center</p>
                        </div>
                        <router-link to="/request-game" class="btn btn-primary">
                            Request Game
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'HomePage',
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