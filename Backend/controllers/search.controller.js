import { fetchfromTMDB } from "../services/tmdb.service.js";
import { User } from "../models/user.model.js";
export async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchfromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length == 0) {
      return res.status(404).send(null);
    }

    if (
      !req.user.searchHistory.some((item) => item.id === response.results[0].id)
    ) {
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          searchHistory: {
            id: response.results[0].id,
            type: "person",
            title: response.results[0].name,
            image: response.results[0].profile_path,
            createdAt: new Date(),
          },
        },
      });
    }

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function searchMovie(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchfromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length == 0) {
      return res.status(404).send(null);
    }
    if (
      !req.user.searchHistory.some((item) => item.id === response.results[0].id)
    ) {
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          searchHistory: {
            id: response.results[0].id,
            type: "movie",
            title: response.results[0].title,
            image: response.results[0].poster_path,
            createdAt: new Date(),
          },
        },
      });
    }

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function searchTv(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchfromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );
    if (response.results.length == 0) {
      return res.status(404).send(null);
    }

    if (
      !req.user.searchHistory.some((item) => item.id === response.results[0].id)
    ) {
      await User.findByIdAndUpdate(req.user._id, {
        $push: {
          searchHistory: {
            id: response.results[0].id,
            type: "tv",
            title: response.results[0].name,
            image: response.results[0].poster_path,
            createdAt: new Date(),
          },
        },
      });
    }

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getSearchHistory(req, res) {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function removeItemFromSearchHistory(req, res) {
  let { id } = req.params;
  id = parseInt(id);
  try {
    const response = await User.findByIdAndUpdate(req.user._id, {
      $pull: { searchHistory: { id: id } },
    });
    res
      .status(200)
      .json({ success: true, message: "Item removed successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
