// Sample athletic program data for Ironhawk High School.

export const athletics = [
  {
    id: 1,
    slug: "basketball",
    name: "Basketball",
    team: "Hawks Varsity Basketball",
    season: "Winter",
    gender: "Boys & Girls",
    image: "/images/athletics-uniform.jpg",
    record: "12–3 (Conf. 6–1)",
    nextEvent: {
      opponent: "vs. Riverside Cougars",
      date: "Nov 21",
      time: "7:00 PM",
      location: "Main Gymnasium"
    },
    description:
      "A fast, disciplined program built on fundamentals, unity, and relentless defense. Home games fill the Hawk Nest every Friday night."
  },
  {
    id: 2,
    slug: "football",
    name: "Football",
    team: "Hawks Varsity Football",
    season: "Fall",
    gender: "Boys",
    image: "/images/hero-campus.jpg",
    record: "7–2 (Conf. 4–1)",
    nextEvent: {
      opponent: "vs. North Ridge Titans",
      date: "Oct 12",
      time: "7:00 PM",
      location: "Ironhawk Stadium"
    },
    description:
      "Friday night lights at Ironhawk Stadium. A physical, team-first program powered by a proud marching band and a packed student section."
  },
  {
    id: 3,
    slug: "soccer",
    name: "Soccer",
    team: "Hawks Varsity Soccer",
    season: "Fall / Spring",
    gender: "Boys & Girls",
    image: "/images/campus-cafeteria.jpg",
    record: "9–4–2",
    nextEvent: {
      opponent: "at Summit Prep",
      date: "Oct 16",
      time: "5:30 PM",
      location: "Away"
    },
    description:
      "Possession-focused soccer with an emphasis on movement, creativity, and composure. Our sides compete at the top of the conference each season."
  },
  {
    id: 4,
    slug: "volleyball",
    name: "Volleyball",
    team: "Hawks Varsity Volleyball",
    season: "Fall",
    gender: "Girls",
    image: "/images/campus-library.jpg",
    record: "14–2 (Conf. 8–0)",
    nextEvent: {
      opponent: "vs. Valley Christian",
      date: "Oct 14",
      time: "6:00 PM",
      location: "Main Gymnasium"
    },
    description:
      "High-energy volleyball anchored by disciplined serving, strong blocking, and one of the loudest gyms in the region."
  },
  {
    id: 5,
    slug: "baseball",
    name: "Baseball",
    team: "Hawks Varsity Baseball",
    season: "Spring",
    gender: "Boys",
    image: "/images/campus-exterior.jpg",
    record: "18–6",
    nextEvent: {
      opponent: "Season opens March 2027",
      date: "Mar 05",
      time: "4:00 PM",
      location: "Hawk Field"
    },
    description:
      "A tradition-rich program playing small-ball fundamentals on a beautiful home diamond tucked against the foothills."
  },
  {
    id: 6,
    slug: "track-and-field",
    name: "Track & Field",
    team: "Hawks Track & Field",
    season: "Spring",
    gender: "Boys & Girls",
    image: "/images/campus-hallway.jpg",
    record: "Region Champions",
    nextEvent: {
      opponent: "Season opens March 2027",
      date: "Mar 12",
      time: "3:30 PM",
      location: "Ironhawk Track"
    },
    description:
      "One of our largest teams, with athletes competing in sprints, distance, jumps, and throws — and a reputation for setting school records."
  }
];

export function findSportBySlug(slug) {
  return athletics.find((item) => item.slug === slug);
}
