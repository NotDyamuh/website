document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab and the corresponding content
            tab.classList.add('active');
            const target = document.querySelector(tab.getAttribute('href'));
            target.classList.add('active');
        });
    });

    // Activate the default tab
    tabs[0].click();

    // Handle exploit title clicks
    const exploitTitles = document.querySelectorAll('#exploits a');
    exploitTitles.forEach(title => {
        title.addEventListener('click', (event) => {
            event.preventDefault();
            // Remove active class from all contents
            tabContents.forEach(content => content.classList.remove('active'));
            const target = document.querySelector(title.getAttribute('href'));
            target.classList.add('active');
        });
    });
});





