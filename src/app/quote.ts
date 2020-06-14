export class Quote {
    showDescription: boolean;
    constructor(public id: number, public name: string, public author: string, public submitBy: string, public likes: number, public dislikes: number){
        this.showDescription= false;
    }
}
