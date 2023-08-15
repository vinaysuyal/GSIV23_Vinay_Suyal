import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home.page";
import { getUpcomingMovies, searchMovie } from "../api/movieApi";

jest.mock("../api/movieApi");

const mockMovieData = {
  results: [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
  ],
  json: function () {
    return this;
  },
};

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders upcoming movie cards", async () => {
    getUpcomingMovies.mockResolvedValueOnce(mockMovieData);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      mockMovieData.results.forEach((movie) => {
        expect(screen.getByText(movie.title)).toBeInTheDocument();
      });
    });
  });

  it("renders loading state while fetching upcoming movies", async () => {
    getUpcomingMovies.mockResolvedValueOnce(mockMovieData);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("...Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("...Loading...")).toBeNull();
    });
  });

  it("handles error while fetching upcoming movies", async () => {
    const mockErrorMessage = "Fetch error";
    getUpcomingMovies.mockRejectedValueOnce(new Error(mockErrorMessage));

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("No Records Found.")).toBeInTheDocument();
    });
  });

  it("handles scroll and loads more upcoming movies", async () => {
    getUpcomingMovies.mockResolvedValueOnce(mockMovieData);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    getUpcomingMovies.mockResolvedValueOnce(mockMovieData);
    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
    });

    act(() => {
      window.scrollY = 1000;
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => {
      expect(getUpcomingMovies).toHaveBeenCalledTimes(2);
    });
  });

  it("handles search and updates movie list", async () => {
    getUpcomingMovies.mockResolvedValueOnce(mockMovieData);
    searchMovie.mockResolvedValueOnce(mockMovieData);
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText("Search a Movie...");

    act(() => {
      userEvent.type(searchInput, "Batman{enter}");
    });

    await waitFor(() => {
      expect(searchMovie).toHaveBeenCalledTimes(1);
    });
  });
});
