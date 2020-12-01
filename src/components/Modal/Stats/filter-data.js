import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export const filterData = (data, loading) => {
  let filterList = [];

  if (loading && data) {
    for (const item in data) {
      let dbDay = moment(data[item].date).format('DD');
      let nowDay = moment().format('DD');
      let dayWeek = moment().format('e') - 1;

      if (dbDay >= nowDay - dayWeek) filterList = [...filterList, data[item]];
    }
  }

  return filterList;
}

export const getMaxValue = (data, loading) => {
  const filterList = filterData(data, loading);
  let maxValue = 0;

  if (loading && data) {
    for (const item in filterList) {
      let val = filterList[item].value;

      if (!isNaN(val)) maxValue += val;
    }
  }

  return maxValue;
}

export const getDayMaxValue = (data, loading) => {
  const filterList = filterData(data, loading);
  const days = [
    'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'
  ];
  let tempList = [];

  if (loading && filterList) {
    for (const item in filterList) {
      let day = moment(filterList[item].date).format('ddd').toLowerCase();
      let value = filterList[item].value;

      tempList = [...tempList, { day, value }];
    }

    let test = tempList.reduce((acc, date) => acc = acc > date.value ? acc : date.day, 0);

    for (const day in days) {
      if (test == days[day].substring(0, 3).toLowerCase()) {
        return days[day];
      }
    }
    
    return '?';
  }
}

export const getHeight = (name, data, loading) => {
  const filterList = filterData(data, loading);
  const maxValue = getMaxValue(data, loading);
  let maxHeight = 150, dayValue = 0, height = 0;

  if (loading && filterList) {
    for (const item in filterList) {
      let dbDate = moment(filterList[item].date).format('ddd').toLowerCase();

      if (name.toLowerCase() == dbDate) {
        let val = parseInt(filterList[item].value);

        if (!isNaN(val)) dayValue += val
      }
    }

    height = (dayValue / maxValue) * maxHeight;
  }

  return height == 0 ? 2 : height;
}