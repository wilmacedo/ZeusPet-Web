const baseUrl = 'https://zeus-mobile-backend.herokuapp.com/api/zeus';

const errorMsg = (error) => console.log('[Services] ' + error);

export const sendNewData = (title, value, date, setButtonText) => {
  const url = baseUrl + '/';
  let err = false;

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
    .catch((error) => {
      errorMsg(error);
      setButtonText(<i className="fas fa-exclamation-circle"></i>);
      err = true;
    })
    .finally(() => {
      if (!err) setButtonText(<i className="fas fa-check"></i>);
    });
}