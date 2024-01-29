import axios from "axios";

const base_url = `https://my-json-server.typicode.com/amare53/twiterdb`;

export async function getToken(clientId, clientSecret) {
    try {
        const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token',
            'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting token:', error);
        throw error;
    }
}

export async function getTweetsWithUsers() {
    try {
        const posts_url = `${base_url}/posts`;
        const postsResponse = await axios.get(posts_url);
        const postsData = postsResponse.data;

        const postsWithUsers = await Promise.all(
            postsData.map(async (post) => {
                const userResponse = await axios.get(`${base_url}/users/${post.userId}`);
                const userData = userResponse.data;
                return { ...post, user: userData };
            })
        );
        return postsWithUsers;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}