function Pcharts(idofChart, idvalueofchart) {

    if (!jQuery.plot) {
       return;
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

    	var maximum = 31;

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

        this.online_equipments = [0, 0, 0, 0, 0, 0];
        this.online_channels = [0, 0, 0, 0, 0, 0];

        var data_plot = [chart2_data_default];

        var plot = $.plot($("#" + idofChart), data_plot, {    //"#chart_2_1"
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

        this.testVar = idvalueofchart;

        var updateInterval = 3000;

        var pchart_scope = this;
        //real time update
        function update() {
            getRandomDataForTest(data_collections, pchart_scope.online_equipments, pchart_scope.online_channels);
            plot.setData(data_collections);
            plot.draw();
            setTimeout(update, updateInterval);
        }
        update();

};

    //enablelabels();
    Pcharts.prototype.enablelabels = function()
    {
        //alert(this.test_1);
        var parent = this;
        //alert( parent.testVar);
        
        jQuery('.label-ep-' + parent.testVar).click(function(){
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
            parent.online_equipments[curEquipmentIndex-1] = 1;

        }else
        {
            //toggle off
            parent.online_equipments[curEquipmentIndex-1] = 0;
        }

        //alert( parent.testVar);
        
     });



    jQuery('.label-cm-' + parent.testVar).click(function(){
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
            parent.online_channels[curChannelIndex-1] = 1;
        }else
        {
            //toggle off
            parent.online_channels[curChannelIndex-1] = 0;
        }

         //alert( parent.testVar);
    });  
    
}  //end of function enablelabels

