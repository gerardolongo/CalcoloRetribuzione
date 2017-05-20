
app.controller('mainController', function($scope,$mdToast,service) {

  resetFlagIVS();

  $scope.change = function(){
    var year = $scope.dataRetrMensile.getFullYear();

    if(year == 2016)
        $scope.flagIVS2016 = false;
    if(year == 2017)
        $scope.flagIVS2016 = false;
    if(year == 2018)
        $scope.flagIVS2016 = false;
  }

  $scope.executeFunction = function(){
    $scope.result = "";

    //resetFlagIVS();

    var retrPersaTot = service.retrpersaTotale($scope);
    var IVSTotale = service.ivsTotale($scope);
    var totale = service.finalResult(IVSTotale,retrPersaTot);

    if(totale < 0.149 || totale > 0.41 )
    {
        $scope.showToast('Parametri inseriti non corretti');
        $scope.result = totale;
    }
    else {
      $scope.showToast('Parametri inseriti corretti');
      $scope.resetForm();
      $scope.result = totale;
    }};

  $scope.showToast = function(text) {
     var toast = $mdToast.simple()
        .textContent(text)
        .action('OK')
        .highlightAction(false);
     $mdToast.show(toast).then(function(response) {
     });
  }

   $scope.resetForm = function(){
    $scope.IVS2016 = "";
    $scope.IVS2017 = "";
    $scope.IVS2018 = "";
    $scope.retrTeoMensile = "";
    $scope.percPartTime = "";
    $scope.numMensilita = "";
    $scope.dataRetrMensile = "";
    resetFlagIVS();
  }

  function resetFlagIVS(){
    $scope.flagIVS2016 = true;
    $scope.flagIVS2017 = true;
    $scope.flagIVS2018 = true;
  }

});
