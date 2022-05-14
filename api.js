
let grafico = document.getElementById("grafico");

var fecha = [];
var visitas = [];
var hombres = [];
var mujeres = [];
var disca = [];
var total = [];

//Consumo de la API
//fetch('https://www.datos.gov.co/resource/4wtf-sdh2.json')
fetch('https://www.datos.gov.co/resource/htta-bj9v.json')

//Then
.then(response => response.json())

//Then
.then (function transformar (response){

  response.forEach(function agregar (response)
    {
      if(response.fecha != undefined && response.visitas != undefined){
        visitas.push(response.visitas);
        fecha.push(response.fecha);
      }
    });

    var graf1 = 
    {
      y: visitas,
      x: fecha,
      type: 'bar',
    };

    var datosGraficas = [graf1];

    var layout = {
      title: 'DATOS METRICOS - Sitio Web',
      xaxis:
      {
        title: 'Fecha'
      },
      yaxis:
      {
        title: 'Visitas'
      },
    };

Plotly.newPlot('grafico', datosGraficas, layout);
  
});

  //REVISAR DOC PLOTLY 


fetch('https://www.datos.gov.co/resource/ymnf-2zi6.json')
//Then
.then(response => response.json())

//Then
.then (function transformar (response){

  response.forEach(function agregar (response)
    {
      if(response.total_poblacion != undefined && response.mujeres != undefined && response.hombres != undefined && response.discapacitados != undefined){
        hombres.push(response.hombres);
        mujeres.push(response.mujeres);
        disca.push(response.discapacitados);
        total.push(response.total_poblacion);
      }
    });

    var graf1 = 
    {
      x: ["Discapacitados", "Hombres", "Mujeres", "Total"],
      y: [disca[2],hombres[2],mujeres[2], total[2]],
      type: 'markers',
      marker: {
        color: ['#E4F147', '#4763F1',  '#F1478F', '#93DA17'],
        size: [40, 60, 80, 100]
      }
    };

    var datosGraficas = [graf1];

    var layout = {
      title: 'Poblacion Chinchina',
      showlegend: false,
      height: 600,
      width: 600
    };

Plotly.newPlot('grafico2', datosGraficas, layout);
  
});
