// Resimlerin olduğu diziyi tanımlıyoruz
const images = [
    {
      preview: 'images/1.jpg',
      original: 'images/1.jpg',
      description: 'Beyaz Çiçekler - Bu resim içerisinde beyaz çiçekler bulunuyor.',
    },
    {
      preview: 'images/2.jpg',
      original: 'images/2.jpg',
      description: 'Göl Manzarası - Güzel bir göl manzarası ve iskele.',
    },
    {
      preview: 'images/3.jpg',
      original: 'images/3.jpg',
      description: 'Yıldızlar - Gökyüzüne baktığımızda görmek istediğimiz bir yıldız dizilimi.',
    },
    {
      preview: 'images/4.jpg',
      original: 'images/4.jpg',
      description: 'Renk Parçacıkları - 5 rengin uyum içinde olduğu parçalar.',
    },
    {
      preview: 'images/5.jpg',
      original: 'images/5.jpg',
      description: 'Işık Topları - Objektife yansımış güzel ışık topları.',
    },
    {
      preview: 'images/6.jpg',
      original: 'images/6.jpg',
      description: 'Gece Işık Topları - Gece objektifine yansımış ışık topları.',
    },
    {
      preview: 'images/7.jpg',
      original: 'images/7.jpg',
      description: 'Parşömen Kağıdı - Eski zamanlarda yazı için kullanılan bir kağıt türü.',
    },
    {
      preview: 'images/8.jpg',
      original: 'images/8.jpg',
      description: 'Tuğla Duvar - Çimlerin üzerinden çekilmiş tuğla bir duvar görüntüsü.',
    },
    

  ];
  

  const gallery = document.querySelector('.gallery');
  

  const galleryItems = images.map(({ preview, original, description }) => {
    return `
      <li class="gallery-item">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"  <!-- Açıklama alt etiketinde -->
        />
      </li>
    `;
  }).join('');

  gallery.innerHTML = galleryItems;

  gallery.addEventListener('click', event => {
    event.preventDefault();
  
  
    if (event.target.nodeName !== 'IMG') return;
  
    const largeImageURL = event.target.dataset.source; 
    const description = event.target.alt;
    const instance = basicLightbox.create(`
      <div class="modal-content">
        <img src="${largeImageURL}" alt="${description}">
        <p class="modal-description">${description}</p> <!-- Açıklama burada gösterilecek -->
      </div>
    `, {
      closable: true 
    });
  
    instance.show();
  

    document.querySelector('.modal-content').addEventListener('click', () => {
      instance.close();
    });
  
   
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        instance.close(); 
      }
    });
  });