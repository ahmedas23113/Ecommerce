export interface Product {
  _id:string;
  description:string;
  title:string;
  price:number;
  ratingsAverage:number;
  imageCover:string;
  category:category;
}

interface category
{
  _id:string;
  name:string;
  slug:string;
  image:string;
}
