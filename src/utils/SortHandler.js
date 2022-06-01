export default function SortHandler(items) {
  items.sort(function (a, b) {
    const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}
