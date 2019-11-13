window.onload = function() {
  CanvasJS.addColorSet("greenShades", [
    //colorSet Array

    "#8064A1",
    "#C0504E",
    "#FF9900",
    "#4F81BC",
    "#9BBB58"
  ]);

  var chart = new CanvasJS.Chart("chartContainer1", {
    colorSet: "greenShades",
    animationEnabled: true,
    title: {
      text: "Scan Summary"
    },

    data: [
      {
        type: "column",
        showInLegend: true,
        //axisYIndex: 0, //Defaults to Zero
        name: "Count",
        xValueFormatString: "####",
        dataPoints: [
          { x: 2006, y: 6, label: "Total" },
          { x: 2007, y: 5, label: "PPT" },
          { x: 2008, y: 3, label: "Word" },
          { x: 2009, y: 2, label: "Excel" },
          { x: 2010, y: 4, label: "PowerPoint" },
          { x: 2011, y: 3, label: "Epub" }
        ]
      },

      {
        type: "column",
        showInLegend: true,
        axisYType: "secondary",
        //axisYIndex: 0, //Defaults to Zero
        name: "Errors",
        xValueFormatString: "####",
        dataPoints: [
          { x: 2006, y: 45 },
          { x: 2007, y: 38 },
          { x: 2008, y: 32 },
          { x: 2009, y: 25 },
          { x: 2010, y: 22 },
          { x: 2011, y: 18 }
        ]
      },

      {
        type: "column",
        showInLegend: true,
        axisYType: "secondary",
        //axisYIndex: 0, //Defaults to Zero
        name: "Warning",
        xValueFormatString: "####",
        dataPoints: [
          { x: 2006, y: 39 },
          { x: 2007, y: 32 },
          { x: 2008, y: 28 },
          { x: 2009, y: 22 },
          { x: 2010, y: 19 },
          { x: 2011, y: 15 }
        ]
      },

      {
        type: "column",
        showInLegend: true,
        axisYType: "secondary",
        //axisYIndex: 0, //Defaults to Zero
        name: "Info",
        xValueFormatString: "####",
        dataPoints: [
          { x: 2006, y: 35 },
          { x: 2007, y: 30 },
          { x: 2008, y: 25 },
          { x: 2009, y: 19 },
          { x: 2010, y: 11 },
          { x: 2011, y: 10 }
        ]
      },
      {
        type: "column",
        showInLegend: true,
        axisYType: "secondary",
        //axisYIndex: 0, //Defaults to Zero
        name: "Pass",
        xValueFormatString: "####",
        dataPoints: [
          { x: 2006, y: 31 },
          { x: 2007, y: 25 },
          { x: 2008, y: 22 },
          { x: 2009, y: 15 },
          { x: 2010, y: 25 },
          { x: 2011, y: 12 }
        ]
      }
    ]
  });

  chart.render();
};