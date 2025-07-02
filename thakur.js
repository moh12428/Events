document.addEventListener("DOMContentLoaded", () => {
  const events = [
    { title: "Music Concert", date: "June 10, 2025", place: "Sector 18, Noida", description: "Live music by local bands." },
    { title: "Art Exhibition", date: "June 11, 2025", place: "Lodhi Art District, Delhi", description: "Showcasing local artists." },
    { title: "Book Fair", date: "June 12, 2025", place: "Pragati Maidan, Delhi", description: "Books from various publishers and authors." },
    { title: "Food Truck Festival", date: "June 13, 2025", place: "Sector 62, Noida", description: "Tasty street food and live DJ." },
    { title: "Dance Competition", date: "June 14, 2025", place: "Connaught Place, Delhi", description: "Solo and group dance battle." },
    { title: "Startup Meetup", date: "June 15, 2025", place: "Cyber Hub, Gurugram", description: "Meet founders and investors." },
    { title: "Yoga Workshop", date: "June 16, 2025", place: "Sector 50, Noida", description: "Relax and stretch with professionals." },
    { title: "Stand-Up Comedy", date: "June 17, 2025", place: "Saket, Delhi", description: "Laugh with top Indian comedians." },
    { title: "Photography Walk", date: "June 18, 2025", place: "Hauz Khas Village, Delhi", description: "Explore and click heritage spots." },
    { title: "Eco Fest", date: "June 19, 2025", place: "Green Park, Delhi", description: "Eco products, organic stalls & awareness." },
    { title: "Coding Hackathon", date: "June 20, 2025", place: "Sector 128, Noida", description: "24hr coding challenge for techies." },
    { title: "Charity Marathon", date: "June 21, 2025", place: "India Gate, Delhi", description: "Run for a cause." },
    { title: "Tech Expo", date: "June 22, 2025", place: "Knowledge Park, Greater Noida", description: "Showcase of new innovations." },
    { title: "Street Theatre", date: "June 23, 2025", place: "Kamla Nagar, Delhi", description: "Raw street performances." },
    { title: "Pet Adoption Drive", date: "June 24, 2025", place: "DLF Phase 3, Gurugram", description: "Adopt and support homeless pets." },
    { title: "Anime Fan Meetup", date: "June 25, 2025", place: "Saket Mall, Delhi", description: "Cosplay and anime merch." },
    { title: "Career Counseling", date: "June 26, 2025", place: "Sector 15, Noida", description: "For students and job seekers." },
    { title: "Poetry Slam", date: "June 27, 2025", place: "Cafe Poetry, Delhi", description: "Open mic for poets." },
    { title: "Chess Tournament", date: "June 28, 2025", place: "Sector 22, Noida", description: "All levels welcome." },
    { title: "Home Decor Expo", date: "June 29, 2025", place: "NSIC Grounds, Okhla", description: "Everything home & garden." },
    { title: "Dance Flashmob", date: "June 30, 2025", place: "DLF Mall, Noida", description: "Surprise dance in public." },
    { title: "Kids Carnival", date: "July 1, 2025", place: "Galleria Market, Gurugram", description: "Games, toys, and magic shows." },
    { title: "Handicraft Mela", date: "July 2, 2025", place: "INA Market, Delhi", description: "Handmade goods & ethnic art." },
    { title: "Science Fair", date: "July 3, 2025", place: "Amity University, Noida", description: "Projects by school & college students." },
    { title: "Bike Rally", date: "July 4, 2025", place: "Yamuna Expressway", description: "Morning ride for all bikers." },
    { title: "Spiritual Talk", date: "July 5, 2025", place: "ISKCON Temple, Noida", description: "Talk on mental peace & yoga." },
    { title: "Fashion Show", date: "July 6, 2025", place: "Select Citywalk, Delhi", description: "Models showcasing new collections." },
    { title: "Drama Play", date: "July 7, 2025", place: "Kamani Auditorium, Delhi", description: "Stage play on social themes." },
    { title: "Gaming LAN Party", date: "July 8, 2025", place: "GameZon, Noida", description: "PC, console & VR competitions." },
    { title: "Cultural Parade", date: "July 9, 2025", place: "Rajpath, Delhi", description: "Colorful parade by various states." }
  ];

  const eventsList = document.getElementById('events-list');
  const eventDetail = document.getElementById('event-detail');
  const eventTitle = document.getElementById('event-title');
  const eventDatePlace = document.getElementById('event-date-place');
  const eventDescription = document.getElementById('event-description');

  events.forEach((event, index) => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.innerHTML = `
      <strong>${event.title}</strong><br>
      <small>${event.date} - ${event.place}</small>
    `;
    eventDiv.onclick = () => showDetails(index);
    eventsList.appendChild(eventDiv);
  });

  function showDetails(index) {
    const event = events[index];
    eventTitle.textContent = event.title;
    eventDatePlace.textContent = `${event.date} at ${event.place}`;
    eventDescription.textContent = event.description;
    eventDetail.classList.remove('hidden');
  }

  window.closeDetails = function () {
    eventDetail.classList.add('hidden');
  };
});

