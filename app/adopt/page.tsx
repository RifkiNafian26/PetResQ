"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdoptPage() {
  const [selectedAnimal, setSelectedAnimal] = useState("all");
  const [selectedBreed, setSelectedBreed] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [selectedAge, setSelectedAge] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Sample pet data
  const pets = [
    { id: 1, name: "Buddy", type: "Dog", breed: "Golden Retriever", age: "Adult", color: "Golden", description: "Friendly and energetic dog looking for an active family." },
    { id: 2, name: "Whiskers", type: "Cat", breed: "Persian", age: "Young", color: "White", description: "Calm and affectionate cat perfect for indoor living." },
    { id: 3, name: "Max", type: "Dog", breed: "German Shepherd", age: "Adult", color: "Brown", description: "Loyal and intelligent dog great with children." },
    { id: 4, name: "Luna", type: "Cat", breed: "Siamese", age: "Young", color: "Gray", description: "Playful and curious cat who loves to explore." },
    { id: 5, name: "Cooper", type: "Dog", breed: "Labrador", age: "Adult", color: "Black", description: "Gentle and patient dog perfect for families." },
    { id: 6, name: "Bella", type: "Cat", breed: "Maine Coon", age: "Senior", color: "Brown", description: "Sweet and gentle senior cat looking for a quiet home." },
    { id: 7, name: "Rocky", type: "Dog", breed: "Bulldog", age: "Adult", color: "White", description: "Calm and loving dog who enjoys relaxing." },
    { id: 8, name: "Snowball", type: "Rabbit", breed: "Holland Lop", age: "Young", color: "White", description: "Adorable rabbit who loves to hop around." },
    { id: 9, name: "Charlie", type: "Dog", breed: "Beagle", age: "Young", color: "Brown", description: "Energetic and friendly dog who loves adventures." },
  ];

  const dogBreeds = [
    "Golden Retriever",
    "German Shepherd",
    "Labrador",
    "Bulldog",
    "Beagle",
    "Poodle",
    "Siberian Husky",
    "Jack Russell Terrier",
    "Shiba Inu",
    "Bengal",
    "British Shorthair",
    "Himalayan",
    "Alaskan",
    "Havana",
    "Flemish Giant",
    "Holland Lop",
    "Lionhead",
    "Rex",
  ];
  const colors = ["Golden", "Brown", "Gray", "Black", "White"];
  const ages = ["Young", "Adult", "Senior"];

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  const resetFilters = () => {
    setSelectedAnimal("all");
    setSelectedBreed("all");
    setSelectedColor("all");
    setSelectedAge("all");
  };

  const filteredPets = pets.filter((pet) => {
    return (
      (selectedAnimal === "all" || pet.type.toLowerCase() === selectedAnimal) &&
      (selectedBreed === "all" || pet.breed === selectedBreed) &&
      (selectedColor === "all" || pet.color === selectedColor) &&
      (selectedAge === "all" || pet.age === selectedAge)
    );
  });

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Header with Search */}
      <div className="bg-[#5F6F52] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative max-w-sm mx-auto">
            <input
              type="text"
              placeholder="Find an Animal to Adopt"
              className="w-full px-4 py-2 pr-12 rounded-md border-2 border-[#FEFAE0] bg-[#FEFAE0] text-[#5F6F52] placeholder-[#5F6F52]/70 focus:outline-none focus:ring-2 focus:ring-[#FEFAE0]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2">
              <svg className="w-5 h-5 text-[#5F6F52]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleFilters} className="flex items-center space-x-2 bg-[#5F6F52] text-[#FEFAE0] px-4 py-2 rounded-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
              <span>Filters</span>
            </button>
          </div>

          {/* Sidebar Filters */}
          <div className={`lg:block ${filtersOpen ? "block" : "hidden"} w-full lg:w-64 bg-white rounded-lg shadow-sm border border-[#5F6F52]/10 p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#5F6F52]">Filters</h2>
              <button onClick={resetFilters} className="text-sm text-[#5F6F52] hover:text-[#4a5a43] underline">
                Reset Filters
              </button>
            </div>

            {/* Animal Type Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-[#5F6F52] mb-3">Animal</h3>
              <div className="space-y-2">
                {["all", "dog", "cat", "rabbit"].map((animal) => (
                  <label key={animal} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="animal" value={animal} checked={selectedAnimal === animal} onChange={(e) => setSelectedAnimal(e.target.value)} className="text-[#5F6F52] focus:ring-[#5F6F52]" />
                    <span className="text-sm text-[#5F6F52] capitalize">{animal === "all" ? "All Animals" : animal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Breed Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-[#5F6F52] mb-3">Breed</h3>
              <div className="max-h-48 overflow-y-auto space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="breed" value="all" checked={selectedBreed === "all"} onChange={(e) => setSelectedBreed(e.target.value)} className="text-[#5F6F52] focus:ring-[#5F6F52]" />
                  <span className="text-sm text-[#5F6F52]">All Breeds</span>
                </label>
                {dogBreeds.map((breed) => (
                  <label key={breed} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="breed" value={breed} checked={selectedBreed === breed} onChange={(e) => setSelectedBreed(e.target.value)} className="text-[#5F6F52] focus:ring-[#5F6F52]" />
                    <span className="text-sm text-[#5F6F52]">{breed}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-[#5F6F52] mb-3">Color</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="color" value="all" checked={selectedColor === "all"} onChange={(e) => setSelectedColor(e.target.value)} className="text-[#5F6F52] focus:ring-[#5F6F52]" />
                  <span className="text-sm text-[#5F6F52]">All Colors</span>
                </label>
                {colors.map((color) => (
                  <label key={color} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="color" value={color} checked={selectedColor === color} onChange={(e) => setSelectedColor(e.target.value)} className="text-[#5F6F52] focus:ring-[#5F6F52]" />
                    <span className="text-sm text-[#5F6F52]">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Age Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-[#5F6F52] mb-3">Age</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="age" value="all" checked={selectedAge === "all"} onChange={(e) => setSelectedAge(e.target.value)} className="text-[#5F6F52] focus:ring-[#5F6F52]" />
                  <span className="text-sm text-[#5F6F52]">All Ages</span>
                </label>
                {ages.map((age) => (
                  <label key={age} className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="age" value={age} checked={selectedAge === age} onChange={(e) => setSelectedAge(e.target.value)} className="text-[#5F6F52] focus:ring-[#5F6F52]" />
                    <span className="text-sm text-[#5F6F52]">{age}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Filter Button */}
            <button className="w-full bg-[#5F6F52] text-[#FEFAE0] py-2 px-4 rounded-md text-sm font-medium hover:bg-[#4a5a43] transition-colors">Apply Your Filter</button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPets.map((pet) => (
                <div key={pet.id} className="bg-white rounded-lg shadow-sm border border-[#5F6F52]/10 overflow-hidden hover:shadow-md transition-shadow">
                  {/* Pet Image Placeholder */}
                  <div className="h-48 bg-linear-to-b from-[#B5A082] to-[#8B7D6B] flex items-center justify-center">
                    <span className="text-white font-medium">Animal Photo</span>
                  </div>

                  {/* Pet Info */}
                  <div className="p-4 bg-linear-to-b from-[#5F6F52] to-[#4a5a43]">
                    <h3 className="font-semibold text-[#FEFAE0] mb-2">{pet.name}</h3>
                    <p className="text-[#FEFAE0]/90 text-sm mb-2">
                      {pet.breed} • {pet.age} • {pet.color}
                    </p>
                    <p className="text-[#FEFAE0]/80 text-xs leading-relaxed">{pet.description}</p>

                    <Link href={`/adopt/${pet.id}`} className="inline-block mt-3 bg-[#FEFAE0] text-[#5F6F52] px-3 py-1 rounded text-xs font-medium hover:bg-white transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2">
              <button className="w-8 h-8 bg-[#5F6F52] text-[#FEFAE0] rounded flex items-center justify-center hover:bg-[#4a5a43] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>

              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                    page === 1 ? "bg-[#5F6F52] text-[#FEFAE0]" : "bg-white text-[#5F6F52] border border-[#5F6F52]/20 hover:bg-[#5F6F52] hover:text-[#FEFAE0]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button className="w-8 h-8 bg-[#5F6F52] text-[#FEFAE0] rounded flex items-center justify-center hover:bg-[#4a5a43] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
