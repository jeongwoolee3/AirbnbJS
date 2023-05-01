import Category from "./components/Category/category.js";


export default class App{
  
    // template () {
    //     return `
    //         <nav data-component="Category"></nav>
    //     `;
    // }

    // mounted () {
    //     const {} = this;
    //     const $category = this.$target.querySelector('[data-component="Category"]');

    //     new Category($category, {

    //     })
    // }

    constructor() {
        const $app = document.querySelector('#app');
        new Category($app);
    }

}

new App();