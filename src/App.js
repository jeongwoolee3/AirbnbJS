import Category from "./components/Category/category.js";
import ListingCard from "./components/ListingCard/listCard.js";
import Component from "./core/Component.js";


export default class App extends Component{
  
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

    template() {
        return `
            <nav data-component="categroy"></nav>
            <div class="listingContainer" data-component="listingCard"></div>
        
        `;
    }

    mounted() {
        const $category = this.$target.querySelector('[data-component="categroy"]');
        const $listingCard = this.$target.querySelector('[data-component="listingCard"]');

        
        new Category($category);
        new ListingCard($listingCard);


    }

    // constructor() {
    //     const $app = document.querySelector('#app');
    //     new Category($app);
    //     new ListingCard($app);
        
    // }

}
