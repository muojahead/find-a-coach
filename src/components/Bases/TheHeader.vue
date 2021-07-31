<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-container">
        <div class="logo">
          <router-link class="navbar-brand" to="/">
            <img src="../../assetss/imgs/logo.svg" alt="Logo" />
          </router-link>
        </div>
        <div class="collapseBtn">
          <button class="navbar-toggler" type="button" @click="toggleLinks">
            <span class="navbar-toggler-icon">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="collapse mobile" ref="toggleMenu">
          <ul class="navbar-links">
            <li class="nav-item active">
              <router-link class="nav-link" to="/coaches">Coaches</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register-coach"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/requests"
                >Requests</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    toggleLinks() {
      this.$refs.toggleMenu.classList.toggle("active");
    },
  },
};
</script>
<style scoped>
.navbar {
  background-color: var(--b-color);
  height: 70px;
}
.navbar .container {
  height: 100%;
}
.nav-container {
  display: flex;
  position: relative;
  height: 100%;
  align-items: center;
}
.collapse {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.collapse .navbar-links {
  list-style: none;
  height: 100%;
}
.collapse .navbar-links .nav-item {
  height: 100%;
  line-height: 60px;
  font-weight: bold;
  display: inline-block;
}

.collapse .navbar-links .nav-item .nav-link {
  padding: 5px;
  color: #fff;
  border-bottom: 4px solid transparent;

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.navbar-toggler {
  display: none;
}
.collapse .navbar-links .nav-item .nav-link.active,
.collapse .navbar-links .nav-item .nav-link.exActive {
  background-color: var(--y-color-alpha);
  border-bottom: 4px solid var(--y-color);
  height: 100%;
  transition: 0.3s linear;
  display: block;
}

@media (max-width: 770px) {
  .navbar .logo img {
    width: 170px;
  }
  .navbar-toggler {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 25px;
    padding: 5px 10px;
    background-color: var(--y-color);
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s linear;
  }
  .navbar-toggler:focus {
    background-color: var(--y-color-alpha);
    color: white;
  }
  .navbar .mobile {
    position: fixed;
    top: 70px;
    width: 200px;
    z-index: 1000;
    right: -100%;
    height: calc(100vh - 70px);
    display: block;
    background-color: var(--b-color);
    margin-left: 0;
    transition: 0.2s linear;
  }
  .navbar .mobile.active {
    right: 0;
  }
  .mobile .navbar-links {
    list-style: none;
    height: auto;
  }
  .mobile .navbar-links .nav-item {
    height: auto;
    line-height: none;
    display: block;
    transition: 0.2s linear;
  }
  .collapse .navbar-links .nav-item .nav-link {
    padding: 0 7px;
    color: #fff;
    border-bottom: 4px solid transparent;
    text-decoration: none;
    display: block;
  }
  .collapse .navbar-links .nav-item .nav-link.active {
    padding-left: 15px;
  }
}
</style>>
    