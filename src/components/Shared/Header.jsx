import React from 'react';

const list = [
	'Cправочник',
	'Таблицы',
	'Формулы',
	'О нас'
]


const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				Learn Math
			</div>
			<div className="header__list">
				{list.map(item => (
					<div className="header__link" key={item}>{item}</div>
				))}
			</div>
			<div className="header__search">
				<div className="header__search-icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style={{ backgroundColor: 'transparent' }}>
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg>

				</div>
				<input type="text" className="header__search-input" placeholder='Search' />
			</div>
			<div className="header__btns">
				<button className="header__btn">войти</button>
				<button className="header__btn white">регистрация</button>
			</div>
		</div>
	);
};

export default Header;