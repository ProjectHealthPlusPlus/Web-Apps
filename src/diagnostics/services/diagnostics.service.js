import http from '@/core/http-common'

class DiagnosticsService {
    endPoint = 'diagnostics';

    getAll() {
        return http.get(this.endPoint);
    }

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }

    create(createDiagnosticDto) {
        return http.pos(this.endPoint, createDiagnosticDto);
    }

    update(id, updateDiagnosticDto) {
        return http.put(`${this.endPoint}/${id}`, updateDiagnosticDto);
    }

    delete(id) {
        return http.delete(`${this.endPoint}/${id}`);
    }

    findByPatientId(patientId) {
        return http.get(`${this.endPoint}?patientId=${patientId}`);
    }

}

export default new DiagnosticsService();
