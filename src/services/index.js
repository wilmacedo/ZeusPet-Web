const baseUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

const errorMsg = (error) => console.log('[Services] ' + error);

export const sendNewData = (title, value, date, setButtonText) => {
  const url = baseUrl + '/';
  let err = false;

  fetch(url, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'title': title,
      'value': value,
      'date': date
    })
  })
    .catch((error) => {
      errorMsg(error);
      setButtonText(<i className="fas fa-exclamation-circle"></i>);
      err = true;
    })
    .finally(() => {
      if (!err) setButtonText(<i className="fas fa-check"></i>);
    });
}

export const getAllItems = (setData, setLoading, reverse) => {
  const url = baseUrl + '/';

  fetch(url, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => setData(reverse ? data.reverse() : data))
    .catch((error) => errorMsg(error))
    .finally(() => setLoading(true));
}