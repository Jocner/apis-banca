export const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'User API',
            version: '1.0.0',
            description: "API library express"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
}