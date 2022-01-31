<template>
  <div>
    <v-container>
      <v-row>
          <v-col v-for="n in bar" :key="n" cols="14" sm="6" >
            <v-card outlined tile>
              <v-card-title>{{n.fund}}</v-card-title>
                <BarChart :seriesData="n.data"/>
            </v-card>
          </v-col>
          </v-row>  
      
      <v-container>
        <v-card elevation="2" outlined shaped column>
          <div
              class="blue--text px-2 py-1 text-capitalize font-weight-medium"
            >Budget (Year 2022)</div>
             <v-select
          :items="dates"
          label="Select Month"
          outlined
          null
        ></v-select>
          <v-row>
          <v-col v-for="n in budget" :key="n" cols="20" sm="3" >
            <v-card
          outlined
          tile
          >
          <DoughnutChart :titleText="n.name" :seriesData="n.data" />
            </v-card>
          </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import BarChart  from "@/components/Charts/BarChart";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import StackChart from "@/components/Charts/StackChart";
export default {
  components: {
    BarChart,
    DoughnutChart,
    StackChart
  },
  data(){
    return{
      budget: [
        {name:"Living",data: [{value: 15000, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 8785, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Food",data: [{value: 15000, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 32215, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Accomodation",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 0, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Book",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 670, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Transport",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 0, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Stationery",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 7000, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Equipment",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 0, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Data",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 0, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Medical",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 0, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
        {name:"Other",data: [{value: 0, name: "NSFAS", itemStyle: { color: "#BDBDBD" } },{ value: 0, name: "Moshal", itemStyle: { color: "#2779bd" } },]},
      ],
      bar:[
        {fund:"Moshal",data: { xAxisData: ['Overall'], data: [5000,] }},
        {fund: "NSFAS",data: { xAxisData: ['Overall'], data: [5000] }},
      ],
      dates: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov" ,"Dec"]
    }
  }
};
</script>

<style scoped>
.category-budgets {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 180px;
  padding-left: 10px;
}
.category-budgets:hover {
  overflow-x: scroll;
}
.category-budgets-budget {
  width: 180px;
  flex: 0 0 auto;
}
</style>