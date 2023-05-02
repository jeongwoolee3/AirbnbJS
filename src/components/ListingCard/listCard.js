import Component from "../../core/Component.js";

export default class Category extends Component {

    setup() {
        const item = `
        <div class="grid-item">
          <img src="https://picsum.photos/id/1018/500/500" alt="Image 1">
          <div class="overlay">
            <div class="overlay-content">
              <button class="btn">Prev</button>
              <button class="btn">Next</button>
            </div>
          </div>
        </div>
        `
        this.state = { items: new Array(4).fill(item) };
    }

    template() {
        const { items } = this.state;
        return `
        	<div class="listingContainer">
						<div class="grid">
              ${items.map(item =>item).join('')}
            </div>
          </div>
    
        `
      }
    
}