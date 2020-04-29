<template>
    <div>
        <HomePage v-if="user" />
        <Login v-else />
    </div>
</template>

<script>
    import axios from 'axios';
    import Login from '@/components/Login.vue'
    import HomePage from '@/components/HomePage.vue'
    //import MyTickets from '@/components/MyTickets.vue'
    export default {
        name: 'home',
        components: {
            Login,
            HomePage
            //MyTickets,
        },
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
        }
    }
</script>

