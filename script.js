// Testimonial data
const testimonials = [
    {
        quote: "Told them I needed a full ML model with deployment in 3 days. They laughed. Then did it in 1. I think they sold their soul.",
        name: "Overachiever Turned Believer",
        location: "Sleman",
        avatar: "OT"
    },
    {
        quote: "Dropped out mentally mid-semester. Sent them the syllabus, got back a full analytics report. My prof questioned their own methods.",
        name: "Analytics Anxious",
        location: "Jakarta",
        avatar: "AA"
    },
    {
        quote: "Needed cloud help. They scaled it like a SaaS startup on Red Bull. Not sure if this is even legal.",
        name: "Sky High Hustler",
        location: "Bandung",
        avatar: "SH"
    },
    {
        quote: "Wanted a full-stack app in a week. They delivered overnight with CI/CD and dark mode. The code glows. Might be alive.",
        name: "Framework Fumbler",
        location: "Surabaya",
        avatar: "FF"
    },
    {
        quote: "ML almost killed me. Blinked, boom — working model, clean data, live dashboard. Witchcraft confirmed.",
        name: "ML Meltdown Survivor",
        location: "Denpasar",
        avatar: "ML"
    },
    {
        quote: "Prof asked for real-world cloud infra. They deployed autoscaling GCP like it’s a game. Even the TA begged for the diagram.",
        name: "Cloud Camp Casualty",
        location: "Yogyakarta",
        avatar: "CC"
    },
    {
        quote: "Sent them trash JSON and a weak prompt. Got back an ML model that detects sarcasm. It might be alive. I named it Kevin.",
        name: "Prompt Goblin",
        location: "Semarang",
        avatar: "PG"
    },
    {
        quote: "Capstone panic? They built analytics that predicts user churn like a psychic. My lecturer thinks I joined a startup.",
        name: "Data Deceiver",
        location: "Malang",
        avatar: "DD"
    },
    {
        quote: "Asked for a dashboard. Got a full analytics suite with real-time updates. Now my lecturer wants to publish it.",
        name: "Just Here for 60",
        location: "Medan",
        avatar: "60"
    },
    {
        quote: "Begged for backend help. Got a full REST API with docs and rate limits. Prof offered me an internship.",
        name: "Backend Beggar",
        location: "Padang",
        avatar: "BB"
    },
    {
        quote: "Was failing ML. They made a model, slides, voiceover — and taught me the math. I got an A and emotional damage.",
        name: "Academic Impostor",
        location: "Makassar",
        avatar: "AI"
    }
];
let currentIndex = 0;

function updateTestimonial(index) {
    const quoteEl = document.getElementById('testimonial-quote');
    const nameEl = document.getElementById('testimonial-name');
    const locationEl = document.getElementById('testimonial-location');
    const avatarEl = document.querySelector('.author-avatar span');

    quoteEl.textContent = `"${testimonials[index].quote}"`;
    nameEl.textContent = testimonials[index].name;
    locationEl.textContent = testimonials[index].location;
    avatarEl.textContent = testimonials[index].avatar;
}

function showPrevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
}

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}

// Initial render
updateTestimonial(currentIndex);

// Auto-scroll
let autoScrollInterval;
const testimonialContainer = document.querySelector('.testimonial-container');

function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(() => {
        showNextTestimonial();
    }, 5000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

testimonialContainer.addEventListener('mouseenter', stopAutoScroll);
testimonialContainer.addEventListener('mouseleave', startAutoScroll);

// Start langsung
startAutoScroll();










function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});






