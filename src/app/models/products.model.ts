// export class Products {

//     constructor(){
//         this.title='';
//         this.price=0;
//     }
//     id!:Number;
//     title: string = '';
//     description: string = '';
//     category: string = '';
//     price: number = 0;
//     discountPercentage: number = 0;
//     rating: number = 0;
//     stock: number = 0;
//     tags: string[] = [''];
//     brand: string = '';
//     sku: string = '';
//     weight: number = 0;
//     dimensions?: Dimension = new Dimension();
//     warrantyInformation: string = '';
//     shippingInformation: string = '';
//     availabilityStatus: string = '';
//     reviews?: Review[] = [];
//     returnPolicy: string = '';
//     minimumOrderQuantity: number = 0;
//     meta?: Meta = new Meta();
//     images: string = '';
//     thumbnail: string = '';
    
// }

// export class ProductExt {
//     product!: Products[];
//     total!: number;
// }

// export class Dimension {
//     width!: number;
//     depth!: number;
//     height!: number;
// }

// export class Review {
//     rating!: number;
//     comment!: string;
//     date!: Date;
//     reviewerName!: string;
//     reviewerEmail!: string;
// }

// export class Meta {
//     createdAt: Date = new Date();
//     updatedAt: Date = new Date();
//     barcode: string = '';
//     qrCode: string = '';
// }

// ---------------------- LO DE ABAJO FUNCIONABA XD 

export class Products {

    constructor(){
        this.title = '';
        this.description='';
        this.price = 0;
        this.stock = 0;
        this.category= [''];
        this.rating=0;
        this.tags=[''];
    }

    id! : Number;
    title: string;
    description:string;
    price: Number;
    stock:Number;
    category:[String];
    rating:Number;
    tags:[String];
 
}

export class ProductExt {
    products!: Products[]
    total!: number
}

export class Dimension {
    ancho!: number
    largo!:number
    alto!:number
}

export class Review {
    rating!:number
    comment!:string
    date!:Date
    reviewerName!:string
    reviewerEmail!:string
}