
document.addEventListener('DOMContentLoaded', function() {
    
   
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('enlarged-img');
    const closeBtn = document.querySelector('.close-btn');

    const galleryImages = document.querySelectorAll('.photo-item img');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            
            modal.style.display = "block";
          
            modalImg.src = this.src;
         
            modalImg.alt = this.alt;
            
           
            document.body.style.overflow = 'hidden'; 
        });
    });

    
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    
    modal.addEventListener('click', function(event) {

        if (event.target === modal) {
            closeModal();
        }
    });
    
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === "block") {
            closeModal();
        }
    });

   
    function closeModal() {
        modal.style.display = "none";
       
        document.body.style.overflow = 'auto';
    }
});