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
                                    <p>Home</p>
                                </router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Games</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <router-link to="/addGame" class="dropdown-item">
                                        <p class="m-0">Add Game</p>
                                    </router-link>
                                    <router-link to="/browse" class="dropdown-item">
                                        <p class="m-0">Genres</p>
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div class="container">
            <router-view />
        </div>
        
        <footer class="container mt-4">
            <div>
                <h6>Created By Computers by Morgan</h6>
                <a class="link-no-style" href="https://github.com/morganwright96">GitHub</a>
            </div>
        </footer>
    </div>
</template>

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    .link-no-style {
        color: #97AAB4;
    }
    .link-no-style:hover {
        color: black;
    }
</style>