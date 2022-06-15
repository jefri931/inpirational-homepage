import { createApi } from 'unsplash-js';
import { configData } from '../../config'

const unsplash = createApi({
  accessKey: configData.imageAPIKey,
});

export async function getImages() {
    const result = await unsplash.search.getPhotos(
        { 
            query: 'nature',
            perPage: 10,
            page: 1
        },
    );
    if(result.type === 'success') {
        const response = result.response
        return response
    }

    return []
}
  