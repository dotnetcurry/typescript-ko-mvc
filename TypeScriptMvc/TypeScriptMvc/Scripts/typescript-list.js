///<reference path="typings/jquery/jquery.d.ts" />
///<reference path="typings/knockout/knockout.d.ts" />
var TaskDetails = (function () {
    function TaskDetails(id, title, details, starts, ends) {
        this.id = ko.observable(id);
        this.title = ko.observable(title);
        this.details = ko.observable(details);
        this.starts = ko.observable(moment(starts).format("MMM DD, YYYY  h:mm:ss a"));
        this.ends = ko.observable(moment(ends).format("MMM DD, YYYY  h:mm:ss a"));
    }
    return TaskDetails;
})();

var TaskViewModel = (function () {
    function TaskViewModel() {
        this.tasks = ko.observableArray([]);
    }
    return TaskViewModel;
})();

$(document).ready(function () {
    var serverData;
    serverData = JSON.parse($("#serverJSON").val());
    var vm;
    var i;
    vm = new TaskViewModel();
    for (i = 0; i < serverData.length; i++) {
        var serverTask;
        serverTask = serverData[i];
        vm.tasks.push(new TaskDetails(serverTask.Id, serverTask.Title, serverTask.Details, serverTask.Starts, serverTask.Ends));
    }
    ko.applyBindings(vm);
});
//# sourceMappingURL=typescript-list.js.map
