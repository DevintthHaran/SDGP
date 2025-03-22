const BASE_URL = "http://localhost:8080/api/profile"; // Change this if your backend URL is different

// Fetch profile data from backend
export const fetchProfile = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch profile");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Update profile data in backend
export const updateProfile = async (profileData) => {
    try {
        // Basic validation
        if (!profileData.general?.username || !profileData.general?.email) {
            throw new Error("Username and email are required");
        }

        const response = await fetch(BASE_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to update profile");
        }

        return {
            success: true,
            data: await response.json(),
            message: "Profile saved successfully"
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            data: null
        };
    }
};