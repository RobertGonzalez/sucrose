
function generatePackage(e) {
  e.preventDefault();
  e.stopPropagation();

  function jsonString(d) {
    return JSON.stringify(d, null, '  ');
  }

  var indexTemplate;
  var zip = new JSZip();
  var data = jsonString(Data);
  var settings = Manifest.getConfig();
  var chart = sucroseCharts.getChart(chartType);
  var model = sucroseCharts.getChartModel(chartType);
  var format = sucroseCharts.formatToString(chartType);
  var topojson = chartType === 'globe' ? '<script src="topojson.min.js"></script>' : '';

  settings.locality = Manifest.getLocaleData(settings.locale);
  settings.colorOptions = Manifest.getColorOptions();

  var config = jsonString(sucroseCharts.getConfig(chartType, chart, settings));

  var includes = [
    $.get({url: 'tpl/index.html', dataType: 'text'}),
    $.get({url: 'js/d3.min.js', dataType: 'text'}),
    $.get({url: 'js/sucrose.js', dataType: 'text'}),
    $.get({url: 'css/sucrose.min.css', dataType: 'text'})
  ];

  if (chartType === 'globe') {
    includes.push($.get({url: 'js/topojson.min.js', dataType: 'text'}));
    includes.push($.get({url: 'data/geo/world-countries-topo-110.json', dataType: 'text'}));
    includes.push($.get({url: 'data/geo/usa-states-topo-110.json', dataType: 'text'}));
    includes.push($.get({url: 'data/geo/cldr_en.json', dataType: 'text'}));
  } else if (chartType === 'tree') {
    includes.push($.get({url: 'img/user.svg', dataType: 'text'}));
  }

  $.when
    .apply($, includes) // add defferends as params to $.when
    .then(function () {
      // convert defferends into files array
      return [].slice.apply(arguments, [0]).map(function (result) {
        return result[0];
      });
    })
    .then(function (files) {
      // replace index compoents with file string
      indexTemplate = files[0]
        .replace(/{{Type}}/g, chartType)
        .replace('{{Data}}', data)
        .replace('{{Config}}', config)
        .replace('{{Model}}', model)
        .replace('{{Format}}', format)
        .replace('{{TopoJSON}}', topojson);

      // add files to zip
      zip.file('index-' + chartType + '.html', indexTemplate);
      zip.file('d3.min.js', files[1]);
      zip.file('sucrose.js', files[2]);
      zip.file('sucrose.min.css', files[3]);

      if (chartType === 'globe') {
        zip.file('topojson.min.js', files[4]);
        zip.file('data/geo/world-countries-topo-110.json', files[5]);
        zip.file('data/geo/usa-states-topo-110.json', files[6]);
        zip.file('data/geo/cldr_en.json', files[7]);
      } else if (chartType === 'tree') {
        zip.file('img/user.svg', files[4]);
      }

      // initiate zip download
      zip.generateAsync({type:'blob'}).then(
        function (blob) {
          saveAs(blob, 'sucrose-example-' + chartType + '.zip');
        },
        function (err) {
          console.log(err);
        }
      );
    });
}
