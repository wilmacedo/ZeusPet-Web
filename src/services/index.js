const baseUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

const errorMsg = (error) => console.log('[Services] Error: ' + error);

export const sendNewData = (title, value, date, setLoading) => {
  const url = baseUrl + '/';

  setLoading(true);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'title': title,
      'value': value,
      'date': date
    })
  })
    .catch((error) => errorMsg(error))
    .finally(() => {
      setLoading(false);
    });
}