const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')



tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContents.forEach( tabContent => {
            tabContent.classList.remove('active')
        })

        tabs.forEach( tab => {
            tab.classList.remove('active')
        })

        target.classList.add('active')
        tab.classList.add('active')
    })
})

//highlight selected list item
document.addEventListener('DOMContentLoaded', function() {
    let listItems = document.querySelectorAll('.ct-content');
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'selected' class from all items
            listItems.forEach(li => {
                li.classList.remove('selected');
            });
            // Add 'selected' class to the clicked item
            this.classList.add('selected');
        });
    });
});
