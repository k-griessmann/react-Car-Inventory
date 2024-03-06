const token = 'fee5c11612bfcde5c2a3e390d469fdc12499d55e7e269b1e'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://car-inventory-8odc.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-8odc.onrender.com/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        });

        if (!response.ok){
            throw new Error('Failed to post data to the server')
        }

        return await response.json()
    },

    update: async (id: string, data:any ={}) => {
        const response = await fetch(`https://car-inventory-8odc.onrender.com/api/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)


        });

        if (!response.ok){
            throw new Error('Failed to change data to the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://car-inventory-8odc.onrender.com/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },


        });

        if (!response.ok){
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}