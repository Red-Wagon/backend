class HelloWorldService {
    generateMessage (name) {
        return `Hello, ${name ?? 'mind telling me your name?'}`
    }
}

export default HelloWorldService