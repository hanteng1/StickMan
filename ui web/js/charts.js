var Charts = function () {

    return {
        initCharts: function () {

            if (!jQuery.plot) {
                return;
            }

            var data = [];
            var maximum = 31;  //0-60 by every 3 secs
            function getRandomData() {
                if (data.length) {
					data = data.slice(1);
				}
				while (data.length < maximum) {
					var previous = data.length ? data[data.length - 1] : 50;
					var y = previous + Math.random() * 10 - 5;
					data.push(y < 0 ? 0 : y > 100 ? 100 : y);
				}
				// zip the generated y values with the x values
				var res = [];
				for (var i = 0; i < data.length; ++i) {
					res.push([i, data[i]])
				}
				return res;
            }


			/* Basic Chart */
            function chart1() {
                var d1 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.25)
                    d1.push([i, Math.sin(i)]);

                var d2 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.25)
                    d2.push([i, Math.cos(i)]);

                var d3 = [];
                for (var i = 0; i < Math.PI * 2; i += 0.1)
                    d3.push([i, Math.tan(i)]);

                $.plot($("#chart_1"), [{
                            label: "sin(x)",
                            data: d1
                        }, {
                            label: "cos(x)",
                            data: d2
                        }, {
                            label: "tan(x)",
                            data: d3
                        }
                    ], {
                        series: {
                            lines: {
                                show: true
                            },
                            points: {
                                show: true
                            }
                        },
                        xaxis: {
                            ticks: [0, [Math.PI / 2, "\u03c0/2"],
                                [Math.PI, "\u03c0"],
                                [Math.PI * 3 / 2, "3\u03c0/2"],
                                [Math.PI * 2, "2\u03c0"]
                            ]
                        },
                        yaxis: {
                            ticks: 10,
                            min: -2,
                            max: 2
                        },
                        grid: {
							borderWidth: 0
                        },
					colors: ["#70AFC4", "#D9534F", "#A8BC7B", "#F0AD4E"]
                    });

            }

            /* Auto updating Chart */
            function chart4() {
                var options = {
                    series: {
                        shadowSize: 1
                    },
                    lines: {
                        show: true,
                        lineWidth: 1.5,
                    },
                    yaxis: {
                        min: 0,
                        max: 100,
                        tickFormatter: function (v) {
                            return v + "%";
                        }
                    },
                    xaxis: {
                        show: false
                    },
                    colors: ["#D9534F"],
                    grid: {
                        tickColor: "#a8a3a3",
                        borderWidth: 0
                    }
                };

                var updateInterval = 30;
                var plot = $.plot($("#chart_4"), [getRandomData()], options);

                function update() {
                    plot.setData([getRandomData()]);
                    plot.draw();
                    setTimeout(update, updateInterval);
                }
                update();
            }

            /* Interactive Chart */
            function chart2() {

                //chart2_data_machine_channel, 6 maximum
                var chart2_data_1_1 = [];  //1
                var chart2_data_1_2 = [];  //2
                var chart2_data_1_3 = [];  //3
                var chart2_data_1_4 = [];  //4
                var chart2_data_1_5 = [];  //5
                var chart2_data_1_6 = [];  //6
                var chart2_data_2_1 = [];  //7
                var chart2_data_2_2 = [];  //8
                var chart2_data_2_3 = [];  //9
                var chart2_data_2_4 = [];  //10
                var chart2_data_2_5 = [];  //11
                var chart2_data_2_6 = [];  //12
                var chart2_data_3_1 = [];  //13
                var chart2_data_3_2 = [];  //14
                var chart2_data_3_3 = [];  //15
                var chart2_data_3_4 = [];  //16
                var chart2_data_3_5 = [];  //17
                var chart2_data_3_6 = [];  //18
                var chart2_data_4_1 = [];  //19
                var chart2_data_4_2 = [];  //20
                var chart2_data_4_3 = [];  //21
                var chart2_data_4_4 = [];  //22
                var chart2_data_4_5 = [];  //23
                var chart2_data_4_6 = [];  //24
                var chart2_data_5_1 = [];  //25
                var chart2_data_5_2 = [];  //26
                var chart2_data_5_3 = [];  //27
                var chart2_data_5_4 = [];  //28
                var chart2_data_5_5 = [];  //29
                var chart2_data_5_6 = [];  //30
                var chart2_data_6_1 = [];  //31
                var chart2_data_6_2 = [];  //32
                var chart2_data_6_3 = [];  //33
                var chart2_data_6_4 = [];  //34
                var chart2_data_6_5 = [];  //35
                var chart2_data_6_6 = [];  //36

                var chart2_data_default = [
                    [30, 220],
                    [29.99, 0],
                    [29, 0],
                    [28, 0],
                    [27, 0],
                    [26, 0],
                    [25, 0],
                    [24, 0],
                    [23, 0],
                    [22, 0],
                    [21, 0],
                    [20, 0],
                    [19, 0],
                    [18, 0],
                    [17, 0],
                    [16, 0],
                    [15, 0],
                    [14, 0],
                    [13, 0],
                    [12, 0],
                    [11, 0],
                    [10, 0],
                    [9, 0],
                    [8, 0],
                    [7, 0],
                    [6, 0],
                    [5, 0],
                    [4, 0],
                    [3, 0],
                    [2, 0],
                    [1, 0]
                ];

                var data_collections = [chart2_data_default,
                                        chart2_data_1_1, chart2_data_1_2, chart2_data_1_3, chart2_data_1_4, chart2_data_1_5, chart2_data_1_6,
                                        chart2_data_2_1, chart2_data_2_2, chart2_data_2_3, chart2_data_2_4, chart2_data_2_5, chart2_data_2_6,
                                        chart2_data_3_1, chart2_data_3_2, chart2_data_3_3, chart2_data_3_4, chart2_data_3_5, chart2_data_3_6,
                                        chart2_data_4_1, chart2_data_4_2, chart2_data_4_3, chart2_data_4_4, chart2_data_4_5, chart2_data_4_6,
                                        chart2_data_5_1, chart2_data_5_2, chart2_data_5_3, chart2_data_5_4, chart2_data_5_5, chart2_data_5_6,
                                        chart2_data_6_1, chart2_data_6_2, chart2_data_6_3, chart2_data_6_4, chart2_data_6_5, chart2_data_6_6];
                
                var data_colors = [
                                    "#eeeeee",
                                    "#737CA1", "#2B3856", "#000080", "#2554C7", "#6960EC", "#3090C7",  //blue
                                    "#617C58", "#667C26", "#306754", "#437C17", "#4E9258", "#3EA055", //green
                                    "#F3E5AB", "#FFD801", "#F2BB66", "#FBB117", "#E2A76F", "#E8A317",  //yellow
                                    "#CD7F32", "#C58917", "#AF7817", "#966F33", "#806517", "#827839",  //orange
                                    "#C36241", "#C35817", "#CC6600", "#E66C2C", "#F87431", "#FF8040",  //red
                                    "#810541", "#7E354D", "#7F4E52", "#7F5A58", "#C5908E", "#E8ADAA"   //purple
                                    ]; 

                var online_equipments = [0, 0, 0, 0, 0, 0];
                var online_channels = [0, 0, 0, 0, 0, 0];

                

                var data_plot = [chart2_data_default];

                var plot = $.plot($("#chart_2_1"), data_plot, {
                        series: {
                            lines: {
                                show: true,
                                lineWidth: 2,
                                fill: false
                            },
                            points: {
                                show: false
                            },
                            shadowSize: 2
                        },
                        grid: {
                            hoverable: true,
                            clickable: true,
                            tickColor: "#eee",
                            borderWidth: 0
                        },
                        colors: data_colors,
                        xaxis: {
                            ticks: 11,
                            tickDecimals: 0
                        },
                        yaxis: {
                            ticks: 11,
                            tickDecimals: 0
                        }
                    });


                function showTooltip(x, y, contents) {
                    $('<div id="tooltip">' + contents + '</div>').css({
                            position: 'absolute',
                            display: 'none',
                            top: y + 5,
                            left: x + 15,
                            border: '1px solid #333',
                            padding: '4px',
                            color: '#fff',
                            'border-radius': '3px',
                            'background-color': '#333',
                            opacity: 0.80
                        }).appendTo("body").fadeIn(200);
                }

                var previousPoint = null;
                $("#chart_2").bind("plothover", function (event, pos, item) {
                    $("#x").text(pos.x.toFixed(2));
                    $("#y").text(pos.y.toFixed(2));

                    if (item) {
                        if (previousPoint != item.dataIndex) {
                            previousPoint = item.dataIndex;

                            $("#tooltip").remove();
                            var x = item.datapoint[0].toFixed(2),
                                y = item.datapoint[1].toFixed(2);

                            showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                        }
                    } else {
                        $("#tooltip").remove();
                        previousPoint = null;
                    }
                });


                jQuery('.label-ep').click(function(){
                    var etitle = jQuery(this).children(".title");
                    etitle.toggleClass("open"); 
                    var emark = jQuery(this).children(".color-mark");
                    emark.toggleClass("open");

                    var curEquipmentIndex = 0;
                    //calculte which equipment label is it
                    if(jQuery(this).hasClass("le1"))
                    {
                        curEquipmentIndex = 1;
                    }else if(jQuery(this).hasClass("le2"))
                    {
                        curEquipmentIndex = 2;
                    }else if(jQuery(this).hasClass("le3"))
                    {
                        curEquipmentIndex = 3;
                    }else if(jQuery(this).hasClass("le4"))
                    {
                        curEquipmentIndex = 4;
                    }else if(jQuery(this).hasClass("le5"))
                    {
                        curEquipmentIndex = 5;
                    }else if(jQuery(this).hasClass("le6"))
                    {
                        curEquipmentIndex = 6;
                    }

                    if(emark.hasClass("open"))
                    {
                        //toggle on
                        online_equipments[curEquipmentIndex-1] = 1;
                    }else
                    {
                        //toggle off
                        online_equipments[curEquipmentIndex-1] = 0;
                    }
                    
                 });

                jQuery('.label-cm').click(function(){
                    var etitle = jQuery(this).children(".title");
                    etitle.toggleClass("open"); 
                    var emark = jQuery(this).children(".color-mark");
                    emark.toggleClass("open");

                    var curChannelIndex = 0;
                    //calculte which equipment label is it
                    if(jQuery(this).hasClass("lc1"))
                    {
                        curChannelIndex = 1;
                    }else if(jQuery(this).hasClass("lc2"))
                    {
                        curChannelIndex = 2;
                    }else if(jQuery(this).hasClass("lc3"))
                    {
                        curChannelIndex = 3;
                    }else if(jQuery(this).hasClass("lc4"))
                    {
                        curChannelIndex = 4;
                    }else if(jQuery(this).hasClass("lc5"))
                    {
                        curChannelIndex = 5;
                    }else if(jQuery(this).hasClass("lc6"))
                    {
                        curChannelIndex = 6;
                    }

                    if(emark.hasClass("open"))
                    {
                        //toggle on
                        online_channels[curChannelIndex-1] = 1;
                    }else
                    {
                        //toggle off
                        online_channels[curChannelIndex-1] = 0;
                    }
                });  

                var updateInterval = 3000;
                //real time update
                function update() {
                    getRandomDataForTest(data_collections, online_equipments, online_channels);
                    plot.setData(data_collections);
                    plot.draw();
                    setTimeout(update, updateInterval);
                }
                update();
            }

            function getRandomDataForTest(pDataCollection, equips, channels) {
                for(itre = 0; itre < 6; itre++) 
                {
                    if(equips[itre] == 1)
                    {
                        for(itrc =0; itrc < 6; itrc++)
                        {
                            if(channels[itrc] == 1) {
                                getRandomDataWithObject(pDataCollection[6 * itre + itrc + 1]);
                            }
                        }
                    }
                }  
            }

            function getRandomDataWithObject(pData) {

                var previous = pData.length ? pData[pData.length -1][1] : 140;
                var y = previous + Math.random() * 100 - 50;
                var rand = y < 0 ? 0 : y > 240 ? 240 : y
                
                pData.push([pData.length + 1, rand]); //30 

                if (pData.length == maximum) {
                    //shift
                    for(var itrp = 0; itrp < pData.length; itrp++){
                      pData[itrp][0] = pData[itrp][0] - 1;
                    }
                    //pData = pData.slice(1);
                    pData.shift();
                }
            }
                

            /* Interactive Chart Backup*/
            function chart2_backup() {
                var chart2_data1 = [
                    [30, 10],
                    [29, 24],
                    [28, 38],
                    [27, 32],
                    [26, 31],
                    [25, 25],
                    [24, 35],
                    [23, 46],
                    [22, 36],
                    [21, 48],
                    [20, 38],
                    [19, 60],
                    [18, 63],
                    [17, 72],
                    [16, 58],
                    [15, 65],
                    [14, 50],
                    [13, 32],
                    [12, 40],
                    [11, 35],
                    [10, 30],
                    [9, 35],
                    [8, 50],
                    [7, 53],
                    [6, 42],
                    [5, 34],
                    [4, 22],
                    [3, 15],
                    [2, 20],
                    [1, 5]
                ];
                var chart2_data2 = [
                    [1, 0],
                    [2, 14],
                    [3, 28],
                    [4, 22],
                    [5, 21],
                    [6, 15],
                    [7, 25],
                    [8, 36],
                    [9, 26],
                    [10, 38],
                    [11, 28],
                    [12, 50],
                    [13, 53],
                    [14, 62],
                    [15, 48],
                    [16, 55],
                    [17, 40],
                    [18, 22],
                    [19, 30],
                    [20, 25],
                    [21, 20],
                    [22, 15],
                    [23, 40],
                    [24, 43],
                    [25, 32],
                    [26, 24],
                    [27, 12],
                    [28, 5],
                    [29, 19],
                    [30, 27]
                ];
                var chart2_data3 = [
                    [1, 2],
                    [2, 33],
                    [3, 45],
                    [4, 33],
                    [5, 23],
                    [6, 65],
                    [7, 56],
                    [8, 65],
                    [9, 44],
                    [10, 44],
                    [11, 77],
                    [12, 34],
                    [13, 74],
                    [14, 45],
                    [15, 34],
                    [16, 46],
                    [17, 75],
                    [18, 45],
                    [19, 33],
                    [20, 54],
                    [21, 54],
                    [22, 24],
                    [23, 75],
                    [24, 34],
                    [25, 54],
                    [26, 44],
                    [27, 77],
                    [28, 45],
                    [29, 77],
                    [30, 33]
                ];

                var plot = $.plot($("#chart_2"), [{
                            data: chart2_data1,
                            label: "È¢ëÁéáÂÄº"
                        }, {
                            data: chart2_data2,
                            label: "È¢ëÁéáÂÄº"
                        }, {
                            data: chart2_data3,
                            label: "È¢ëÁéáÂÄº"
                        }
                    ], {
                        series: {
                            lines: {
                                show: true,
                                lineWidth: 2,
                                fill: true,
                                fillColor: {
                                    colors: [{
                                            opacity: 0.05
                                        }, {
                                            opacity: 0.01
                                        }
                                    ]
                                }
                            },
                            points: {
                                show: true
                            },
                            shadowSize: 2
                        },
                        grid: {
                            hoverable: true,
                            clickable: true,
                            tickColor: "#eee",
                            borderWidth: 0
                        },
                        colors: ["#DB5E8C", "#F0AD4E", "#5E87B0"],
                        xaxis: {
                            ticks: 11,
                            tickDecimals: 0
                        },
                        yaxis: {
                            ticks: 11,
                            tickDecimals: 0
                        }
                    });


                function showTooltip(x, y, contents) {
                    $('<div id="tooltip">' + contents + '</div>').css({
                            position: 'absolute',
                            display: 'none',
                            top: y + 5,
                            left: x + 15,
                            border: '1px solid #333',
                            padding: '4px',
                            color: '#fff',
                            'border-radius': '3px',
                            'background-color': '#333',
                            opacity: 0.80
                        }).appendTo("body").fadeIn(200);
                }

                var previousPoint = null;
                $("#chart_2").bind("plothover", function (event, pos, item) {
                    $("#x").text(pos.x.toFixed(2));
                    $("#y").text(pos.y.toFixed(2));

                    if (item) {
                        if (previousPoint != item.dataIndex) {
                            previousPoint = item.dataIndex;

                            $("#tooltip").remove();
                            var x = item.datapoint[0].toFixed(2),
                                y = item.datapoint[1].toFixed(2);

                            showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                        }
                    } else {
                        $("#tooltip").remove();
                        previousPoint = null;
                    }
                });
            }

            /* Tracking Curves */
            function chart3() {
                var sin = [],
                    cos = [];
                for (var i = 0; i < 14; i += 0.1) {
                    sin.push([i, Math.sin(i)]);
                    cos.push([i, Math.cos(i)]);
                }

                plot = $.plot($("#chart_3"), [{
                            data: sin,
                            label: "sin(x) = -0.00"
                        }, {
                            data: cos,
                            label: "cos(x) = -0.00"
                        }
                    ], {
                        series: {
                            lines: {
                                show: true
                            }
                        },
                        crosshair: {
                            mode: "x"
                        },
                        grid: {
                            hoverable: true,
							borderWidth: 0,
                            autoHighlight: false
                        },
                        yaxis: {
                            min: -1.2,
                            max: 1.2
                        },
						colors: ["#A8BC7B", "#FCD76A", "#F38630"],
                    });

                var legends = $("#chart_3 .legendLabel");
                legends.each(function () {
                    $(this).css('width', $(this).width());
                });

                var updateLegendTimeout = null;
                var latestPosition = null;

                function updateLegend() {
                    updateLegendTimeout = null;

                    var pos = latestPosition;

                    var axes = plot.getAxes();
                    if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max || pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) return;

                    var i, j, dataset = plot.getData();
                    for (i = 0; i < dataset.length; ++i) {
                        var series = dataset[i];

                        for (j = 0; j < series.data.length; ++j)
                            if (series.data[j][0] > pos.x) break;

                        var y, p1 = series.data[j - 1],
                            p2 = series.data[j];
                        if (p1 == null) y = p2[1];
                        else if (p2 == null) y = p1[1];
                        else y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);

                        legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
                    }
                }

                $("#chart_3").bind("plothover", function (event, pos, item) {
                    latestPosition = pos;
                    if (!updateLegendTimeout) updateLegendTimeout = setTimeout(updateLegend, 50);
                });
            }

            /* Auto updating Chart Backup */
            function chart4_backup() {
                var options = {
                    series: {
                        shadowSize: 1
                    },
                    lines: {
                        show: true,
                        lineWidth: 1.5,
                    },
                    yaxis: {
                        min: 0,
                        max: 100,
                        tickFormatter: function (v) {
                            return v + "%";
                        }
                    },
                    xaxis: {
                        show: false
                    },
                    colors: ["#D9534F"],
                    grid: {
                        tickColor: "#a8a3a3",
                        borderWidth: 0
                    }
                };

                var updateInterval = 30;
                var plot = $.plot($("#chart_4"), [getRandomData()], options);

                function update() {
                    plot.setData([getRandomData()]);
                    plot.draw();
                    setTimeout(update, updateInterval);
                }
                update();
            }

            /* Bars with controls */

            function chart5() {
                var d1 = [];
                for (var i = 0; i <= 10; i += 1)
                    d1.push([i, parseInt(Math.random() * 30)]);

                var d2 = [];
                for (var i = 0; i <= 10; i += 1)
                    d2.push([i, parseInt(Math.random() * 30)]);

                var d3 = [];
                for (var i = 0; i <= 10; i += 1)
                    d3.push([i, parseInt(Math.random() * 30)]);

                var stack = 0,
                    bars = true,
                    lines = false,
                    steps = false;

                function plotWithOptions() {
                    $.plot($("#chart_5"), [d1, d2, d3], {
                            series: {
                                stack: stack,
                                lines: {
                                    show: lines,
                                    fill: true,
                                    steps: steps
                                },
                                bars: {
                                    show: bars,
                                    barWidth: 0.6
                                }
                            },
							grid:{
									borderWidth: 0
								},
							colors: ["#70AFC4", "#F0AD4E", "#A8BC7B"],
                        });
                }

                $(".stackControls input").click(function (e) {
                    e.preventDefault();
                    stack = $(this).val() == "With stacking" ? true : null;
                    plotWithOptions();
                });
                $(".graphControls input").click(function (e) {
                    e.preventDefault();
                    bars = $(this).val().indexOf("Bars") != -1;
                    lines = $(this).val().indexOf("Lines") != -1;
                    steps = $(this).val().indexOf("steps") != -1;
                    plotWithOptions();
                });

                plotWithOptions();
            }
			 /* Horizontal bar chart */
            function chart6() {
				 var data1 = [
							[5, 0], [10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60]
						];
					 
						var options = {
								series:{
									bars:{
											show: true
										}
								},
								bars:{
									horizontal:true,
									barWidth:6
								},
								grid:{
									borderWidth: 0
								},
								colors: ["#F38630"]
						};
					 
						$.plot($("#chart_6"), [data1], options); 

            }
			
			/* Select chart */
            function chart7() {
				 // setup plot
				function getData(x1, x2) {

					var d = [];
					for (var i = 0; i <= 100; ++i) {
						var x = x1 + i * (x2 - x1) / 100;
						d.push([x, Math.cos(x * Math.sin(x))]);
					}

					return [
						{ label: "cos(x sin(x))", data: d }
					];
				}

				var options = {
					grid: {
						hoverable: true,
						clickable: true,
						tickColor: "#f7f7f7",
						borderWidth: 0,
						labelMargin: 10,
						margin: {
							top: 0,
							left: 5,
							bottom: 0,
							right: 0
						}
					},
					legend: {
						show: false
					},
					series: {
						lines: {
							show: true
						},
						shadowSize: 0,
						points: {
							show: true
						}
					},
					colors: ["#D9534F"],
					yaxis: {
						ticks: 10
					},
					selection: {
						mode: "xy",
						color: "#F1ADAC"
					}
				};

				var startData = getData(0, 3 * Math.PI);

				var plot = $.plot("#placeholder", startData, options);

				// Create the overview plot

				var overview = $.plot($("#overview"), startData, {
					legend: {
						show: false
					},
					series: {
						lines: {
							show: true,
							lineWidth: 1
						},
						shadowSize: 0
					},
					xaxis: {
						ticks: 4
					},
					yaxis: {
						ticks: 3,
						min: -2,
						max: 2
					},
					colors: ["#D9534F"],
					grid: {
						color: "#999",
						borderWidth: 0,
					},
					selection: {
						mode: "xy",
						color: "#F1ADAC"
					}
				});

				// now connect the two

				$("#placeholder").bind("plotselected", function (event, ranges) {

					// clamp the zooming to prevent eternal zoom

					if (ranges.xaxis.to - ranges.xaxis.from < 0.00001) {
						ranges.xaxis.to = ranges.xaxis.from + 0.00001;
					}

					if (ranges.yaxis.to - ranges.yaxis.from < 0.00001) {
						ranges.yaxis.to = ranges.yaxis.from + 0.00001;
					}

					// do the zooming

					plot = $.plot("#placeholder", getData(ranges.xaxis.from, ranges.xaxis.to),
						$.extend(true, {}, options, {
							xaxis: { min: ranges.xaxis.from, max: ranges.xaxis.to },
							yaxis: { min: ranges.yaxis.from, max: ranges.yaxis.to }
						})
					);

					// don't fire event on the overview to prevent eternal loop

					overview.setSelection(ranges, true);
				});

				$("#overview").bind("plotselected", function (event, ranges) {
					plot.setSelection(ranges);
				});

				// Add the Flot version string to the footer

				$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

            }

            //graph
            //chart1();
            chart2();
			//chart7();
            //chart3();
            //chart4();
            //chart5();
			//chart6();
        },

        initPieCharts: function () {

            var data = [];
            var series = Math.floor(Math.random() * 9) + 1;
            series = series < 6 ? 6 : series;
            
            for (var i = 0; i < series; i++) {
                data[i] = {
                    label: "Series" + (i + 1),
                    data: Math.floor(Math.random() * 100)
                }
            }

            /* DEFAULT */
            $.plot($("#pie_chart"), data, {
                    series: {
                        pie: {
                            show: true
                        }
                    },
					colors: ["#D9534F", "#A8BC7B", "#F0AD4E", "#70AFC4", "#DB5E8C", "#FCD76A", "#A696CE"]
                });

            /* DONUT */
            $.plot($("#donut"), data, {
                    series: {
                        pie: {
                            innerRadius: 0.6,
                            show: true
                        }
                    },
					colors: ["#D9534F", "#A8BC7B", "#F0AD4E", "#70AFC4", "#DB5E8C", "#FCD76A", "#A696CE"]
                });

        },
		
        initOtherCharts: function () {
			function chartGrow() {               
                var data = [[0, 2.5],[1, 3.5], [2, 2], [3, 3], [4, 4],[5, 3.5], [6, 3.5], [7, 1], [8, 2], [9, 3], [10, 4],[11, 5], [12, 4], [13, 3], [14, 5], [15, 3.5],[16, 5], [17, 4], [18, 5], [19, 6],[20, 5], [21, 4], [22, 3], [23, 5], [24, 4], [25, 3],[26, 2], [27, 1], [28, 2], [29, 2],[30, 3], [31, 2]];

                var plot = $.plot($("#chart_grow"), [{
                            data: data,
                            label: "Monthly Sales"
                        }], {
                        series: {
                            lines: {
                                show: true,
                                lineWidth: 2,
                                fill: true,
                                fillColor: {
                                    colors: [{
                                            opacity: 0.05
                                        }, {
                                            opacity: 0.01
                                        }
                                    ]
                                }
                            },
                            points: {
                                show: true
                            },
                            shadowSize: 2,
							grow: { active: true, duration: 1500 }
                        },
                        grid: {
                            hoverable: true,
                            clickable: true,
                            tickColor: "#eee",
                            borderWidth: 0
                        },
                        colors: ["#D9534F"],
                        xaxis: {
                            ticks: 11,
                            tickDecimals: 0
                        },
                        yaxis: {
                            ticks: 11,
                            tickDecimals: 0
                        }
                    });


                function showTooltip(x, y, contents) {
                    $('<div id="tooltip">' + contents + '</div>').css({
                            position: 'absolute',
                            display: 'none',
                            top: y + 5,
                            left: x + 15,
                            border: '1px solid #333',
                            padding: '4px',
                            color: '#fff',
                            'border-radius': '3px',
                            'background-color': '#333',
                            opacity: 0.80
                        }).appendTo("body").fadeIn(200);
                }

                var previousPoint = null;
                $("#chart_2").bind("plothover", function (event, pos, item) {
                    $("#x").text(pos.x.toFixed(2));
                    $("#y").text(pos.y.toFixed(2));

                    if (item) {
                        if (previousPoint != item.dataIndex) {
                            previousPoint = item.dataIndex;

                            $("#tooltip").remove();
                            var x = item.datapoint[0].toFixed(2),
                                y = item.datapoint[1].toFixed(2);

                            showTooltip(item.pageX, item.pageY, item.series.label + " of " + x + " = " + y);
                        }
                    } else {
                        $("#tooltip").remove();
                        previousPoint = null;
                    }
                });
            }
			//Run the graph
			chartGrow();
        }
    };

}();