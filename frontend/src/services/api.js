import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error("API Response Error:", error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export const profileAPI = {
  getSummary: async () => {
    try {
      const response = await api.get("/profile/summary/");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch profile summary:", error);
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const response = await api.get("/profile/");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      throw error;
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await api.put("/profile/", profileData);
      return response.data;
    } catch (error) {
      console.error("Failed to update profile:", error);
      throw error;
    }
  },
};

export const projectsAPI = {
  getAll: async (featured = false) => {
    try {
      const url = featured ? "/projects/?featured=true" : "/projects/";
      const response = await api.get(url);
      return response.data.results || response.data;
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/projects/${id}/`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch project:", error);
      throw error;
    }
  },

  create: async (projectData) => {
    try {
      const response = await api.post("/projects/", projectData);
      return response.data;
    } catch (error) {
      console.error("Failed to create project:", error);
      throw error;
    }
  },

  update: async (id, projectData) => {
    try {
      const response = await api.put(`/projects/${id}/`, projectData);
      return response.data;
    } catch (error) {
      console.error("Failed to update project:", error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/projects/${id}/`);
      return response.status === 204;
    } catch (error) {
      console.error("Failed to delete project:", error);
      throw error;
    }
  },

  getCount: async () => {
    try {
      const response = await api.get("/projects/count/");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch project count:", error);
      throw error;
    }
  },

  toggleFeatured: async (id) => {
    try {
      const response = await api.post(`/projects/${id}/toggle-featured/`);
      return response.data;
    } catch (error) {
      console.error("Failed to toggle featured status:", error);
      throw error;
    }
  },
};

export default api;