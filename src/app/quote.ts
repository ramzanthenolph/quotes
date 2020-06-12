export class Quote {
    showDescription: boolean;
    constructor(public name: string, public author: string, public submitBy: string){
        this.showDescription= false;
    }
}
