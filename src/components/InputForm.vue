<template>
  <div>
    <div id="navbar">
      <mdb-navbar color="indigo">
        <span class="navbar-text white-text" style="margin-left:40%">Input Form Page</span>
        <span class="navbar-text white-text" style="margin-left:40%; color:white">
          <router-link to="/">Back</router-link>
        </span>
      </mdb-navbar>
    </div>
    <b-card>
      <form style="padding-top:10px">
        <b-row>
          <b-col>
            <b-row class="form-group">
              <label class="col-md-4 col-form-label form-control-label">{{ $t('firstInput') }}:</label>
              <b-col md="3">
                <b-form-input
                  v-model="form.sale_quantity"
                  class="form-control"
                  name="sale_quantity"
                  id="firstInput"
                  placeholder="0"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <label class="col-md-4 col-form-label form-control-label">Second Input</label>
              <b-col md="3">
                <b-form-input
                  v-model="form.sale_rate"
                  step="any"
                  class="form-control"
                  name="sale_rate"
                  id="sale_rate"
                  placeholder="0"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <label class="col-md-4 col-form-label form-control-label">Third Input</label>
              <b-col md="3">
                <b-form-input
                  v-model="form.sale_quantity1"
                  class="form-control"
                  name="sale_quantity1"
                  id="sale_quantity1"
                  placeholder="0"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-col>
          <b-col>
            <b-row class="form-group">
              <label class="col-md-4 col-form-label form-control-label">First Input1</label>
              <b-col md="3">
                <b-form-input
                  v-model="form.first"
                  class="form-control"
                  name="first"
                  id="firstInput"
                  placeholder="0"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <label class="col-md-4 col-form-label form-control-label">First Input2</label>
              <b-col md="3">
                <b-form-input
                  v-model="form.second"
                  class="form-control"
                  name="second"
                  id="second"
                  placeholder="0"
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <label class="col-md-4 col-form-label form-control-label">First Input3</label>
              <b-col md="3">
                <b-form-input
                  v-model="form.third"
                  class="form-control"
                  name="third"
                  id="third"
                  placeholder="0"
                ></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </form>
    </b-card>
    <b-card>
      <b-row class="form-group">
        <label class="col-md-4 col-form-label form-control-label">First Column output</label>
        <b-col md="3">
          <b-form-input
            :value="total"
            step="any"
            class="form-control"
            name="sale_total"
            id="sale_total"
            placeholder="First calc"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="form-group">
        <label class="col-md-4 col-form-label form-control-label">Second Column output</label>
        <b-col md="3">
          <b-form-input
            :value="total1"
            step="any"
            class="form-control"
            name="sale_total1"
            id="sale_total1"
            placeholder="Second calc"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-card>

    <div>
      <b-row>
        <b-col>
          <router-link to="/${$i18n.locale}/Report">
            <b-button id="tooltip-button-variant" pill variant="primary">Next</b-button>
            <b-tooltip
              target="tooltip-button-variant"
              triggers="hover"
              variant="secondary"
            >Go to the page for report</b-tooltip>
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
  components: {
    mdbNavbar,
  },
  data() {
    return {
      form: {
        sale_quantity: 0,
        sale_quantity1: 0,
        sale_rate: 0,
        sale_total: 0,
        sale_total1: 0,
        first: 0,
        second: 0,
        third: 0,
      },
    };
  },
  computed: {
    total: function () {
      // let calc = this.form.sale_quantity * this.form.sale_rate;
      // let calculatedTotal = calc - this.form.sale_quantity1;
      // this.sale_total = calculatedTotal;

      return this.form.sale_quantity * this.form.sale_rate-this.form.sale_quantity1;
    },
    total1: function () {
      // let calc = this.form.first * this.form.second;
      // let calculatedTotal = calc - this.form.third;
      // this.sale_total1 = calculatedTotal;

      return this.form.first * this.form.second - this.form.third;
    },
  },
  watch: {
    total: {
      handler: function (value) {
        this.$emit("input", value);
      },
      immediate: true,
    },
  },
};
</script>
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
#back {
  margin-left: 70%;
  color: white;
  padding: 10px;
}
b-card {
  padding-top: 20px;
}
</style>