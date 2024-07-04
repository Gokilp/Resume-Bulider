document.getElementById('add-achievement-btn').addEventListener('click', function() {
    // Create a new section element
    const newSection = document.createElement('section');
    newSection.classList.add('achievement-section');

    // Add HTML content to the new section
    newSection.innerHTML = `

        <form>
            <div class="form-group">
                <label for="achievement-title">Title</label>
                <input type="text" class="achievement-title" placeholder="Title" />
            </div>
            <div class="form-group">
                <label for="achievement-description">Description</label>
                <input type="text" class="achievement-description" placeholder="Description" />
            </div>
        </form>
    `; 

    // Append the new section to the achievement container
    document.getElementById('achievement-container').appendChild(newSection);
});
