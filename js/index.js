(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".left1 .career"));
    option = {
        // backgroundColor: '#031d33',
        legend: {
            top: "20",
            x: "center",
            textStyle: {
                fontSize: 16,
                color: "rgba(101, 213, 255, 1)"
            },
            icon:
                "path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z",
            itemWidth: 8, // 设置宽度
            itemHeight: 8, // 设置高度、
            itemGap: 12 // 设置间距
        },
        tooltip: {
            show: true,
            trigger: "axis", //axis , item
            backgroundColor: "RGBA(0, 49, 85, 1)",
            borderColor: "rgba(0, 151, 251, 1)",
            borderWidth: 1,
            borderRadius: 0,
            textStyle: {
                color: "#BCE9FC",
                fontSize: 16,
                align: "left"
            }
        },
        grid: {
            right: "5%",
            top: "20%",
            left: "5%",
            bottom: "5%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            boundaryGap: true,
            data: ["几乎每天", "大部分时间", '偶尔会', '几乎不会', '完全不会'],
            axisLabel: {
                //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                //	margin:15,
                textStyle: {
                    color: "#65D5FF",
                    fontStyle: "normal",
                    fontSize: 12
                }
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false
            },
            axisLine: {
                //坐标轴轴线相关设置
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)"
                }
            },
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: true,
                lineStyle: {
                    color: "rgba(77, 128, 254, 0.2)"
                }
            }
        },
        yAxis: [
            {
                type: "value",
                splitNumber: 3,
                axisLabel: {
                    textStyle: {
                        color: "#65D5FF",
                        fontStyle: "normal",
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(77, 128, 254, 0.2)"
                    }
                }
            }
        ],
        series: [
            {
                // name: '2月',
                type: "pictorialBar",
                barWidth: "60%",
                // stack: "总量",
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: "rgba(48, 236, 166, 1)" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0, 34, 66, 0.4)" // 100% 处的颜色
                                }
                            ],

                        } //渐变颜色
                    }
                },
                symbol:
                    "path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z",

                data: [13, 14, 53, 26, 22]
            }],
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".left2 .career"));
    var colorArray = [
        {
            top: '#ffa800', //黄
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#1ace4a', //绿
            bottom: 'rgba(11,42,84, 0.3)'
        },
        {
            top: '#4bf3ff', //蓝
            bottom: 'rgba(11,42,84,.3)'
        }, {
            top: '#4f9aff', //深蓝
            bottom: 'rgba(11,42,84,.3)'
        },
        {
            top: '#b250ff', //粉
            bottom: 'rgba(11,42,84,.3)'
        }
    ];
    option = {
        // backgroundColor: '#0E2A43',
        tooltip: {
            show: true,
            formatter: "{b}:{c}"
        },
        grid: {
            left: '5%',
            top: '12%',
            right: '1%',
            bottom: '8%',
            containLabel: true
        },

        xAxis: {
            type: 'value',
            show: false,
            position: 'top',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                show: false
            },
        },
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['从未', '不多', '一般', '较多', '经常']
        }

        ],
        series: [{
            name: '能耗值',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                        color: 'white' //color of value
                    }
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: function (params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],

                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [26, 44, 53, 21, 11]
        }

        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".left3 .career"));
    option = {
        // backgroundColor: "#0B1837",
        color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
        // title: {
        //     text: '网络/安全设备',
        //     left: '60',
        //     top: 0,
        //     textAlign: 'center',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 14,
        //         fontWeight: 0
        //     }
        // },
        grid: {
            left: -100,
            top: 50,
            bottom: 10,
            right: 10,
            containLabel: true
        },
        tooltip: {
            trigger: 'item',

        },
        // legend: {
        //     type: "scroll",
        //     orient: "vartical",
        //     // x: "right",
        //     top: "center",
        //     right: "",
        //     // bottom: "0%",
        //     itemWidth: 16,
        //     itemHeight: 8,
        //     itemGap: 16,
        //     textStyle: {
        //         color: '#A3E2F4',
        //         fontSize: 12,
        //         fontWeight: 0
        //     },
        //     data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
        // },
        polar: {},
        angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            z: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B4A6B",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                interval: 0,
                show: true,
                color: "#0B4A6B",
                margin: 8,
                fontSize: 16
            },
        },
        radiusAxis: {
            min: 40,
            max: 120,
            interval: 20,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B3E5E",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                formatter: '{value} %',
                show: false,
                padding: [0, 0, 20, 0],
                color: "#0B3E5E",
                fontSize: 16
            },
            splitLine: {
                lineStyle: {
                    color: "#0B3E5E",
                    width: 2,
                    type: "solid"
                }
            }
        },
        calculable: true,
        series: [{
            type: 'pie',
            radius: ["5%", "10%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#0B4A6B"
                    }
                }
            }]
        }, {
            type: 'pie',
            radius: ["90%", "95%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: "#0B4A6B"
                    }
                }
            }]
        }, {
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel: 10,
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
                    textStyle: {
                        fontSize: 12,
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 19,
                    length2: 15
                },
                emphasis: {
                    show: false
                }
            },
            data: [

                {
                    value: 13,
                    name: '2分'
                },
                {
                    value: 24,
                    name: '4分'
                },
                {
                    value: 65,
                    name: '6分'
                },
                {
                    value: 23,
                    name: '8分'
                }, {
                    value: 28,
                    name: '10分'
                }
            ]
        },]
    }

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".hi4"));
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var XAData = [
        [{ name: '西安' }, { name: '北京', value: 100 }],
        [{ name: '西安' }, { name: '上海', value: 100 }],
        [{ name: '西安' }, { name: '广州', value: 100 }],
        [{ name: '西安' }, { name: '西宁', value: 100 }],
        [{ name: '西安' }, { name: '银川', value: 100 }]
    ];

    var XNData = [
        [{ name: '西宁' }, { name: '北京', value: 100 }],
        [{ name: '西宁' }, { name: '上海', value: 100 }],
        [{ name: '西宁' }, { name: '广州', value: 100 }],
        [{ name: '西宁' }, { name: '西安', value: 100 }],
        [{ name: '西宁' }, { name: '银川', value: 100 }]
    ];

    var YCData = [
        [{ name: '银川' }, { name: '北京', value: 100 }],
        [{ name: '银川' }, { name: '广州', value: 100 }],
        [{ name: '银川' }, { name: '上海', value: 100 }],
        [{ name: '银川' }, { name: '西安', value: 100 }],
        [{ name: '银川' }, { name: '西宁', value: 100 }],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {

            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
    var series = [];
    [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: 'red',   //arrow箭头的颜色
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
            {
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top3',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i],
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    var option = {
        // backgroundColor: '#000',
        // title: {
        //     text: '模拟航线',
        //     subtext: '数据纯属虚构',
        //     left: 'center',
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return params.data.fromName + ">" + params.data.toName + "<br />" + params.data.value;
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(0, 24, 110,.5)',
                    borderColor: '#195BB9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: 'rgba(43, 145, 183,.4)'
                }
            }
        },
        series: series
    };

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".right1 .career"));
    const res = [{
        "label": "男",
        "value": 75
    },
    {
        "label": "女",
        "value": 82
    }
    ]

    const border =
        'data:image/png;base64,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';
    const man =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAABpFBMVEUAAAAA//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A///ZqXRjAAAAi3RSTlMAAQIDBAYICQoMDQ4RExQWGBkaGxweHyAmJyksLTU4OTo7PD5AQkZHTk9QUVJTVFVYWVpgZGhqa21ucXJzdHZ5fX+AgYKDhoeIi5CRk5WWmZqbn6ChoqOlpqeoqaqsrrW2t7i5uru8vcPFx8jQ0tTX293e4OHi4+Tl5+jr7e7v8PHy8/T2+fr7/P3+d8xxFQAAAmtJREFUaN7t2vlb0zAYB/AAm1zeyKGIByKiQ9zwxgMRhifMCYooh4qgzrMw2awKKhZs80+7jbqkkGzpm/mDz/N+f1rfJZ9nT9ulTVNCiqfu0nTSspJPL9eRUmTnyBp1s/Zgt753/BvlshzS9c7a1BP7nJ53coOXEbt0vPoluinfGzTAJ1SQCbi31xaB9j4weJMKcwsMvhODH6BetS0GnRog2Ewl2Q8ED8vAQ0CwRQa2AMFdMnAP9Kh8EXtLZVBwQgxOgc/DTjF4CgwGDJE3H4D/mbtEoNb4NbbZG9MaYCtfbfQSVXpDdvW013tWq3tRKe/5wbifV8pLcB3dfv3jOmf07wBdRyIDsdH4bZZYLPZ8cXU1NZP5cIeV46P3Brrri2ll4YRDfcR5Eym4ExpeU99JNMq9ps8UELNZ5m01KCjJbRJwhALzUDJA21DQOSgE71Na2p9owMGUELRYA2u2qG7Mcu0dIcifCaSvGNhHTG4LQQQRRBBBBBFEEEG/4C/2/aIKuMDd/gnBt6zBSxXwBdt4LwSjrEGPCniBbdwQPxtdzu/CWhWwJp2fU0qepHb+dvdIO1EBSZt7U2xHZDOfjtxMauEoUQNJW+64mCcKTODDg9FQkKiCJBiKDobVpvhqoI/8Y3AlnclKCcHhbGkYQQQRRBBBBBFEEMH/Brzm6T2ULd3VAs97ekezpX5P6aJP8ICnd+79iw5PqdXvYtk8v1ybu9Gv/MqVPlX4Xes6zfXuXS9d5Upn/K+ePc53nnNXVwNz+dIkYDmuYshdPxvf8rdU5b6Z4cSDoBXC1kcpy5w6xpfaJ00rPX6kQKc/RsXweS7aQLIAAAAASUVORK5CYII=';
    const woman =
        'data:image/png;base64,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';
    const color = ['#00FFFF', 'rgba(196,36,255,1)'];
    const data = [];
    for (let i = 0; i < res.length; i++) {
        data.push({
            value: res[i].value,
            name: res[i].label,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: color[i],
                    // shadowColor: color[i]
                }
            }
        }, {
            value: res[0].value / 10,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        });
    }
    option = {
        // backgroundColor: '#030c3b',
        color,
        graphic: {
            elements: [{
                type: 'image',
                z: 3,
                style: {
                    image: border,
                    width: 300,
                    height: 300
                },
                left: 'center',
                top: 'center',
                position: [100, 100]
            },
            {
                type: 'image',
                z: 3,
                style: {
                    image: man,
                    width: 85,
                    height: 120
                },
                left: '22%',
                top: 'center'
            },
            {
                type: 'image',
                z: 3,
                style: {
                    image: woman,
                    width: 85,
                    height: 120
                },
                right: '22%',
                top: 'center'
            }
            ]
        },
        tooltip: {
            show: false
        },
        series: [{
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [105, 115],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        fontSize: 15,
                        formatter(params) {
                            return params.name ?
                                params.name + '\n' + params.value + '人' :
                                '';
                        }
                    },
                    labelLine: {
                        width: 4,
                        length: 5,
                        length2: 5,
                        show: true,
                        color: '#00ffff'
                    }
                }
            },
            data
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".right2 .career"));
    // 2. 指定配置项和数据
    myChart.on('click', function (params) {
        console.log(params.name);
        // window.open(params.data.url);
        // window.open('video,' + encodeURIComponent(params.value));
    });

    var colorList = [[
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
        '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
        '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
        '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
        '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];

    option = {
        // 图表标题
        // title: {
        //     show: true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        //     text: '"新时代"主题图谱',//主标题文本，'\n'指定换行
        //     x: 'center',        // 水平安放位置，默认为左对齐，可选为：
        //     // 'center' ¦ 'left' ¦ 'right'
        //     // ¦ {number}（x坐标，单位px）
        //     y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
        //     // 'top' ¦ 'bottom' ¦ 'center'
        //     // ¦ {number}（y坐标，单位px）
        //     //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        //     // backgroundColor: 'rgba(0,0,0,0)',
        //     // borderColor: '#ccc',    // 标题边框颜色
        //     borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
        //     padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
        //     // 接受数组分别设定上右下左边距，同css
        //     itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
        //     textStyle: {
        //         fontSize: 18,
        //         fontWeight: 'bolder',
        //         color: '#333'        // 主标题文字颜色
        //     },
        //     subtextStyle: {
        //         color: '#aaa'        // 副标题文字颜色
        //     }
        // },
        // backgroundColor: '#fff',
        tooltip: {},
        animationDurationUpdate: function (idx) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 500,
                edgeLength: 10
            },
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: [{
                "name": "自卑",
                // "value": 2373,
                "symbolSize": 145,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[0],
                        "color": colorList[0]
                    }
                }
            }, {
                "name": "尴尬",
                // "value": 10777000,
                "symbolSize": 130,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[17],
                        "color": colorList[17]
                    }
                }
            },
            {
                "name": "嘲笑",
                // "value": 8694000,
                "symbolSize": 123,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[12],
                        "color": colorList[12]
                    }
                }
            }, {
                "name": "缺陷",
                // "value": 2289,
                "symbolSize": 67,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[2],
                        "color": colorList[3]
                    }
                }
            }, {
                "name": "自闭",
                // "value": 27000,
                "symbolSize": 90,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[16],
                        "color": colorList[16]
                    }
                }
            }, {
                "name": "痛苦",
                // "value": 5449,
                "symbolSize": 110,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[1],
                        "color": colorList[1]
                    }
                }
            }, {
                "name": "焦虑",
                // "value": 2289,
                "symbolSize": 67,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[2],
                        "color": colorList[2]
                    }
                }
            }, {
                "name": "抑郁",
                // "value": 92000,
                "symbolSize": 123,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[18],
                        "color": colorList[18]
                    }
                }
            }, {
                "name": "抱怨",
                // "value": 20000,
                "symbolSize": 141,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        // "shadowColor": colorList[19],
                        "color": colorList[19]
                    }
                },
                // "url": "video/"
            }, {
                name: '难过',
                // value: 2058124,
                symbolSize: 143,
                draggable: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        // shadowColor: colorList[1], 
                        color: colorList[1]
                    }
                },
            },
            {
                name: '摆脱',
                // value: 1751491,
                symbolSize: 132,
                draggable: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        // shadowColor: colorList[2], 
                        color: colorList[2]
                    }
                },
            },
            {
                name: '烦躁',
                // value: 1642587,
                symbolSize: 66,
                draggable: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        // shadowColor: colorList[3], 
                        color: colorList[17]
                    }
                },
            },
            {
                name: '折磨',
                // value: 1524287,
                symbolSize: 123,
                draggable: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        // shadowColor: colorList[4], 
                        color: colorList[4]
                    }
                },
            },
            ]
        }]
    }
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".right3 .career"));
    var scaleData = [
        {
            name: '商家贩卖焦虑',
            value: 48,
        },
        {
            name: '自身追求完美',
            value: 109,
        },
        {
            name: '美颜app的出现',
            value: 27,
        },
        {
            name: '周围人的评价',
            value: 99,
        },
        {
            name: '嫉妒心理',
            value: 38,
        },
        {
            name: '其他',
            value: 19,
        },
    ];
    // 随机颜色
    var rich = {
        white: {
            color: '#ddd',
            align: 'center',
            padding: [3, 0],
        },
    };
    var placeHolderStyle = {
        normal: {
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            color: 'rgba(0, 0, 0, 0)',
            // borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
        },
    };
    function bg2() {
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    }

    function rancolors(len) {
        var color = [];
        for (var i = 0; i <= len; i++) {
            var sjys = bg2();
            color.push(sjys);
            for (var i = 0; i < color.length; i++) {
                if ((color[i] = sjys)) {
                    color[i] = bg2();
                }
            }
        }
        return color;
    }
    var data = [];
    var color = rancolors(7);
    for (var i = 0; i < scaleData.length; i++) {
        data.push(
            {
                value: scaleData[i].value,
                name: scaleData[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 50,
                        shadowBlur: 100,
                        borderColor: color[i],
                        // shadowColor: color[i],
                    },
                },
            },
            {
                value: 50,
                name: '',
                itemStyle: placeHolderStyle,
            }
        );
    }
    var seriesObj = [
        {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [40, 80],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#ddd',
                        formatter: function (params) {
                            var percent = 0;
                            var total = 0;
                            for (var i = 0; i < scaleData.length; i++) {
                                total += scaleData[i].value;
                            }
                            percent = ((params.value / total) * 100).toFixed(0);
                            if (params.name !== '') {
                                return params.name + '\n{white|' + '' + percent + '%}';
                            } else {
                                return '';
                            }
                        },
                        rich: rich,
                    },
                    labelLine: {
                        length: 10,
                        length2: 11,
                        show: true,
                        color: '#00ffff',
                    },
                },
            },
            data: data,
        },
    ];
    option = {
        // backgroundColor: '#04243E',

        tooltip: {
            show: false,
        },
        legend: {
            show: false,
        },
        toolbox: {
            show: false,
        },
        series: seriesObj,
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();






