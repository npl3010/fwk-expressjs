const sortViewHelper = (mySortCurrent, field) => {
  const types = {
    default: 'asc',
    asc: 'desc',
    desc: 'asc',
  };
  const icons = {
    default: '(x)',
    asc: '(min>>max)',
    desc: '(max>>min)',
  };
  if (mySortCurrent.sortField === field) {
    const currType = mySortCurrent.sortType;
    const currTypeIcon = icons[currType];
    const newType = types[currType];
    return `<a href="/me/my-employees?my_sort=${newType}&my_sort_column=${field}">${field}: ${currTypeIcon} (${currType})</a>`;
  } else {
    return `<a href="/me/my-employees?my_sort=${
      types.asc
    }&my_sort_column=${field}">${field}: ${icons.default} (${'default'})</a>`;
  }
};

module.exports = sortViewHelper;
