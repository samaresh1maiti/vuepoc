<template>
    <div id="app">
   
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
    caption: "Medal Tally for 2017",
    subcaption: "Olympics vs Paralympics",
    plottooltext: "$label won <b>$dataValue</b> medals in $seriesName",
    theme: "gammel"
  },
  categories: [
    {
      category: [
        {
          label: "USA"
        },
        {
          label: "United Kingdom"
        },
        {
          label: "China"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Olympics",
      data: [
        {
          value: "121"
        },
        {
          value: "67"
        },
        {
          value: "70"
        }
      ]
    },
    {
      seriesname: "Paralympics",
      data: [
        {
          value: "115"
        },
        {
          value: "147"
        },
        {
          value: "239"
        }
      ]
    }
  ]
};
export default {
    name:'barchart',
//      components: {
//     fusioncharts:FCComponent
//   },
  data: () => ({
    type: "mscolumn3d",
    width: "50%",
    height: "50%",

    dataFormat: "json",
    dataSource
  })
}
</script>
<style scoped>

</style>
