import carpetImage from "../../../assets/optimized/carpet-cleaning.webp";
import upholsteryImage from "../../../assets/images/services/upholstery-cleaning.png";
import mattressImage from "../../../assets/optimized/mattress-cleaning.webp";
import steamImage from "../../../assets/optimized/servicessteam-cleaning.webp.webp";


export interface ServiceItem {

  id: number;

  title: string;

  description: string;

  image: string;

  features: string[];

  fromPrice: string;

  duration: string;

  cta: string;

  popular?: boolean;

}




export const services: readonly ServiceItem[] = [


  {

    id: 1,


    title: "Carpet Cleaning",


    description:

      "Professional carpet cleaning in Winchester using deep extraction methods to remove embedded dirt, stains, allergens and everyday odours. Ideal for homes, families and pet owners.",


    image: carpetImage,


    features: [

      "Deep Dirt & Stain Removal",

      "Pet & Family Friendly",

      "Professional Equipment",

      "Clear Upfront Pricing",

    ],


    fromPrice: "From £60",

    duration: "1–3 hours",


    cta: "Get Carpet Quotation",

  },





  {

    id: 2,


    title: "Upholstery Cleaning",


    description:

      "Professional upholstery cleaning for sofas, armchairs and fabric furniture in Winchester. Restore freshness, comfort and appearance with careful professional treatment.",


    image: upholsteryImage,


    features: [

      "Sofas & Chairs",

      "Fabric Safe Cleaning",

      "Fresh Finish",

      "Family Friendly",

    ],


    fromPrice: "From £30",

    duration: "30–120 mins",


    cta: "Get Upholstery Quotation",

  },





  {

    id: 3,


    title: "Mattress Cleaning",


    description:

      "Deep mattress cleaning designed to reduce dust, allergens and unwanted odours, helping create a fresher and healthier sleeping environment.",


    image: mattressImage,


    features: [

      "Dust & Allergen Reduction",

      "Odour Removal",

      "Deep Cleaning",

      "Fresh Sleeping Environment",

    ],


    fromPrice: "From £30",

    duration: "30–60 mins",


    cta: "Get Mattress Quotation",

  },





  {

    id: 4,


    title: "Chemical-Free Steam Cleaning",


    description:

      "High-temperature dry steam cleaning for kitchens, bathrooms and hard floors using professional equipment with little or no chemicals for powerful cleaning results.",


    image: steamImage,


    features: [

      "Chemical-Free Cleaning",

      "Hard Floor Cleaning",

      "Kitchen & Bathroom",

      "Professional Steam Equipment",

    ],


    fromPrice: "From £60",

    duration: "1–4 hours",


    cta: "Book Steam Cleaning",


    popular: true,

  },


] as const;