var classColors = {
    "air_conditioner": "#4E79A7",
    "car_horn": "#F28E2B",
    "children_playing": "#E15759",
    "dog_bark": "#76B7B2",
    "drilling":  "#59A14F",
    "engine_idling": "#9C755F",
    "gun_shot": "#BAB0AC",
    "jackhammer":  "#FF9DA7",
    "siren": "#B07AA1",
    "street_music": "#EDC948"
}

// data from results_data.js
bestScores = best_model_avg;

// var ctx1 = document.getElementById("exp1-bubble").getContext('2d');
// bubbleChart(ctx1, bestScores["Exp 1"]["avg_scores"][0])
// var ctx2 = document.getElementById("exp2-bubble").getContext('2d');
// bubbleChart(ctx2, bestScores["Exp 2"]["avg_scores"][0])
// var ctx3 = document.getElementById("exp3-bubble").getContext('2d');
// bubbleChart(ctx3, bestScores["Exp 3"]["avg_scores"][0])
// var ctx4 = document.getElementById("exp4-bubble").getContext('2d');
// bubbleChart(ctx4, bestScores["Exp 4"]["avg_scores"][0])
barChart()
function barChart() {
  expNames = Object.keys(bestScores)
  classNames = Object.keys(classColors)
  bar_datasets = classNames.map( (cl, i) => {

    values = Object.values(bestScores).map( (sc)=>{
      console.log(sc)
      f1_score = sc.avg_scores[0]["f1-score"]
      console.log(f1_score)
      return f1_score[i]
    });
    console.log(cl, values)
    var data_one = {
      'label' : cl,
      'data' :  values,
      'backgroundColor': classColors[cl]
    }
    return data_one
  });
  labels = expNames;
  console.log(labels)
  ctx = document.getElementById('myBar').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets:   bar_datasets
    },
    options: {
      legend: { 
          display: true,
          labels: {
            boxWidth: 10
          }
      },
      title: {
          display: true,
          text: "F1-Scores"
      },
    }
  });
}

function bubbleChart(ctx, avg_scores) {
  //avg_scores is a dict.
  classNames = avg_scores["class"]
  precisions = avg_scores['precision']
  recalls = avg_scores['recall']
  supports = avg_scores['support']
  var dataBubble = classNames.map((cl, i) => {
    //console.log(vl)
    //console.log("f1-score", vl["f1-score"]);
    return {
      label: [cl],
      backgroundColor: classColors[cl],
      borderColor: classColors[cl],
      data: [{
        x: precisions[i],
        y: recalls[i],
        r: supports[i]/50
      }]    
    }
  });

  console.log(dataBubble)

  var myBubble = new Chart(ctx, {
    type: 'bubble',
    data: {
      labels: "label",
      datasets: dataBubble
    },
    options: {
      legend: { 
        display: false,
        position: 'top',
        labels: {
          boxWidth: 5,
          fontsize: 10
        }
      },
      title: {
          display: true,
          text: "Precision vs. Recall of classes"
      },
      scales: {
        xAxes: [{
          scaleLable: {
            display: true,
            labelString: "Precision"
          }
        }],
        yAxes: [{
          scaleLable: {
            display: true,
            labelString: "Recall"
          }
        }]
      }
    }
  });
}
