import http from '@/core/http-common'

class EventsService {

    endPoint = '/events';

    getAll()
    {
        return http.get(this.endPoint);
    }

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }

    create(createEventDto){
        return http.post(this.endPoint, createEventDto);
    }

    update(id, updateEventDto)
    {
        return http.put(`${this.endPoint}/${id}`,updateEventDto);
    }

    delete(id)
    {
        return http.delete(`${this.endPoint}/${id}`);
    }

    findByTittle(tittle){
        return http.get(`${this.endPoint}?tittle=${tittle}`);
    }

}

export default new EventsService();