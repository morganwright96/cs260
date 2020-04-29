<template>
    <div class="album py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="tempGame in gameList" :key="tempGame.id">
                    <div class="card mb-4 box-shadow"  >
                        <div class="card-body">
                            <p class="card-text text-center">{{tempGame.title}}</p>
                            <img class="card-img-top mb-2" :src="tempGame.imagePath" :alt="tempGame.title">
                            <div class="m-0" v-if="user">
                                <div class="mt-2" v-if="tempGame.isCheckedOut === false">
                                    <button type="button" @click="markCheckedOut(tempGame)" class="btn btn-success btn-block">Availiable for Checkout</button>
                                </div>
                                <div class="mt-2" v-else>
                                    <button type="button" class="btn btn-danger btn-block">Not Currently Availiable</button>
                                </div>
                            </div>
                            <p class="card-text text-center" v-else>Please signin to see availability</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Games',
    data() {
        return {
            gameList: [],
        }
    },
    created() {
        this.getGames();
        },
    computed: {
        user() {
            return this.$root.$data.user;
        }
    },
    methods: {
        async getGames() {
            try {
                let response = await axios.get("/api/games");
                this.gameList = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async markCheckedOut(tempGame) {
            try {
                await axios.put("/api/games/" + tempGame._id, {
                    isCheckedOutTo: this.$root.$data.user._id
                });
                this.getGames();
                return true;
            } catch (error) {
                console.log(error);
            }
            //window.location.href = '/games';
        },
    }
}
</script>
