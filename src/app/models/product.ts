export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;

    constructor(id:number, name: string, description= "", price=0, imgUrl="https://contents.mediadecathlon.com/p1249301/kc9ce65011efb653d4f550fd1cf5046b4/1249301_default.jpg?format=auto&quality=60&f=800x0") {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
    }
}
