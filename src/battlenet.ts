import axios from 'axios';

const BATTLENET_CLIENT_ID = process.env.BATTLENET_CLIENT_ID;
const BATTLENET_CLIENT_SECRET = process.env.BATTLENET_CLIENT_SECRET;
const BATTLENET_REDIRECT_URI = process.env.BATTLENET_REDIRECT_URI;

export const getBattleNetAccessToken = async (code: string) => {
    const response = await axios.post(
        'https://us.battle.net/oauth/token',
        {
            grant_type: 'authorization_code',
            client_id: BATTLENET_CLIENT_ID,
            client_secret: BATTLENET_CLIENT_SECRET,
            redirect_uri: BATTLENET_REDIRECT_URI,
            code,
        }
    );
    return response.data.access_token;
};