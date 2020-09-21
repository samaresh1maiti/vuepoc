<template>
    <div>
        <fusioncharts
  :type="type"
  :width="width"
  :height="height"
  :dataFormat="dataFormat"
  :dataSource="dataSource"
></fusioncharts>

    </div>
</template>
<script>
import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts);

const dataSource = {
  chart: {
    caption: "Recommended Portfolio Split",
    subcaption: "For a net-worth of $1M",
    showvalues: "1",
    showpercentintooltip: "0",
    numberprefix: "$",
    enablemultislicing: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Equity",
      value: "300000"
    },
    {
      label: "Debt",
      value: "230000"
    },
    {
      label: "Bullion",
      value: "180000"
    }
  ]
};

export default {
//   components: {
//     fusioncharts: FCComponent
//   },
  data: () => ({
    type: "pie3d",
    width: "40%",
    height: "40%",
    dataFormat: "json",
    dataSource
  })
};

</script>
<style scoped>

</style>