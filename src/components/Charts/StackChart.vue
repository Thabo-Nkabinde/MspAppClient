<template>
  <chart :options="options" :style="style" :theme="theme" />
</template>

<script>

export default {
  props: {
    theme: {
      type: String
    },
    height: {
      type: Number,
      default: 100
    },
    seriesData: {
      type: Object,
      default() {
        return {
          xAxisData: ["Jan","Feb"],
          legendData: [],
          data: [320,550,900,555,222,33,44,889]
        };
      }
    }
  },
  computed: {
    options() {
      return {
        backgroundColor: this.$vuetify.theme.dark ? "#424242" : "",
        textStyle: {
          fontFamily: "Nunito"
        },
        grid: {
          top: 60,
          bottom: 40,
          left: 60,
          right: 10
        },
        xAxis: {
          type: "category",
          data:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: true
          }
        },
        series: 
           [{
             name: "General",
             itemStyle: { color: "green" },
             data: [320, 302, 301, 334, 390, 330, 320]
           }],
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 12,
            fontWeight: "normal"
          },
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["General", "Travel", "Shopping", "Utilities", "Misc"]
        }
      };
    }
  },
  methods: {
    getSeries() {
      let yy =
        this.seriesData.data &&
        this.seriesData.data.map(x => {
          return {
            name: x.name,
            type: "bar",
            stack: "stack",
            barWidth: "45%",
            label: {
              normal: {
                show: show
              }
            },
            itemStyle: { color: x.color },
            data: x.data
          };
        });
      return yy;
    }
  },
  data() {
    return {
      style: {
        height: this.height + "%",
        width: "100%"
      }
    };
  }
};
</script>

<style>
</style>