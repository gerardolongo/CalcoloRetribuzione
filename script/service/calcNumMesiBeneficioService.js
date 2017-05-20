app.service('calcNumMesiBeneficio', function() {

  function getValue(dataRetrMensile)
  {
    return DateDiff(dataRetrMensile, new Date());
  }

  function DateDiff(date1, date2) {
      return (((date1.getFullYear() - date2.getFullYear()) * 12) + date1.getMonth() - date2.getMonth()) - 1;
  }

  return {
    value: function(dataRetrMensile) {
        return getValue(dataRetrMensile);
    }
  };
});
