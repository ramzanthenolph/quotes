export class Quote {
    showDescription: boolean;
    constructor(public id: number, public name: string, public author: string, public submitBy: string, public likes: number, public dislikes: number, public uploadDate: Date){
        this.showDescription= false;
    }
}
