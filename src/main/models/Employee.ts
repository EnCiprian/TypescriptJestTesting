import { Guid } from 'guid-typescript';

class Employee {
    private name: string;
    private salary: number;
    private id: string;

    constructor(theName:String) {
        
    }

    setName(theName: string) {
        this.name = theName;
    }

    setSalary(theSalary: number) {
        this.salary = theSalary;
    } 


}