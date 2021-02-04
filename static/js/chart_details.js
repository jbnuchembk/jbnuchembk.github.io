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

metadata = class_cnt_in_folds;
console.log(metadata)
displayClassCnt();

function displayClassCnt() {
    classNames = Object.keys(metadata)
    cnt_datasets = Object.entries(metadata).map( ([cl, cnt]) => {
      console.log(cl, cnt)
      var data_one = {
        'label' : cl,
        'data' :  cnt,
        'backgroundColor': classColors[cl]
      }
      return data_one
    });
    console.log(cnt_datasets);
    labels = metadata[classNames[0]].map( (d,i) => 'fold '+`${i+1}`);
    console.log(labels)
    ctx = document.getElementById('metadata').getContext('2d');
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets:   cnt_datasets
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
            text: "Classes Count in Folders"
        },
      }
    });
}

function displayMetadata() {
  url = "/static/result_files/metadata_class_cnt.json"
  d3.json(url, function(metadata){
    classNames = Object.keys(metadata)
    cnt_datasets = Object.entries(metadata).map( ([cl, cnt]) => {
      console.log(cl, cnt)
      var data_one = {
        'label' : cl,
        'data' :  cnt,
        'backgroundColor': classColors[cl]
      }
      return data_one
    });
    console.log(cnt_datasets);
    labels = metadata[classNames[0]].map( (d,i) => 'fold '+`${i+1}`);
    console.log(labels)
    ctx = document.getElementById('metadata').getContext('2d');
    var myLineChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets:   cnt_datasets
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
            text: "Classes Count in Folders"
        },
      }
    });
  }); 
}
