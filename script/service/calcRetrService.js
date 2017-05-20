app.service('service', function(calcNumMesiBeneficio) {
  return {
    retrpersaTotale: function(scope) {
        var mesiBeneficio = calcNumMesiBeneficio.value(scope.dataRetrMensile)
        return (((scope.retrTeoMensile * scope.numMensilita)/12) * (1 - scope.percPartTime)) * mesiBeneficio;
    },
    ivsTotale: function(scope)
    {
        IVS2016 = scope.IVS2016 ? scope.IVS2016 : 0;
        IVS2017 = scope.IVS2017 ? scope.IVS2017 : 0;
        IVS2018 = scope.IVS2018 ? scope.IVS2018 : 0;
        return IVS2016 + IVS2017 + IVS2018;
    },
    finalResult: function(IVSTotale,retrPersaTot)
    {
        var totale = IVSTotale/retrPersaTot;
        return totale.toFixed(3);
    }
  };
});
