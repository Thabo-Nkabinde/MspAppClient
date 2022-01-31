<template>
  <chart :options="options" :style="style" :theme="theme" />
</template>

<script>
export default {
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    titleText: {
      type: String,
      default: "Yearly Amount"
    },
    theme: {
      type: String
    },
    height: {
      type: Number,
      default: 400
    },
    barWidth: {
      type: Number,
      default: 30
    },
    seriesData: {
      type: Object,
      default() {
        return {
          xAxisData: ['Moshal'],
          data: [3500]
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
          show: false,
          top: 80,
          bottom: 40,
          left: 60,
          right: 10
        },
        xAxis: [{
            type: "value",
            splitLine: {
              show: false
            }
          }],
        yAxis: {
          data: this.seriesData.xAxisData,
          },
        series: [
          {
            type: "bar",
            data: this.seriesData.data,
            barWidth: this.barWidth + "%",
            label: {
              normal: {
                show: false,
                // position: "inside",
                // rotate: 90
                position: "top"
              }
            },
            itemStyle: {
              normal: {},
              emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: "rgba(0,0,0,0.8)"
              }
            }
          }
        ],
        title: {
          text: this.titleText,
          x: "center",
          top: "20",
          textStyle: {
            fontSize: 16,
            fontWeight: "normal"
          },
          show: this.showTitle
        },
        //color: ["#2196f3"],
        tooltip: {
          trigger: "item",
          textStyle: {
            fontSize: 12,
            fontWeight: "normal"
          }
        }
      };
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