google.load('visualization', '1', {'packages':['corechart']});

google.setOnLoadCallback(drawChart);

function drawChart(){
  var jsonData = $.ajax({
    url: "sampleData.json",
    dataType: "json",
    async: false
  }).responseText;

  var data = new google.visualization.DataTable(jsonData);

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  chart.draw(data, {width:800, height:400});

  alert(showObj(data));
}

function showObj(obj){
  var str = "";
  for(key in obj){
    str += key+"="+obj[key]+"\n";
  }

  return str;
}
