<template >
  <div id="content">
    <div id="navbar">
      <mdb-navbar color="indigo">
        <span class="navbar-text white-text">Report Page</span>
        <span class="navbar-text white-text" style="margin-left:30%; color:white">
          <router-link to="/${$i18n.locale}/InputForm">Back</router-link>
        </span>
       <span class="navbar-text white-text" style="margin-left:5%; color:blue">
        Download
        </span>
      </mdb-navbar>
    </div>
    <div id="details">
      <b-table :items="items" :fields="fields" striped responsive="sm">
        <template v-slot:cell(show_details)="row">
          <b-button
            size="sm"
            @click="row.toggleDetails"
            class="mr-2"
          >{{ row.detailsShowing ? 'Hide' : 'Show'}} Details</b-button>

          <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
          <b-form-checkbox
            v-model="row.detailsShowing"
            @change="row.toggleDetails"
          >Details via check</b-form-checkbox>
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>First Name:</b>
              </b-col>
              <b-col>{{ row.item.first_name }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>Email Address:</b>
              </b-col>
              <b-col>{{ row.item.email }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>Phone Number:</b>
              </b-col>
              <b-col>{{ row.item.phone }}</b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right">
                <b>Is Active:</b>
              </b-col>
              <b-col>{{ row.item.isActive }}</b-col>
            </b-row>

            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </b-card>
        </template>
      </b-table>
    </div>
    <div>
      <Barchart></Barchart>

      <Piechart></Piechart>
    </div>
  </div>
  
</template>
<script>
import { mdbNavbar } from "mdbvue";
import Barchart from "./Barchart";
import Piechart from "./Piechart";
// import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";

export default {
  name: "Report",
  props: ["total"],
  components: {
    mdbNavbar,
    Barchart,
    Piechart,
  },
  data() {
    return {
      fields: ["first_name", "email", "show_details"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "John Snow",
          email: "Macdonald@gmail.com",
          phone: "9686845085",
        },
      ],
    };
  },
};
</script>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
<style scoped>
#navbar {
  border-radius: 20px;
  background-color: #285085;
}
span {
  font-size: larger;
  font-weight: bold;
  color: white;
}
.navbar-text {
  display: inline-block;
  margin-left: 40%;
}
#content {
  position: relative;
  overflow-y: scroll;
  /* width: 1000px; */
  height: 600px;
}
/* svg > g[class^="raphael-group-"] > text{
    display: none;
} */
</style>