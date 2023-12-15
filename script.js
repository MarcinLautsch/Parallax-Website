const text = document.getElementById('text')
const leaf = document.getElementById('leaf')
const hill1 = document.getElementById('hill1')
const hill4 = document.getElementById('hill4')
const tree = document.getElementById('tree')
const hill5 = document.getElementById('hill5')
const footerYears = document.getElementById('footerYear')

window.addEventListener('scroll', () => {
	let value = window.scrollY

	text.style.marginTop = value * 2 + 'px'
	leaf.style.top = value * -1.5 + 'px'
	leaf.style.left = value * 1.5 + 'px'
	hill4.style.left = value * -1.5 + 'px'
	tree.style.top = value * 0.6 + 'px'
	hill5.style.left = value * 1.5 + 'px'
	hill1.style.top = value * 0.4 + 'px'
})

// -------------- Accordion Carusel ------------

const accordion = document.querySelector('.accordion')

accordion.addEventListener('click', e => {
	const activePanel = e.target.closest('.accordion-panel')
	if (!activePanel) return
	toggleAccordion(activePanel)
})

function toggleAccordion(panelToActivate) {
	const buttons = panelToActivate.parentElement.querySelectorAll('button')
	const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content')

	buttons.forEach(button => {
		button.setAttribute('aria-expanded', false)
	})

	contents.forEach(content => {
		content.setAttribute('aria-hidden', true)
	})

	panelToActivate.querySelector('button').setAttribute('aria-expanded', true)

	panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false)
}

//zmienia date w footerze funkcja

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYears.innerText = year
}

handleCurrentYear()

// --------------------------------------------
//funkcja żeby po kliknięciu np. cenny smoth cursor zatrzymywał sie na '#sekcja cenny'

document.querySelectorAll('.navBar a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault() // Zapobiega domyślnemu zachowaniu przeglądarki po kliknięciu linka

		const sectionId = this.getAttribute('href') // Pobiera wartość atrybutu href z klikniętego linku
		const targetSection = document.querySelector(sectionId) // Znajduje element o pasującym selektorze (sectionId)

		let offsetTop = 0 // Ustawienie domyślnego przewinięcia strony na górę

		// Jeśli kliknięty link nie jest linkiem do strony głównej i sekcja docelowa istnieje
		if (sectionId !== '#' && targetSection) {
			offsetTop = targetSection.offsetTop - 80 // Przesunięcie uwzględniające nagłówek
		}

		// Przewijanie strony do odpowiedniego miejsca
		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth', // Płynne przewijanie strony
		})

		// Dodatkowa logika dla linku "Home" - przewinięcie do góry strony
		if (sectionId === '#home') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	})
})

// opis funkcji--------------------

// 1. querySelectorAll: Pobiera wszystkie linki wewnątrz elementu z klasą .navBar, które zawierają atrybut href zaczynający się od #.

// 2. forEach: Iteruje po każdym znalezionym elemencie.

// 3. addEventListener: Dodaje nasłuchiwanie na zdarzenie kliknięcia dla każdego znalezionego linku.

// 4. e.preventDefault(): Uniemożliwia domyślne działanie przeglądarki po kliknięciu linku.

// 5. getAttribute('href'): Pobiera wartość atrybutu href z klikniętego linku.

// 6. document.querySelector(sectionId): Znajduje element na stronie odpowiadający pobranemu sectionId.

// 7. if (sectionId !== '#' && targetSection): Sprawdza, czy kliknięty link nie jest linkiem do strony głównej i czy znaleziono sekcję docelową.

// 8.offsetTop: Oblicza wartość przesunięcia strony do odpowiedniej sekcji z uwzględnieniem dodatkowego odstępu dla nagłówka.

// 9. window.scrollTo(): Wykonuje przewinięcie strony do odpowiedniego miejsca z uwzględnieniem płynnego zachowania.

// 10. if (sectionId === '#'): Sprawdza, czy kliknięty link to link do strony głównej ('#'). W takim przypadku przewija stronę na samą górę.

// Ta funkcja jest odpowiedzialna za płynne przewijanie strony do odpowiednich sekcji w zależności od klikniętego linku w nawigacji.

