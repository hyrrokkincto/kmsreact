import BaseUrl from './url/BaseUrl';

let urls;
export default urls = {
  BaseUrl,
  get FilterData() {
    return `${this.BaseUrl}api/filter`
  },
};