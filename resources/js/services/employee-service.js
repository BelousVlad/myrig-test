import { convert } from './employee-convert'

export class EmployeeService {

    constructor(base_url = 'http://127.0.0.1:8000/api/') {
        this.base_url = base_url;
    }

    getEmployees()
    {
        return fetch(`${this.base_url}employees`)
        .then(response => {
            if(response.ok)
                return response.json();
            throw "Load error";
        })
        .then(items => items.map(convert))
    }

    deleteEmployee(id, doDelete = false) {
        const url = doDelete ? `${this.base_url}employees/${id}` : `${this.base_url}employees/fake/${id}`;
        return fetch(url, {
            method: 'DELETE',
        })
        .then(response => {
            if(response.ok)
                return response.json();
            throw "Error";
        })
    }
}