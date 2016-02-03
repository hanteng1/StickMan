function Tcharts(idofChart, idvalueofchart, idofTable) {

    if (!jQuery.plot) {
       return;
    }

    function clearData(pData){
        pData.length = 0;  //this works
    }

    function clearAllData(){
        alert("this is called");
        for(itre =0; itre < pDataCollection.length; itre++)
        {
            clearData(pDataCollection[itre]);
        }
    }

    function updateDataSetForTest(pDataCollection, equips, channels){

        for(itre = 0; itre < 6; itre++) 
        {
            if(equips[itre] == 1)
            {
                for(itrc =0; itrc < 6; itrc++)
                {
                    if(channels[itrc] == 1) {


                        if(pDataCollection[6 * itre + itrc + 1].length != 0)
                        {
                            //do not update
                        }else
                        {
                            getRandomDataWithObject(pDataCollection[6 * itre + itrc + 1]);

                        }
                        
                    }else
                    {
                        if(pDataCollection[6 * itre + itrc + 1].length != 0)
                        {
                            clearData(pDataCollection[6 * itre + itrc + 1]);
                        }
                    }
                }
            }else if(equips[itre] == 0)
            {
                for(itrc =0; itrc < 6; itrc++)
                {
                    
                    if(pDataCollection[6 * itre + itrc + 1].length != 0)
                    {
                        clearData(pDataCollection[6 * itre + itrc + 1]);
                    }
                    
                }
            }
        }

    }


    //fill the pData with random data
    //bug, why this doesn't work
    function getAssignedHistroyDataWithObject(pd){
        //this is just for demo

        for(itre = 0; itre < 100; itre++)  
        {
            getRandomDataWithObject(pd);
        }

    }

    function getRandomDataWithObject(pData) {

        //fill the data with 0 if it is not full of size first
        //attention, this is just for demo
        //consider the data format according to your need for real implementation
        if(pData.length == 0)
        {
            for(var itrt = 1; itrt < maximum; itrt++)
            {
                pData.push([itrt, 0]); //30 
            }
        }

        for(var itrpp = 0; itrpp < 30; itrpp++)
        {
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

    //attention: the name is not for real
    var data_names = ["默认",
                      "设备1-A项","设备1-B项","设备1-C项","设备1-AB项","设备1-BC项","设备1-CA项",
                      "设备2-A项","设备2-B项","设备2-C项","设备2-AB项","设备2-BC项","设备2-CA项",
                      "设备3-A项","设备3-B项","设备3-C项","设备3-AB项","设备3-BC项","设备3-CA项",
                      "设备4-A项","设备4-B项","设备4-C项","设备4-AB项","设备4-BC项","设备4-CA项",
                      "设备5-A项","设备5-B项","设备5-C项","设备5-AB项","设备5-BC项","设备5-CA项",
                      "设备6-A项","设备6-B项","设备6-C项","设备6-AB项","设备6-BC项","设备6-CA项"
                    ];

    var data_collections = [chart2_data_default,
                            chart2_data_1_1, chart2_data_1_2, chart2_data_1_3, chart2_data_1_4, chart2_data_1_5, chart2_data_1_6,
                            chart2_data_2_1, chart2_data_2_2, chart2_data_2_3, chart2_data_2_4, chart2_data_2_5, chart2_data_2_6,
                            chart2_data_3_1, chart2_data_3_2, chart2_data_3_3, chart2_data_3_4, chart2_data_3_5, chart2_data_3_6,
                            chart2_data_4_1, chart2_data_4_2, chart2_data_4_3, chart2_data_4_4, chart2_data_4_5, chart2_data_4_6,
                            chart2_data_5_1, chart2_data_5_2, chart2_data_5_3, chart2_data_5_4, chart2_data_5_5, chart2_data_5_6,
                            chart2_data_6_1, chart2_data_6_2, chart2_data_6_3, chart2_data_6_4, chart2_data_6_5, chart2_data_6_6
                            ];
    
    var data_colors = [
                        "#eeeeee",
                        "#f6b162", "#f7ba75", "#f8c387", "#f9cc9a", "#fad6ac", "#fbdfbf",  //color for item 1
                        "#ef7968", "#f1897a", "#f3988c", "#f5a89e", "#f6b8af", "#f8c8c1", //color for item 2
                        "#c3739f", "#ca83aa", "#d194b5", "#d8a4c1", "#dfb5cc", "#e65d8",  //color for item 3
                        "#906aac", "#9d7cb6", "#aa8dbf", "#b79fc9", "#c4b0d3", "#d1c2dd",  //color for item 4
                        "#C36241", "#C35817", "#CC6600", "#E66C2C", "#F87431", "#FF8040",  //red
                        "#810541", "#7E354D", "#7F4E52", "#7F5A58", "#C5908E", "#E8ADAA"   //purple
                        ];

    this.online_equipments = [0, 0, 0, 0, 0, 0];
    this.online_channels = [0, 0, 0, 0, 0, 0];

    //initialize the table
    var table_header_tr = jQuery("." + idofTable).children(".table-striped").children(".table-head").children(".table-head-tr");
    var table_body = jQuery("." + idofTable).children(".table-striped").children(".table-body");

    var data_plot = [chart2_data_default];

    var plot = $.plot($("#" + idofChart), data_plot, { 
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
    //this.tablename = idofTable;
    var tchart_scope = this;

    //enable label and form functions
    jQuery('.label-cm-' + this.testVar).click(function(){

        var embedded_form_upper_row = jQuery(this).parents(".panel-body").children(".embedded-form").children(".form-horizontal").children(".chanel-types").children(".upper-row");
        var embedded_form_lower_row = jQuery(this).parents(".panel-body").children(".embedded-form").children(".form-horizontal").children(".chanel-types").children(".lower-row");
                            
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
            tchart_scope.online_channels[curChannelIndex-1] = 1;
            update();

            if(curChannelIndex > 3)
            {
                embedded_form_lower_row.children("label").each(function(){
                    if($(this).hasClass("cc" + curChannelIndex))
                    {
                        $(this).children("input").prop('checked', true);
                    }
                });
            }else
            {
                embedded_form_upper_row.children("label").each(function(){
                    if($(this).hasClass("cc" + curChannelIndex))
                    {
                        $(this).children("input").prop('checked', true);
                    }
                });
            }
        }else
        {
            //toggle off
            tchart_scope.online_channels[curChannelIndex-1] = 0;
            update();

            if(curChannelIndex > 3)
            {
                embedded_form_lower_row.children("label").each(function(){
                    if($(this).hasClass("cc" + curChannelIndex))
                    {
                        $(this).children("input").prop('checked', false);
                    }
                });
            }else
            {
                embedded_form_upper_row.children("label").each(function(){
                    if($(this).hasClass("cc" + curChannelIndex))
                    {
                        $(this).children("input").prop('checked', false);
                    }
                });
            }
        }

       

    }); 

    
    $(":checkbox").click(function(){

        var checkbox_name = "chanel-type-check-" + tchart_scope.testVar;
        if($(this).attr("name") == checkbox_name){
            var label_cms = jQuery(this).parents(".panel-body").children(".first-column").children(".upper-labels").children("ul");

            if($(this).prop('checked') == true){
                var label_index = $(this).attr("value");
                var label_index_value = parseInt(label_index);
                //alert(label_index );

                label_cms.children("li").each(function(){

                    if($(this).children("a").hasClass("lc" + label_index))
                    {
                        $(this).children(".lc" + label_index).children(".title").toggleClass("open");
                        $(this).children(".lc" + label_index).children(".color-mark").toggleClass("open");

                        //set channel value to 1
                        tchart_scope.online_channels[label_index_value-1] = 1;
                        update();
                    }
                });

            }else
            {
                var label_index = $(this).attr("value");
                var label_index_value = parseInt(label_index);
                label_cms.children("li").each(function(){

                    if($(this).children("a").hasClass("lc" + label_index))
                    {
                        $(this).children(".lc" + label_index).children(".title").toggleClass("open");
                        $(this).children(".lc" + label_index).children(".color-mark").toggleClass("open");

                         //set channel value to 0
                         tchart_scope.online_channels[label_index_value-1] = 0;
                         update();
                    }
                });
            }
        }

        
    });

    //real time update
    function update() {

        //alert(tchart_scope.online_equipments +  tchart_scope.online_channels);
        updateDataSetForTest(data_collections, tchart_scope.online_equipments, tchart_scope.online_channels);

        //update graph
        plot.setData(data_collections);
        plot.draw();
        //update table
        //first, remove all td in table-body
        table_header_tr.empty();
        table_body.empty();

        //second, put exiting data into the table-body
        $('<th class="col-0">数据时间</th>').appendTo(table_header_tr);
        var num_of_body_tr = 0;
        for (var itrn = 1; itrn < data_collections.length; itrn++) {
            //no need to consider the default data for table
            var cur_test_data = data_collections[itrn];

            if(cur_test_data.length > 0)
            {

                $('<th class="col-'+itrn+'">'+data_names[itrn]+'</th>').appendTo(table_header_tr);

                
                for(var itrd = 0; itrd < cur_test_data.length; itrd++)
                {
                    //see if need to add new tr + first column
                    if((itrd + 1) > num_of_body_tr)
                    {
                        //add a tr to the beginning of the table_body so that new data apear first
                        //$('<tr class="table-body-tr-'+itrd+'"></tr>').appendTo(table_body);
                        table_body.prepend($('<tr class="table-body-tr-'+itrd+'"></tr>'));
                        var new_added_tr = jQuery("."+ idofTable).children(".table-striped").children(".table-body").children(".table-body-tr-" + itrd);
                        $('<td class="col-0">'+cur_test_data[itrd][0]+'</td>').appendTo(new_added_tr);

                        //add the number to its position, cur_test_data[itrd][1]
                        for(var itrp = 1; itrp < itrn; itrp++) //iterate the data before and insert empty as long as the data is not empty, its has something, but not as long as the new added one
                        {
                            if (data_collections[itrp].length > 0) 
                            {
                                $('<td class="col-'+itrp+'"></td>').appendTo(new_added_tr);
                            };
                        }

                        $('<td class="col-'+itrn+'">'+cur_test_data[itrd][1]+'</td>').appendTo(new_added_tr);


                        num_of_body_tr++;
                    }else
                    {
                        //tr already exit, fint it
                        var already_added_tr = jQuery("."+ idofTable).children(".table-striped").children(".table-body").children(".table-body-tr-" + itrd);

                        //skip the previous cols...how, only take of previous columns...
                        for(var itrp = 1; itrp < itrn; itrp++)
                        {
                            if (data_collections[itrp].length > 0) 
                            {
                                if(data_collections[itrp].length > itrd) 
                                {
                                    //do nothing, must already added
                                }else
                                {
                                    //check if already added, otherwise, add an empty to the tr
                                    //iterate all the children of current tr
                                    already_added_tr.children('td').each(function(){
                                        if($(this).hasClass("col-" + itrp)){
                                            //do nothing
                                        }else{
                                            $('<td class="col-'+itrp+'"></td>').appendTo(already_added_tr);
                                        }
                                    });
                                }
                            }
                            
                        }

                        $('<td class="col-'+itrn+'">'+cur_test_data[itrd][1]+'</td>').appendTo(already_added_tr);

                    }

                    
                }
                
            }            
        }

    }



    //here is a bad idea, not encouraged
    this.trigger = false;
    var updateInterval = 1000;
    function iteration_trigger () {

        if(tchart_scope.trigger == true)
        {
            update();
            tchart_scope.trigger = false;
        }
        setTimeout(iteration_trigger, updateInterval);
    }
    iteration_trigger();

};

    //enablelabels();
    Tcharts.prototype.enablelabels = function()
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
            parent.trigger = true;   //bad idea, not encouraged
        }else
        {
            //toggle off
            parent.online_equipments[curEquipmentIndex-1] = 0;
             parent.trigger = true;   //bad idea, not encouraged
        }

        //alert( parent.testVar);
        
     });
    
}  //end of function enablelabels

