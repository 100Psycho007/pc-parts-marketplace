// DOM Elements
const listingsGrid = document.getElementById('listings-grid');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const resultsCount = document.getElementById('results-count');

// State
let listings = [];
let filteredListings = [];

// Fetch listings from JSON file
async function fetchListings() {
    try {
        const response = await fetch('/data/listings.json');
        const data = await response.json();
        listings = data.listings;
        filteredListings = [...listings];
        updateListings();
    } catch (error) {
        console.error('Error fetching listings:', error);
        listingsGrid.innerHTML = `
            <div class="col-span-full text-center text-gray-500 py-12">
                <i class="fas fa-exclamation-circle text-4xl mb-4"></i>
                <p>Error loading listings. Please try again later.</p>
            </div>
        `;
    }
}

// Create HTML for a single listing card
function createListingCard(listing) {
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-200">
            ${listing.promoted ? `
                <div class="promoted-badge text-white text-sm font-semibold px-4 py-1 absolute right-0 m-4 rounded-full">
                    <i class="fas fa-star mr-1"></i> Featured
                </div>
            ` : ''}
            <img src="${listing.image}" alt="${listing.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${listing.title}</h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${listing.description}</p>
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-blue-600">₹${listing.price.toLocaleString('en-IN')}</span>
                    <span class="text-sm text-gray-500">${listing.condition}</span>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span class="text-sm text-gray-500">
                        <i class="fas fa-user-circle mr-1"></i>
                        ${listing.seller}
                    </span>
                    <span class="text-sm text-gray-500">
                        <i class="far fa-clock mr-1"></i>
                        ${new Date(listing.postedDate).toLocaleDateString()}
                    </span>
                </div>
                <a href="/product.html?id=${listing.id}" 
                   class="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    View Details
                </a>
            </div>
        </div>
    `;
}

// Update listings based on current filters and search
function updateListings() {
    // Filter listings
    filteredListings = listings.filter(listing => {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value.toLowerCase();
        
        const matchesSearch = listing.title.toLowerCase().includes(searchTerm) || 
                            listing.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryValue || listing.category.toLowerCase() === categoryValue;
        
        return matchesSearch && matchesCategory;
    });

    // Sort listings
    switch(sortFilter.value) {
        case 'promoted':
            filteredListings.sort((a, b) => (b.promoted ? 1 : 0) - (a.promoted ? 1 : 0));
            break;
        case 'price-low':
            filteredListings.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredListings.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredListings.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
            break;
    }

    // Update results count
    resultsCount.textContent = filteredListings.length;

    // Render listings
    listingsGrid.innerHTML = filteredListings.length > 0
        ? filteredListings.map(listing => createListingCard(listing)).join('')
        : `
            <div class="col-span-full text-center text-gray-500 py-12">
                <i class="fas fa-search text-4xl mb-4"></i>
                <p>No listings found matching your criteria.</p>
            </div>
        `;
}

// Event listeners
searchInput.addEventListener('input', updateListings);
categoryFilter.addEventListener('change', updateListings);
sortFilter.addEventListener('change', updateListings);

// Initialize
fetchListings();