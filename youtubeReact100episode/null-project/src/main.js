
class App {
    run = async (name = 'uRA') => {
        console.log(`мое имя ${name}`)
    }

}

const app = new App()
app.run().then(() => console.log('done'))
    .catch((e) => console.log(e))