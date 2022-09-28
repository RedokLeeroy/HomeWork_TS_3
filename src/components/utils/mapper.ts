import { IData } from "../../interfaces";



export const mapper = (images: { hits: Partial<IData>[]; }): Partial<IData>[] => { //123
  return images.hits.map(({ largeImageURL, webformatURL, id }): Partial<IData> => ({
    largeImageURL,
    webformatURL,
    id,
  }));
};
