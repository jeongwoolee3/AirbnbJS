import Component from "../../core/Component.js";

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
        <button class="nextButton">
            <img src="../public/image/nextButton.png" alt="house">
        </button>
      </nav>

    `
  }

  setEvent () {
    this.$target.querySelector('.nextButton').addEventListener('click', ({target}) => {
      const {items} = this.state;
      const item =
      `
      <button class="category">
        <img src="../public/image/house.png" alt="house">
        <p>새로 추가</p>
      </button>
      `
      this.setState({ items: [...items, item ] });
    })
  }
}