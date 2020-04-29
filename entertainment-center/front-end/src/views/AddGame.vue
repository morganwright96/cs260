<template>
    <div class="container hero">
        <div class="row">
            <div  class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Add New Game</h5>
                        <p class="text-center">Please enter the following about the game.</p>
                        <form class="form-signin" v-on:submit.prevent>
                            <div class="form-label-group mb-2">
                                <input class="form-control" type="text" id="title" placeholder="Game Title" required v-model="title"/>
                            </div>
                            <div class="form-label-group mb-2">
                                <textarea placeholder="Description" id="description" class="form-control" v-model="description"></textarea>
                            </div>
                            <div>
                                <p>Photo of the game box.</p>
                                <input type="file" id="title" required @change="fileChanged"/>
                            </div>
                            <div>
                                <button @click="addGame" class="btn btn-primary mt-2 btn-block">Add Game</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
    name: 'Admin',
    data() {
        return {
            description: "",
            findTitle: "",
            findItem: null,
            findDescription: "",
            items: [],
            title: "",
            file: null,
            addItem: null,
        }
    },
    methods: {
        fileChanged(event) {
            this.file = event.target.files[0]
        },
        async addGame() {
            try {
                const formData = new FormData();
                formData.append('photo', this.file, this.file.name)
                let r1 = await axios.post('/api/photos', formData);
                let r2 = await axios.post('/api/games', {
                    title: this.title,
                    path: r1.data.path,
                    description: this.description
                });
                this.addItem = r2.data;
            } catch (error) {
                console.log(error);
            }
            window.location.href = '/add-game';
        },
    }
}
</script>

<style scoped>
    h1 {
        font-size: 28px;
        font-variant: capitalize;
    }
    .heroBox {
        background: white;
        opacity: 0.95;
        display: inline;
        padding: 20px;
        font-size: 20px;
        text-align: center;
        border-radius: 30px;
    }

    .hero::after {
        content: "";
        background-image: url("/images/new-game.jpg");
        background-size: 100%;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
    }

    .hero img {
        height: 20px;
        margin: 0px;
    }

    .hero form {
        font-size: 14px;
    }

        .hero form legend {
            font-size: 20px;
        }

    input {
        margin-right: 10px;
    }

    .error {
        margin-top: 20px;
        display: inline;
        padding: 5px 20px;
        border-radius: 30px;
        font-size: 10px;
        background-color: #d9534f;
        color: #fff;
    }
</style>