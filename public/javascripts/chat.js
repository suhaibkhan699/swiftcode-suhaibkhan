var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {

    $scope.messages=[
    {
    'sender':'USER',
    'text':'hi',
    'time':'10:01 AM'
    },
    {
    'sender':'BOT',
    'text':'hello',
    'time':'10:01 AM'
    },
    {
    'sender':'USER',
    'text':'I love swiftcode',
    'time':'10:01 AM'
    },
    {
    'sender':'BOT',
    'text':"news",
    'time':'10:01 AM'
    }
]
});
