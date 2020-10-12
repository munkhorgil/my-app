import axios from 'axios';

const URL = 'https://www.googleapis.com/youtube/v3/commentThreads';
const API_KEY = 'AIzaSyAsyThfvOStT7v4WNZSEvKW854N03qr6KM'

/**
 * Get comments of given videoId
 * @param {String} videoId
 */
export const getComments = async (videoId) => {
  const response = await sendRequest(videoId);
  const { data = {} } = response;
  const { items = [] } = data;

  if (items.length === 0) {
    return [];
  }

  const comments = [];

  for (const item of items) {
    const { snippet } = item.snippet.topLevelComment;

    comments.push({
      createdAt: snippet.publishedAt,
      avatar: snippet.authorProfileImageUrl,
      name: snippet.authorDisplayName,
      comment: snippet.textOriginal
    });
  }

  return comments
};

/**
 * Send request to Youtube
 * @param {String} videoId 
 * @returns {Promise} comments of video
 */
const sendRequest = async (videoId) => {
  try {
    const response = await axios({
      method: 'GET',
      url: URL,
      params: {
        key: API_KEY,
        videoId,
        part: 'snippet',
        textForm: 'plainText',
        maxResults: 100,
      }
    });

    return response;
  } catch (e) {
    throw e;
  }
};

export const validURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}