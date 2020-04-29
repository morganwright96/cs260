<template>
    <div class="container hero">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Request a Game</h5>
                        <p class="text-center">Please enter the following about the game.</p>
                        <form class="form-signin" v-on:submit.prevent>
                            <div class="form-label-group mb-2">
                                <input class="form-control" type="text" id="title" placeholder="Game Title" v-model="title" />
                            </div>
                            <div class="form-label-group mb-2">
                                <textarea placeholder="Description" id="description" class="form-control" v-model="description"></textarea>
                            </div>
                            <div>
                                <button @click="requestGame" class="btn btn-primary mt-2 btn-block">Request Game</button>
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
                title: "",
            }
        },
        methods: {
            async requestGame() {
                try {
                    await axios.post('/api/#', {
                        title: this.title,
                        description: this.description
                    });
                } catch (error) {
                    console.log(error);
                }
                window.location.href = '/';
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
        background-image: url("/images/chess-bg.jpg");
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