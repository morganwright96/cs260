<template>
    <div>
        <h1 class="text-center mt-3">You have checked out the following</h1>
        <div class="album py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="tempGame in gameList" :key="tempGame.id">
                        <div class="card mb-4 box-shadow">
                            <div class="card-body">
                                <p class="card-text text-center">{{tempGame.title}}</p>
                                <p class="text-center">Checked out on: {{time(tempGame.CheckedOutDate)}}</p>
                                <img class="card-img-top mb-2" :src="tempGame.imagePath" :alt="tempGame.title">
                                <div class="mt-2">
                                    <button type="button" @click="checkIn(tempGame)" class="btn btn-primary btn-block">Check back in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
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
    methods: {
        async getGames() {
            try {
                let response = await axios.get("/api/mygames");
                this.gameList = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        time(d) {
            return moment(d).format('D MMMM YYYY, h:mm a');
        },
        async checkIn(tempGame) {
            try {
                await axios.put("/api/mygames/" + tempGame._id);
                this.getGames();
                return true;
            } catch (error) {
                console.log(error);
            }
            //window.location.href = '/my-games';
        },
    }
}
</script>
