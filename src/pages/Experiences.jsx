import { useState } from "react";
import Container from "../components/common/Container.jsx";
import ExperienceCard from "../components/experiences/ExperienceCard.jsx";
import { experiences } from "../data/experiences.js";
import SearchInput from "../components/common/SearchInput.jsx";

const Experiences = () => {
  // Step 24.1
  const [searchTerm, setSearchTerm] = useState('');
  // END Step 24.1

  // Step 25.1 Filter
  const [selectedType, setSelectedType] = useState('All');
  // END 25.1

  // 26.1
  const [sortOrder, setSortOrder] = useState('asc');
  // END 26.1

  const experienceTypes = [
    'All',
    'Full Time',
    'Part Time',
    'Internship',
    'Freelance'
  ]
  // END 25.1

  // 24.2 Search Logic
  const searchedExperiences = experiences.filter(experience => {
    const searchValue = searchTerm.toLowerCase();

    return (
      experience.company
        .toLowerCase()
        .includes(searchValue) ||
      experience.position
        .toLowerCase()
        .includes(searchValue)
    )
  })
  // END 24.2

  // 25.2 Filtered Experiences
  const filteredExperiences = (
    selectedType === 'All'
    ? searchedExperiences
    : searchedExperiences.filter(experience =>
      experience.employmentType === selectedType
    )
  )
  // END 25.2
  
  // 26.2
  const sortedExperience = [...filteredExperiences].sort((a, b) =>
    sortOrder === 'asc'
      ? a.company.localeCompare(b.company)
      : b.company.localeCompare(a.company)
  )
  // Another way
  /* const sorted = [...filteredExperiences].sort((a, b) =>
    a.company.localeCompare(b.company)
  );
  const sortedExperience = sortOrder === 'asc'
    ? sorted
    : sorted.reverse() */
  // END 26.2

  return (
    <section className="py-16">
      <Container>
        <h1 className="mb-10 text-4xl font-bold">
          My Experiences
        </h1>

        {/* 24.3 Search Input */}
        <div className="mb-8">
          <SearchInput
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={'Search Experiences'}
          />
        </div>
        {/* END 24.3 */}
        {/* 25.3 Filter Button */}
        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          className="rounded-lg border px-4 py-2 cursor-pointer"
        >
          {
            experienceTypes.map(type =>
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            )
          }
        </select>
        {/* END 25.3 */}

        {/* 26.3 Sort Button */}
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="rounded-lg border px-4 py-2 ml-8 cursor-pointer"
        >
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
        {/* END 26.3 */}

        <div className="grid gap-6 md:grid-cols-2">
          {
            // experiences.map(experience =>
            // 24.4 Implement Search Input Value
            // searchedExperiences.map(experience =>
            // 25.4 Filter Experiences
            // filteredExperiences.map(experience =>
            // 26.4 Sort Experiences
            sortedExperience.map(experience =>
              <ExperienceCard
                key={experience.id}
                experience={experience}
              />
            )
          }
        </div>
      </Container>
    </section>
  )
}

export default Experiences;