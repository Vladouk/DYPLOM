import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-api-url.com/api', // Replace with your API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchServices = async () => {
    try {
        const response = await apiClient.get('/services');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching services: ' + error.message);
    }
};

export const bookService = async (serviceId, bookingData) => {
    try {
        const response = await apiClient.post(`/services/${serviceId}/book`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error booking service: ' + error.message);
    }
};