import Area from './objects/Area'

const generator = (name: string): Area => {
    return new Area(name);
};

export {
    generator as create
}