class Base{
    constructor(){
        if (new.target === Base) throw new Error("Abstracta");

    }
}

new Base();