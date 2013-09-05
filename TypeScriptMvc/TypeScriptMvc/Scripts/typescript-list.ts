///<reference path="typings/jquery/jquery.d.ts" />
///<reference path="typings/knockout/knockout.d.ts" />

class TaskDetails {
    id: KnockoutObservable<number>;
    title: KnockoutObservable<string>;
    details: KnockoutObservable<string>;
    starts: KnockoutObservable<string>;
    ends: KnockoutObservable<string>;

    constructor(id: number, title: string, details: string,
        starts: string, ends: string) {
        this.id = ko.observable(id);
        this.title = ko.observable(title);
        this.details = ko.observable(details);
        this.starts = ko.observable(moment(starts).format("MMM DD, YYYY  h:mm:ss a"));
        this.ends = ko.observable(moment(ends).format("MMM DD, YYYY  h:mm:ss a"));
    }
}

class TaskViewModel {
    public tasks: KnockoutObservableArray<TaskDetails>;
    constructor() {
        this.tasks = ko.observableArray([]);
    }
}

$(document).ready(function () {
    var serverData: any[];
    serverData = JSON.parse($("#serverJSON").val());
    var vm: TaskViewModel;
    var i: number;
    vm = new TaskViewModel();
    for (i = 0; i < serverData.length; i++) {
        var serverTask: any;
        serverTask = serverData[i];
        vm.tasks.push(new TaskDetails(serverTask.Id, serverTask.Title, serverTask.Details, serverTask.Starts, serverTask.Ends));
    }
    ko.applyBindings(vm);
});