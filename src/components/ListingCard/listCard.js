import Component from "../../core/Component.js";
import getRandomImage from "../../api/randomImage.js";



const ItemGenerator = (index) => {
	return `
	<div class="grid-item">
		<div class="itemImg">
			<img src="https://picsum.photos/500/500?random=${indx}" alt="Image 1">
		</div>
		<div class="itemImg">
			<img src="https://picsum.photos/500/500?random=2" alt="Image 1">
		</div>
		<div class="itemImg">
			<img src="https://picsum.photos/500/500?random=3" alt="Image 1">
		</div>
		<div class="overlay">
			<div class="overlay-content"> 
				<button class="prevImgBtn">Prev</button>
				<button class="nextImgBtn">Next</button>
			</div>
		</div>
	</div>
	`;

}

export default class ListingCard extends Component {

    setup() {

			const imageUrls = getRandomImage();
			
			const item = imageUrls.map((url) => {
				return(`
				<div class="grid-item">
					<div class="itemImg">
						<img src=${url[0]} alt="Image 1">
					</div>
					<div class="itemImg">
						<img src=${url[1]} alt="Image 2">
					</div>
					<div class="itemImg">
						<img src=${url[2]} alt="Image 3">
					</div>
					<div class="overlay">
						<div class="overlay-content"> 
							<button class="prevImgBtn">Prev</button>
							<button class="nextImgBtn">Next</button>
						</div>
					</div>
				</div>
				`);
		
			})

        this.state = { items: item};
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
    
		setEvent () {

			const prevImgBtn = document.querySelector('.prevImgBtn:first-of-type');
			const nextImgBtn = document.querySelector('.nextImgBtn:last-of-type');
			const itemImg = document.querySelectorAll('.itemImg');
			const scroll = document.documentElement.scrollTop;

			let currentPosition = 0;
			const maxPosition = itemImg.length - 1;

			prevImgBtn.addEventListener('click', () => {
				if (currentPosition > 0) {
					currentPosition--;
					itemImg.forEach((img) => {
						img.style.transform = `translateX(-${currentPosition * 100}%)`;
					});
				}
			});

			nextImgBtn.addEventListener('click', () => {
				console.log(scroll);
				if (currentPosition < maxPosition) {
					currentPosition++;
					itemImg.forEach((img) => {
						img.style.transform = `translateX(-${currentPosition * 100}%)`;
					});
				}
			});

			document.addEventListener('scroll', () => {
				if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
					const {items} = this.state;
					const imageUrls = getRandomImage();
			
					const item = imageUrls.map((url) => {
							return(`
							<div class="grid-item">
								<div class="itemImg">
									<img src=${url[0]} alt="Image 1">
								</div>
								<div class="itemImg">
									<img src=${url[1]} alt="Image 2">
								</div>
								<div class="itemImg">
									<img src=${url[2]} alt="Image 3">
								</div>
								<div class="overlay">
									<div class="overlay-content"> 
										<button class="prevImgBtn">Prev</button>
										<button class="nextImgBtn">Next</button>
									</div>
								</div>
							</div>
							`);
					})
					this.setState({ items: [...items, item.join('')] });
					
				}
			})

	 }
}