import { isEmpty } from '../../../services';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export const filterData = (data, loading) => {
  let filterList = [];

  if (loading && !isEmpty(data)) {
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

  if (loading && !isEmpty(data)) {
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

  if (loading && !isEmpty(filterList)) {
    for (const item in filterList) {
      let day = moment(filterList[item].date).format('ddd').toLowerCase();
      let value = filterList[item].value;

      tempList = [...tempList, { day, value }];
    }

    let defaultDays = [
      { day: 'seg', value: 0 }, { day: 'ter', value: 0 }, { day: 'qua', value: 0 },
      { day: 'qui', value: 0 }, { day: 'sex', value: 0 }, { day: 'sab', value: 0 },
      { day: 'dom', value: 0 }
    ];

    for (const item in tempList) {
      for (const obj in defaultDays) {
        if (tempList[item].day === defaultDays[obj].day) {
          defaultDays[obj].value += tempList[item].value;
        }
      }
    }

    let maxValueDay = { day: '', value: -1};

    for (const item in defaultDays) {
      if (defaultDays[item].value > maxValueDay.value) {
        maxValueDay = defaultDays[item];
      }
    }

    for (const day in days) {
      if (maxValueDay.day === days[day].substring(0, 3).toLowerCase()) {
        return days[day];
      }
    }

  }
  return '?';
}

export const getHeight = (name, data, loading) => {
  const filterList = filterData(data, loading);
  const maxValue = getMaxValue(data, loading);
  let maxHeight = 100, dayValue = 0, height = 0;

  if (loading && !isEmpty(filterList)) {
    for (const item in filterList) {
      let dbDate = moment(filterList[item].date).format('ddd').toLowerCase();

      if (name.toLowerCase() === dbDate) {
        let val = parseInt(filterList[item].value);

        if (!isNaN(val)) dayValue += val
      }
    }

    height = (dayValue / maxValue) * maxHeight;
  }

  return height === 0 || isNaN(height) ? 2 : height;
}