document.querySelectorAll('.column h2').forEach(header => {
    header.addEventListener('click', function() {
        const parentColumn = this.parentNode;
        if (parentColumn.classList.contains('expanded')) {
            parentColumn.classList.remove('expanded');
        } else {
            document.querySelectorAll('.column.expanded').forEach(col => col.classList.remove('expanded'));
            parentColumn.classList.add('expanded');
        }
    });
});

document.querySelectorAll('.category h3').forEach(header => {
    header.addEventListener('click', function() {
        // Determine the target state (all should open or all should close)
        const shouldOpen = this.nextElementSibling.style.display !== "block";
        
        let currentElement = this.nextElementSibling;
        while (currentElement && currentElement.tagName !== 'H3') {
            if (shouldOpen) {
                currentElement.style.display = "block";
            } else {
                currentElement.style.display = "none";
            }
            currentElement = currentElement.nextElementSibling;
        }
    });
});
