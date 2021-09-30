import http from '@/core/http-common'

class EventService {
    endPoint = '/events'

    getAll()
    {
        return http.get(this.endPoint);
    }

    getById()
    {
        return http.get(url: `${this.endPoint}/#{id}`);
    }
    create(createEventDto){
        return http.post(this.endPint, createEventDto);
    }
    update(id, updateEventDto){
        return http.put(url: `${this.endPint}/${id}`,updateEventDto);
    }

    delete(id){
        return http.delete(url: `${this.endPoint}/${id}`);
    }
    findByTittle(tittle){
        return http.get(url: `${this.endPoint}?tittle=${tittle}`);
    }

}

export default new EventService();