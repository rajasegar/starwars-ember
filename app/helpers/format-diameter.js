import { helper } from '@ember/component/helper';

export default helper(function formatDiameter(params/*, hash*/) {
  const [ value ] = params;
  if (value === undefined) {
    return "";
  } else {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
      return value;
    } else {
      return `${value} Kilometers (${value * 0.621371} Miles)`;
    }
  }
});
