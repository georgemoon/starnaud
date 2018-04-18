$(function() {
  'use strict';

  /* Helper functions */
  function degreesToCompass(degrees) {
    /* Converts a direction in degrees [0 ... 360] to cardinal mark */
    while (degrees < 0) { degrees += 360; }
    while (degrees >= 360) { degrees -= 360; }

    var cardinalMarks = [
      {'name': 'N', 'lower': 0.00, 'upper': 11.25},
      {'name': 'NNE', 'lower': 11.25, 'upper': 33.75},
      {'name': 'NE', 'lower': 33.75, 'upper': 56.25},
      {'name': 'ENE', 'lower': 56.25, 'upper': 78.75},
      {'name': 'E', 'lower': 78.75, 'upper': 101.25},
      {'name': 'ESE', 'lower': 101.25, 'upper': 123.75},
      {'name': 'SE', 'lower': 123.75, 'upper': 146.25},
      {'name': 'SSE', 'lower': 146.25, 'upper': 168.75},
      {'name': 'S', 'lower': 168.75, 'upper': 191.25},
      {'name': 'SSW', 'lower': 191.25, 'upper': 213.75},
      {'name': 'SW', 'lower': 213.75, 'upper': 236.25},
      {'name': 'WSW', 'lower': 236.25, 'upper': 258.75},
      {'name': 'W', 'lower': 258.75, 'upper': 281.25},
      {'name': 'WNW', 'lower': 281.25, 'upper': 303.75},
      {'name': 'NW', 'lower': 303.75, 'upper': 326.25},
      {'name': 'NNW', 'lower': 326.25, 'upper': 348.75},
      {'name': 'N', 'lower': 348.75, 'upper': 360.00}
    ];

    var compass = '';

    for(var key in cardinalMarks) {
      if(degrees >= cardinalMarks[key].lower && degrees < cardinalMarks[key].upper) compass = cardinalMarks[key].name;
    }

    return compass;
  }

  function trendToArrow(trend) {
    /* Converts a trend number [-1, 0, 1] to arrow or dash */
    switch(trend) {
      case '-1':
        return '<i class="fa fa-long-arrow-down" aria-hidden="true"></i>';
      case '0':
        return '&mdash;';
      case '1':
        return '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>';
      default:
        return '';
    }
  }

  /* JSON decoding */
  $.getJSON('https://live.harvest.com/?hsn=11720&grp=Main&cmd=json', function(weatherJSON) {
    /* Parse template */
    var template = $('#template-weather').html();
    Mustache.parse(template);

    /* Parse date */
    var dateDecoded = decodeURIComponent(weatherJSON.LastLogTime.time);
    var dateMoment = moment.utc(dateDecoded, 'YYYY-MM-DD+HH:mm:ss');

    /* Humanise data */
    /** Trends **/
    for(var key in weatherJSON) {
      if(weatherJSON[key].trend) {
        weatherJSON[key].trend = trendToArrow(weatherJSON[key].trend);
      }
    }

    /** Date **/
    weatherJSON.LastLogTime.time = dateMoment.local().format('DD MMMM, h:mm a');

    /** Wind direction **/
    weatherJSON.WindDir.compass = degreesToCompass(weatherJSON.WindDir.value);

    /* Output */
    var output = Mustache.render(template, weatherJSON);
    $('#weather-latest').html(output);
  });
});
