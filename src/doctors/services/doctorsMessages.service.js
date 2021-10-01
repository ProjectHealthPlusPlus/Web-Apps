import http from '@/core/http-common'

class DoctorsMessageService {
    endPoint = 'doctorMessages';

    getAll() {
        return http.get(this.endPoint);
    }

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }

    create(createMessageDto) {
        return http.pos(this.endPoint, createMessageDto);
    }

    update(id, updateMessageDto) {
        return http.put(`${this.endPoint}/${id}`, updateMessageDto);
    }

    delete(id) {
        return http.delete(`${this.endPoint}/${id}`);
    }

    findByTitle(title) {
        return http.get(`${this.endPoint}?title=${title}`);
    }
}

export default new DoctorsMessageService();
