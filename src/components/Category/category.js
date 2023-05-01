import Component from "../../core/Component";

export default class Category extends Component {
  setup() {
    const item =
      `
      <button class="category">
        <img src="../public/image/house.png" alt="house">
        <p>나도 갈래</p>
      </button>
      `
    this.state = { items: new Array(10).fill(item) };
  }

  template() {
    const { items } = this.state;
    return `
      <nav>
        <ul>
          <li>
            ${items.map(item =>item).join('')}
          </li>
        </ul>
      </nav>
    `
  }

  setEvent () {
    this.$target.querySelector(".nextButton").addEventListener('click', ({target}) => {
      const {itmes} = this.state;
      this.setState({ items: [...itmes, `item${items.length + 5}` ] });
    })
  }
}