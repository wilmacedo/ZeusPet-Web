import React, { useEffect } from 'react';
import './styles.css';

const images = [
  {
    name: 'Zeus',
    image: require('../../assets/dog.png'),
    cropped: require('../../assets/cropped-dog.png'),
    style: {}
  },
  {
    name: 'Cat',
    image: require('../../assets/cat.png'),
    cropped: require('../../assets/cropped-cat.png'),
    style: { height: 274 }
  }
];

const Slogan = (props) => {
  const {
    petName
  } = props;

  useEffect(() => {
    for (const item in images) {
      let pet = images[item];

      if (pet.name !== petName) {
        document
          .getElementById(pet.name + '-image')
          .classList.add('slogan-image-hidden');
      } else {
        let component = document.getElementById(pet.name + '-image');

        component.classList.remove('slogan-image-hidden');
        component.animate([
          {
            opacity: 0,
            transform: 'translateX(40px)'
          },
          {
            opacity: 1,
            transform: 'translateX(0)'
          }
        ], 1000);
      }
    }
  }, [petName]);

  return (
    <div className="slogan-container">
      <div className="slogan-text">
        <h1>
          Obtenha controle total do seu melhor amigo!
        </h1>
        <h4>
          Adicione compras, veja gastos, confira datas e muito mais em uma única plataforma!
        </h4>
      </div>
      <div className="slogan-image-container">
        {images.map((item, _) => {
          return <img
            id={item.name + '-image'}
            className="slogan-image"
            src={item.image.default}
            alt={item.name}
            style={item.style}
          />
        })}
      </div>
    </div>
  );
}

export default Slogan;