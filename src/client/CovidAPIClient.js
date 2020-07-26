import axios from 'axios';

const COVID19_BRAZIL_API_URL = 'https://covid19-brazil-api.now.sh/api';
const STATE_LIST = ['ro', 'ac', 'am', 'rr', 'pa', 'ap', 'to', 'ma', 'pi', 'ce', 'rn', 'pb', 'pe', 'al', 'se', 'ba', 'mg', 'es', 'rj', 'sp', 'pr', 'sc', 'rs', 'ms', 'mt', 'go', 'df'];

const isValidState = (uf) => {
  return STATE_LIST.find(item => item === uf.toLowerCase()) ? true : false;
};

class CovidAPIClient {
  _getHttpClient() {
    const httpClient = axios.create({
      baseURL: COVID19_BRAZIL_API_URL
    });
    httpClient.defaults.responseType = 'json';
    return httpClient;
  }

  getReportAllState = async () => {
    const httpClient = this._getHttpClient();
    const response = await httpClient.get(`/report/v1`);
    return response.data;
  };

  getReportByState = async (uf) => {
    if(isValidState(uf)) {
      const httpClient = this._getHttpClient();
      const response = await httpClient.get(`/report/v1/brazil/uf/${uf}`);
      return response.data;
    }
    return {
      message: 'state not valid'
    };
  };
}

export default new CovidAPIClient();
