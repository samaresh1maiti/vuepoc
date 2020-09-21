<template>
  <div id="app">
    <b-row>
      <b-col style="padding-left:10%">
        <Burger></Burger>
      </b-col>
      <b-col cols="4">
        <LanguageSwitcher></LanguageSwitcher>
      </b-col>
    </b-row>

    <div id="app1">
      <!-- <nav class="main-nav"></nav> -->

      <SideBar>
        <ul class="sidebar-panel-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/${$i18n.locale}/InputForm">Input Form</router-link>
          </li>
          <li>
            <router-link to="/${$i18n.locale}/setting">Setting</router-link>
          </li>
          <li>
            <router-link to="/${$i18n.locale}/Report">Report</router-link>
          </li>
          <li>
            <router-link to="/${$i18n.locale}/Barchart">PieChart</router-link>
          </li>
        </ul>
      </SideBar>
    </div>

    <!-- <b-container> -->
    <router-view />
    <!-- </b-container> -->
  </div>
</template>

<script>
// import EnterData from './components/EnterData'
// import InputForm from './components/InputForm'
import SideBar from "./components/Sidebar";
import Burger from "./components/Burger";
import LanguageSwitcher from "./components/LanguageSwitcher";
export default {
  name: "App",
  components: {
    // EnterData,
    Burger,
    SideBar,
    LanguageSwitcher,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  /* background: rgb(101,31,87); */
  /* background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%); */
}

/* .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Lato'
 } */

.main-nav {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}
ul.sidebar-panel-nav > li {
  border: 2px solid black;
  padding-top: 10px;
}

ul.sidebar-panel-nav > li > a {
  color: #285085;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
  padding-bottom: 0.5em;
}
</style>
