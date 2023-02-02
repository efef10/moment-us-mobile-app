const BASE_URL = 'https://a9ef-95-86-95-108.eu.ngrok.io';
const IMAGES_JOBS_URL = BASE_URL + '/jobs/images'
import axios from 'axios';

export async function preStartAutoSelection(userId, title, selectedImages) {
    try {
        const PRE_START_URL = '/auto-selection/pre-start';
        const body = {
            userId,
            jobItems: selectedImages,
            title,
        };
        return (await axios.post(`${IMAGES_JOBS_URL}${PRE_START_URL}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })).data
    }
    catch (err) {
        throw new Error(err)
    }
}

export async function analyzeWithPaging(images, userId, jobId, pageNumber) {
    const body = new FormData();
    images.forEach((file) => {
        body.append('images', file);
    });
    const START_URL = '/auto-selection/analyze-with-pagination';

    return (await axios.post(`${IMAGES_JOBS_URL}${START_URL}?jobId=${jobId}&userId=${userId}&pageNumber=${pageNumber}`, body, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })).data
}

export async function startAutoSelection(images, jobId, userId, pageNumber) {
    const body = new FormData();
    images.forEach((file) => {
        body.append('images', file);
    });
    const START_URL = '/auto-selection/start';

    return (await axios.post(`${IMAGES_JOBS_URL}${START_URL}?jobId=${jobId}&userId=${userId}&pageNumber=${pageNumber}`, body, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })).data
}

export async function getBestResults(jobId, userId, count) {
    const START_URL = '/auto-selection/results';
    return (await axios.get(`${IMAGES_JOBS_URL}${START_URL}?jobId=${jobId}&userId=${userId}&count=${count}`)).data
}