import { Component } from "@angular/core";

@Component({
    selector : '<app-success-alert></app-success-alert>',
    templateUrl : './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']

})

export class successAlert { 
    userName = ""

    displayIt = false

    logItems = []

    isEmpty = true

    counter = 0

    clear(){
        this.userName = ""
    }

    displayPass(){
        this.displayIt = !this.displayIt
        this.logItems.push(this.counter++)
    }
 }
