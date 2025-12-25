// app.js
// Main application logic for Christmas Wish Box

let openedBoxes = new Set();
let currentWish = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    createWishBoxes();
    loadProgress();
});

// Create all wish boxes
function createWishBoxes() {
    const container = document.getElementById('wishBoxes');
    
    for (let i = 1; i <= allWishes.length; i++) {
        const box = document.createElement('div');
        box.className = 'wish-box';
        box.setAttribute('data-box-number', i);
        
        const number = document.createElement('div');
        number.className = 'wish-box-number';
        number.textContent = i;
        
        box.appendChild(number);
        box.addEventListener('click', function() {
            openWishBox(i);
        });
        
        container.appendChild(box);
    }
}

// Open a wish box
function openWishBox(boxNumber) {
    const box = document.querySelector(`[data-box-number="${boxNumber}"]`);
    
    if (openedBoxes.has(boxNumber)) {
        // If already opened, just show the wish again
        showWish(boxNumber);
    } else {
        // Mark as opened
        openedBoxes.add(boxNumber);
        box.classList.add('opened');
        updateCount();
        saveProgress();
        showWish(boxNumber);
    }
}

// Show wish in modal
function showWish(boxNumber) {
    currentWish = allWishes[boxNumber - 1];
    const modal = document.getElementById('wishModal');
    const wishText = document.getElementById('wishText');
    
    wishText.textContent = currentWish;
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('wishModal');
    modal.classList.remove('active');
}

// Copy wish to clipboard
function copyWish() {
    navigator.clipboard.writeText(currentWish).then(function() {
        showCopiedNotification();
    }).catch(function(err) {
        console.error('Failed to copy:', err);
    });
}

// Share wish
function shareWish() {
    if (navigator.share) {
        navigator.share({
            title: 'AYF Christmas Wish',
            text: currentWish,
        }).catch(function(err) {
            console.log('Share cancelled or failed:', err);
        });
    } else {
        // Fallback to copy
        copyWish();
    }
}

// Show copied notification
function showCopiedNotification() {
    const notification = document.getElementById('copiedNotification');
    notification.classList.add('show');
    
    setTimeout(function() {
        notification.classList.remove('show');
    }, 2000);
}

// Update opened count
function updateCount() {
    const countElement = document.getElementById('openedCount');
    countElement.textContent = openedBoxes.size;
}

// Save progress to local storage
function saveProgress() {
    const progress = Array.from(openedBoxes);
    localStorage.setItem('ayf_opened_wishes', JSON.stringify(progress));
}

// Load progress from local storage
function loadProgress() {
    const saved = localStorage.getItem('ayf_opened_wishes');
    
    if (saved) {
        const progress = JSON.parse(saved);
        openedBoxes = new Set(progress);
        
        // Mark boxes as opened
        progress.forEach(function(boxNumber) {
            const box = document.querySelector(`[data-box-number="${boxNumber}"]`);
            if (box) {
                box.classList.add('opened');
            }
        });
        
        updateCount();
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('wishModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
