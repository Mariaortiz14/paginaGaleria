document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
});
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentNode;
        accordionItem.classList.toggle('active');
        const accordionContent = accordionItem.querySelector('.accordion-content');
        if (accordionItem.classList.contains('active')) {
            accordionContent.style.display = 'block';
        } else {
            accordionContent.style.display = 'none';
        }
    });
});
