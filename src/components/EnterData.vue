<template >
  <div style="padding-left:5%">
    <div id="navbar">
      <mdb-navbar color="indigo">
        <span class="navbar-text white-text">Customer Details Page</span>
        <!-- <div>
      
      <router-link to="/report">Report</router-link> |
      <router-link to="/setting">Setting</router-link> |
        </div>-->
      </mdb-navbar>
    </div>
    <div id="form">
      <form>
        <b-row class="form-group">
          <label class="col-md-2 col-form-label form-control-label">{{ $t('name') }}:</label>
          <b-col md="10">
            <b-form-input
              v-b-tooltip.click="'Enter usename!'"
              variant="outline-success"
              id="message"
              placeholder="Jon Snow"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-email-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('email') }}:</label>
          <b-col md="10">
            <b-form-input
              type="email"
              autocomplete="username email"
              placeholder="argon@example.com"
              id="example-email-input"
            />
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-tel-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('phone') }}:</label>
          <b-col md="10">
            <b-form-input type="tel" placeholder="40-(770)-888-444" id="example-tel-input" />
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-number-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('number') }}:</label>
          <b-col md="10">
            <b-form-input type="number" placeholder="23" id="example-number-input" />
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-datetime-local-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('datetime') }}:</label>
          <b-col md="10">
            <b-form-input
              type="datetime-local"
              value="2018-11-23T10:30:00"
              id="example-datetime-local-input"
            />
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-date-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('date') }}:</label>
          <b-col md="10">
            <b-form-input type="date" value="2018-11-23" id="example-date-input" />
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-month-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('month') }}:</label>
          <b-col md="10">
            <b-form-input type="month" value="2018-11" id="example-month-input" />
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-week-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('week') }}:</label>
          <b-col md="10">
            <b-form-input type="week" value="2018-W23" id="example-week-input" />
          </b-col>
        </b-row>
        <b-row class="form-group">
          <label
            for="example-time-input"
            class="col-md-2 col-form-label form-control-label"
          >{{ $t('time') }}:</label>
          <b-col md="10">
            <b-form-input type="time" value="10:30:00" id="example-time-input" />
          </b-col>
        </b-row>
        <!-- <b-row class="form-group">
    <label for="example-color-input" class="col-md-2 col-form-label form-control-label">Color</label>
    <b-col md="10">
      <b-form-input type="color" value="#5e72e4" id="example-color-input"/>
    </b-col>
        </b-row>-->
      </form>
    </div>
    <div>
      <b-row>
        <b-col>
          <router-link to="/${$i18n.locale}/InputForm">
            <b-button id="tooltip-button-variant" pill variant="primary">Next</b-button>
            <b-tooltip
              target="tooltip-button-variant"
              triggers="hover"
              variant="secondary"
            >Go to the page for calculation</b-tooltip>
          </router-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { mdbNavbar } from "mdbvue";

export default {
  name: "InputForm",
  // props:
  //   ['name']
  // ,
  components: {
    mdbNavbar,
  },
};
</script>
<style scoped>
label {
  /* padding-right: 200px; */
  text-align: right;
  /* font-style: italic; */
  font-weight: bold;
  color: #285085;
  font-size: 16px;
}
#form {
  padding-left: 15px;
  padding-right: 20px;
  padding-top: 10px !important;
  position: relative;
  overflow-y: scroll;
  /* width: 1000px; */
  height: 500px;
}
b-form-input {
  border: 2px solid black;
}
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
</style>