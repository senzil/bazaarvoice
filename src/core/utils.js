/**
 * Created by pablo on 2/9/16.
 */

export function putUrlParameter(url, paramName, value, add){

  let paramUrl = '&' + paramName + '=';
  let pattern = new RegExp(paramUrl);

  if(pattern.test(url)) {
    var groups = new RegExp('(^.*' + paramUrl + ')([^&]*)(&.*$|$)');

    if(add) {
      if(Array.isArray(value)) {
        value = value.join(',');
      }

      url = url.replace(groups, '\\1\\2,' + value + '\\3');
    } else {
      url = url.replace(groups, '\\1' + value + '\\3');
    }
  } else {
    url = url + paramUrl + value;
  }

  return url;
}
