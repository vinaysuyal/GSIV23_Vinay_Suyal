import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { getMovieCast, getMovieDetails } from "../api/movieApi";
import MovieDetail from "../pages/MovieDetail.page";

jest.mock("../api/movieApi");

const mockMovieDetail = {
  title: "Mock Movie",
  overview: "This is a mock movie.",
};

const mockMovieCredits = {
  id: 885331,
  cast: [
    {
      adult: false,
      gender: 2,
      id: 86302,
      known_for_department: "Acting",
      name: "Sunny Deol",
      original_name: "Sunny Deol",
      popularity: 12.124,
      profile_path: "/8eKOjWBvlYhBsXi7uMIKY6GCF7j.jpg",
      cast_id: 1,
      character: "Tara Singh",
      credit_id: "6169bcff9715ae004477e513",
      order: 0,
    },
    {
      adult: false,
      gender: 1,
      id: 76450,
      known_for_department: "Acting",
      name: "Ameesha Patel",
      original_name: "Ameesha Patel",
      popularity: 9.214,
      profile_path: "/d6FmmnSylIxvmJezAJLkPpJ9z1t.jpg",
      cast_id: 2,
      character: "Sakina",
      credit_id: "6169bd1a53866e0026c67064",
      order: 1,
    },
    {
      adult: false,
      gender: 2,
      id: 1116143,
      known_for_department: "Acting",
      name: "Utkarsh Sharma",
      original_name: "Utkarsh Sharma",
      popularity: 15.886,
      profile_path: "/2qGqibSA4sh6eUgpQ5gW22n5nDa.jpg",
      cast_id: 3,
      character: "Charanjeet",
      credit_id: "6169bd3a9715ae002c2ff9a0",
      order: 2,
    },
    {
      adult: false,
      gender: 1,
      id: 2108661,
      known_for_department: "Acting",
      name: "Simrat Kaur",
      original_name: "Simrat Kaur",
      popularity: 42.815,
      profile_path: "/vNhKeIw9ykidSOH9Ks4gBjHqqwh.jpg",
      cast_id: 7,
      character: "Muskaan",
      credit_id: "64ca69f0dd83fa0139dadda2",
      order: 3,
    },
    {
      adult: false,
      gender: 0,
      id: 1730661,
      known_for_department: "Acting",
      name: "Manish Wadhwa",
      original_name: "Manish Wadhwa",
      popularity: 4.696,
      profile_path: null,
      cast_id: 8,
      character: "Maj. Gen. Hamid Iqbal",
      credit_id: "64ca6a0fdcb6a3013d07908e",
      order: 4,
    },
    {
      adult: false,
      gender: 2,
      id: 1241279,
      known_for_department: "Acting",
      name: "Gaurav Chopra",
      original_name: "Gaurav Chopra",
      popularity: 4.717,
      profile_path: "/ng5QCUhbM09CAuRfxjfofjLiP85.jpg",
      cast_id: 9,
      character: "Lt. Col. Devendra Rawat",
      credit_id: "64ca6a2dd37197013978bca8",
      order: 5,
    },
    {
      adult: false,
      gender: 0,
      id: 2124679,
      known_for_department: "Acting",
      name: "Luv Sinha",
      original_name: "Luv Sinha",
      popularity: 1.244,
      profile_path: null,
      cast_id: 10,
      character: "",
      credit_id: "64ca6a4b0b74e900c99859b7",
      order: 6,
    },
    {
      adult: false,
      gender: 2,
      id: 1423932,
      known_for_department: "Acting",
      name: "Mir Sarwar",
      original_name: "Mir Sarwar",
      popularity: 5.501,
      profile_path: "/vyyRELWNWFOWKq9ubWIqWpF6KCj.jpg",
      cast_id: 11,
      character: "",
      credit_id: "64ca6a57001bbd00c9a85423",
      order: 7,
    },
    {
      adult: false,
      gender: 0,
      id: 2031854,
      known_for_department: "Acting",
      name: "Rohit Choudhary",
      original_name: "Rohit Choudhary",
      popularity: 1.614,
      profile_path: null,
      cast_id: 12,
      character: "",
      credit_id: "64ca6a680cb33517c33bbc1f",
      order: 8,
    },
    {
      adult: false,
      gender: 0,
      id: 2400260,
      known_for_department: "Acting",
      name: "Rumi Khan",
      original_name: "Rumi Khan",
      popularity: 0.6,
      profile_path: null,
      cast_id: 13,
      character: "",
      credit_id: "64ca6a73dd83fa00c518164e",
      order: 9,
    },
  ],
  crew: [
    {
      adult: false,
      gender: 0,
      id: 35739,
      known_for_department: "Editing",
      name: "Sanjay Sankla",
      original_name: "Sanjay Sankla",
      popularity: 1.502,
      profile_path: null,
      credit_id: "64ca6af40cb33517c4ebe13d",
      department: "Editing",
      job: "Editor",
    },
    {
      adult: false,
      gender: 0,
      id: 85612,
      known_for_department: "Sound",
      name: "Monty Sharma",
      original_name: "Monty Sharma",
      popularity: 0.764,
      profile_path: null,
      credit_id: "64ca6b45dd83fa011c871c50",
      department: "Sound",
      job: "Music",
    },
    {
      adult: false,
      gender: 2,
      id: 107250,
      known_for_department: "Directing",
      name: "Anil Sharma",
      original_name: "Anil Sharma",
      popularity: 3.553,
      profile_path: null,
      credit_id: "6169bd62a80236002b2a01e2",
      department: "Directing",
      job: "Director",
    },
    {
      adult: false,
      gender: 0,
      id: 110288,
      known_for_department: "Crew",
      name: "Najeeb Khan",
      original_name: "Najeeb Khan",
      popularity: 0.742,
      profile_path: null,
      credit_id: "64ca6aa585b105011cada798",
      department: "Crew",
      job: "Cinematography",
    },
    {
      adult: false,
      gender: 2,
      id: 125474,
      known_for_department: "Sound",
      name: "Mithoon Sharma",
      original_name: "Mithoon Sharma",
      popularity: 3.104,
      profile_path: "/d0Gw5ikbpWMnY15tBwBD2pw2t5F.jpg",
      credit_id: "6169bda25cea1800939a045e",
      department: "Sound",
      job: "Original Music Composer",
    },
    {
      adult: false,
      gender: 0,
      id: 928205,
      known_for_department: "Sound",
      name: "Uttam Singh",
      original_name: "Uttam Singh",
      popularity: 1.658,
      profile_path: null,
      credit_id: "64ca6b1ad37197013978bd0b",
      department: "Sound",
      job: "Original Music Composer",
    },
    {
      adult: false,
      gender: 0,
      id: 1084871,
      known_for_department: "Editing",
      name: "Ashfaq Makrani",
      original_name: "Ashfaq Makrani",
      popularity: 1.187,
      profile_path: null,
      credit_id: "64ca6add85b10500ac16849a",
      department: "Editing",
      job: "Editor",
    },
    {
      adult: false,
      gender: 0,
      id: 1116142,
      known_for_department: "Writing",
      name: "Shaktimaan Talwar",
      original_name: "Shaktimaan Talwar",
      popularity: 5.736,
      profile_path: null,
      credit_id: "6169bd8c33a53300673da52a",
      department: "Writing",
      job: "Writer",
    },
  ],
};

describe("MovieDetail Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders cast and Director ", async () => {
    getMovieDetails.mockResolvedValueOnce({ json: () => mockMovieDetail });
    getMovieCast.mockResolvedValueOnce({ json: () => mockMovieCredits });

    render(
      <MemoryRouter>
        <MovieDetail />
      </MemoryRouter>
    );

    await waitFor(() => {
      mockMovieCredits.cast.forEach((castMember) => {
        const castMemberNameRegex = new RegExp(`${castMember.name}`, "i");
        expect(screen.getByText(castMemberNameRegex)).toBeInTheDocument();
      });
      mockMovieCredits.crew.forEach((crewMember) => {
        if (crewMember.job === "Director") {
          const crewMemberNameRegex = new RegExp(`${crewMember.name}`, "i");
          expect(screen.getByText(crewMemberNameRegex)).toBeInTheDocument();
        }
      });
    });
  });
});
