<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/personalInformation/EducationBackground">Education Background</router-link> |
    <router-link to="/personalInformation/Skills">Skills</router-link> |
    <router-link to="/personalInformation/WorkExperience">Work Experience</router-link> |
    <router-link to="/personalInformation/others">Others</router-link> |
    <router-link to="/codeTesting/testingVue3">Testing Vue3</router-link> |
    <router-link to="/codeTesting/externalApi">External API</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
