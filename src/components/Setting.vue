<template>
  <div>
    <div id="navbar">
      <mdb-navbar color="indigo">
        <span class="navbar-text white-text">Settings</span>
        <span class="navbar-text white-text" style="margin-left:50%; color:white">
          <router-link to="/">Back</router-link>
        </span>
      </mdb-navbar>
    </div>
    <div id="body">
      <b-card>
        <b-row>
          <b-col>
            <label>Language:</label>
          </b-col>
          <b-col>
            <div>
              <button v-b-modal.modal-scrollable>Select Language </button>
               
              <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
                <p class="my-4" v-for="item in shoppingItems" :key="item.name">
                    <b-list-group>
                        <b-list-group-item>
                             {{item.name}}
                        </b-list-group-item>
                    </b-list-group>
                
                </p>
              </b-modal>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <label>Currency:</label>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mdbNavbar } from "mdbvue";
export default {
  name: "Setting",
  components: {
    mdbNavbar,
  },
  data() {
  return {
    shoppingItems: [
      {name: 'English', symbol: 'en'},
      {name: 'Spanish', symbol: 'es'}
    ]
  }
},
};
</script>
<style scoped>
#navbar {
  border-radius: 20px;
  background-color: #285085;

  /* padding-bottom: 5px; */
  /* position: fixed; */
  /* padding-left: 5px; */
  /* border: 3px solid black; */
  /* background-color: #285085; */
}
span {
  font-size: large;
  font-weight: bold;
  color: white;
}
.navbar-text {
  display: inline-block;
  margin-left: 40%;
}
label{
    font-size: 20px;
    font-weight: bold;
    color: #285085;
}
button{
    background-color: white;
    border: none;
}
</style>