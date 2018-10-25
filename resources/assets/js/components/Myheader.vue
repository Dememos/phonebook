<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="http://bulma.io">
                <img src="https://vignette.wikia.nocookie.net/central/images/6/68/Batman_Logo.png/revision/latest?cb=20141127100327" alt="Dememos" width="112" height="38">
            </a>

            <div class="navbar-menu is-active">


                <router-link to="/home" class="navbar-item">Home</router-link>
                <router-link to="/about" class="navbar-item">About</router-link>
            </div>

            <button class="button navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
</template>