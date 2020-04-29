<template>
    <div class="about">
        <div class="jumbotron mt-1 text-center">
            <h1>New Game</h1>
            <p>This is used to add a new game to list of owned games</p>
        </div>
        
        <form @submit.prevent="addGame">
            <div class="form-group">
                <label for="name">Name of the new game</label>
                <input type="text" class="form-control" id="name" placeholder="Game Name" name="name" v-model="gameName">
            </div>
            <div class="form-group">
                <label for="genre">Genre</label>
                <input type="text" class="form-control" id="genre" placeholder="Genre" name="genre" v-model="genre">
            </div>
            <div class="form-group">
                <label for="imageName">Image</label>
                <input type="text" class="form-control" id="imageName" placeholder="Image Name" name="imageName" v-model="image">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                gameName: '',
                genre: '',
                image: '',
            }
        },
        methods: {
            addGame() {
                //let newGame = '{name: "' + this.gameName + '", genre: "' + this.genre + '", image: "' + this.image + '",}'
                let newGame = '{ "name" : "' + this.gameName +'", "genre" : "' + this.genre + '", "image" : "' + this.image +'"}'
                let json = JSON.parse(newGame)
                this.$root.$data.products.push(json)
            }
        },
    }
</script>