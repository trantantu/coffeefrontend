import createApiClient from "./api.service";
class ThucUongService {
    constructor(baseUrl = "/api/thucuong") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async createthucuong(data) {
        return (await this.api.post("/", data)).data;
    }
    async deleteAllthucuong() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async updatethucuong(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async deletethucuong(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}
export default new ThucUongService();